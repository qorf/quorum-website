-- MariaDB dump 10.19  Distrib 10.6.3-MariaDB, for debian-linux-gnu (aarch64)
--
-- Host: localhost    Database: brandon_sodbeans_users
-- ------------------------------------------------------
-- Server version	10.6.3-MariaDB-1:10.6.3+maria~focal

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `compiled_files`
--

DROP TABLE IF EXISTS `compiled_files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `compiled_files` (
  `id` int(11) DEFAULT NULL,
  `hash` char(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `files` (
  `hash` char(40) NOT NULL,
  `code` text DEFAULT NULL,
  PRIMARY KEY (`hash`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `password_reset_addresses`
--

DROP TABLE IF EXISTS `password_reset_addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_reset_addresses` (
  `address` char(45) NOT NULL COMMENT 'An IP address that has made password reset requests.',
  `last_time` datetime NOT NULL COMMENT 'The time of the last valid request from this IP.',
  `recent_tries` int(4) NOT NULL COMMENT 'How many valid tries have been made within an hour of each other.',
  PRIMARY KEY (`address`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Tracks IP addresses of password reset requests. ';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `password_reset_keys`
--

DROP TABLE IF EXISTS `password_reset_keys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_reset_keys` (
  `reset_key` varchar(50) NOT NULL COMMENT 'Randomly generated reset key.',
  `email` varchar(255) NOT NULL COMMENT 'The email attached to the account that reset is for.',
  `time` datetime NOT NULL COMMENT 'The time the request was issued at. Requests are valid for an hour after this time.',
  `address` varchar(45) NOT NULL COMMENT 'IP address the request originated from.',
  `used` int(1) NOT NULL COMMENT 'Whether this request has been used yet.',
  PRIMARY KEY (`reset_key`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Table containing keys and related info used for individual reset requests.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `project_files`
--

DROP TABLE IF EXISTS `project_files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `project_files` (
  `id` int(11) NOT NULL,
  `filename` varchar(20) NOT NULL,
  `deleted` tinyint(1) NOT NULL DEFAULT 0,
  `hash` char(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `shared_by` varchar(20) DEFAULT NULL,
  `project_name` varchar(255) NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `modified` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted` tinyint(1) DEFAULT 0,
  `public` tinyint(1) DEFAULT 0,
  `pageURL` text NOT NULL,
  `ide_name` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10158 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `quorum_studio_downloads`
--

DROP TABLE IF EXISTS `quorum_studio_downloads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quorum_studio_downloads` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `operating_system` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `version_major` smallint(6) DEFAULT NULL,
  `version_minor` smallint(6) DEFAULT NULL,
  `username` varchar(20) DEFAULT NULL,
  `download` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3815 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `run_code`
--

DROP TABLE IF EXISTS `run_code`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `run_code` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quorum_version` varchar(20) NOT NULL,
  `build_only` tinyint(1) DEFAULT NULL,
  `address` char(32) DEFAULT NULL,
  `timezone` varchar(40) DEFAULT NULL,
  `pageURL` text DEFAULT NULL,
  `ide_name` text DEFAULT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=516043 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessions` (
  `session` varchar(255) NOT NULL DEFAULT '',
  `username` varchar(20) CHARACTER SET utf16 NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`session`),
  UNIQUE KEY `session` (`session`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `username` varchar(20) CHARACTER SET latin1 NOT NULL,
  `password` char(255) NOT NULL,
  `reset_password_key` varchar(50) CHARACTER SET latin1 DEFAULT NULL,
  `reset_password_expire` datetime NOT NULL,
  `tries` int(8) NOT NULL,
  `last_attempted_login` datetime DEFAULT NULL,
  `last_successful_login` datetime DEFAULT NULL,
  `email` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `administrator` int(1) DEFAULT 0,
  `first_name` varchar(100) CHARACTER SET latin1 DEFAULT NULL,
  `last_name` varchar(100) CHARACTER SET latin1 DEFAULT NULL,
  `birthday` date NOT NULL,
  PRIMARY KEY (`username`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-28 16:00:17
