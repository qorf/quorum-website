<?php

//require_once("config.php");

if ($OKToPost === TRUE) {

    try {
        $servername = $servername = $_ENV["MYSQL_NAME"] . ":" . $_ENV["MYSQL_PORT"];
        $dbname = $_ENV["MYSQL_DATABASE"];
        $username = $_ENV["MYSQL_USER"];
        $password = $_ENV["MYSQL_PASSWORD"];
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $stmt = $conn->prepare("INSERT INTO run_code (username, quorum_version, code, compiler_output, button, IP, pageURL, ide_name) VALUES (:user, :version, :code, :output, :button, :ip, :url, :ide)");
        $stmt->bindParam(':user', $user);
        $stmt->bindParam(':version', $version);
        $stmt->bindParam(':code', $code);
        $stmt->bindParam(':output', $output);
        $stmt->bindParam(':button', $button);
        $stmt->bindParam(':ip', $ip);
        $stmt->bindParam(':url', $url);
        $stmt->bindParam(':ide', $ide);
        $stmt->execute();
    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
    $conn = null;
}
?>