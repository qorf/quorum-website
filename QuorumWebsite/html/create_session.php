<?php
    require_once("php_functions.php");
    
    $session = $_POST['session'];
    $user_name = $_POST['username'];
        
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $stmt = $conn->prepare("INSERT INTO sessions (session, username) VALUES (:session, :username)");
        $stmt->bindParam(':session', $session);
        $stmt->bindParam(':username', $user_name);
        $stmt->execute();
        echo "success";
    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }    
?>