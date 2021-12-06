<?php

    require_once("php_functions.php");

    $user_name = getUserName($_COOKIE["sessionID"]);
    
    if ($user_name === "")
    {
        echo "You are not logged in.";
        return;
    }
    
    $file_name = htmlspecialchars_decode($_POST['file']);
    $value_one = 1;
    
    $conn = connect();
    $stmt = $conn->prepare("UPDATE project_files SET deleted = :one WHERE username = :user AND filename = :file");
    $stmt->bindParam(":one", $value_one);
    $stmt->bindParam(":user", $user_name);
    $stmt->bindParam(":file", $file_name);
    $stmt->execute();
    
    echo "success";