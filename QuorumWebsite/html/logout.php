<?php

$success = 0;
$session = 0;

if (isset($_COOKIE["sessionID"]))
{
    $session = $_COOKIE["sessionID"];
    $domain = $_ENV["DOMAIN"];
    $success = setcookie("sessionID", "", time() - 3600, "/", $domain, true, true);
}

if ($success)
{
    unset($_COOKIE["sessionID"]);
    echo "success";
    
    // Inform the database of the logged out session.
    if ($session !== 0)
    {
        try 
        {
            $servername = $servername = $_ENV["MYSQL_NAME"] . ":" . $_ENV["MYSQL_PORT"];
            $dbname = $_ENV["MYSQL_DATABASE"];
            $username = $_ENV["MYSQL_USER"];
            $password = $_ENV["MYSQL_PASSWORD"];
            $connect = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
            $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $statement = $connect->prepare("DELETE FROM sessions WHERE session=:session");
            $statement->bindParam(':session', $session);
            $statement->execute();
        }
        catch (PDOException $e) 
        {
            // Silently ignore the error.
        }
    }
}
else
{
    echo "failure";
}