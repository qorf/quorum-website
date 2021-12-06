<?php

    require_once("php_functions.php");

    $user_name = getUserName($_COOKIE['sessionID']);
    $filename = $_POST['filename'];
    $shared = $_POST['shared'];
    
    $value_zero = 0;
    
    $conn = connect();
    $stmt = $conn->prepare("SELECT code, shared_by FROM project_files WHERE username = :username AND filename = :filename AND deleted = :zero ORDER BY modified DESC");
    $stmt->bindParam(":username", $user_name);
    $stmt->bindParam(":filename", $filename);
    $stmt->bindParam(":zero", $value_zero);
    $stmt->execute();
    
//    echo "// " . $stmt->rowCount() . " rows were found.";
//    echo " // user: " . $user_name;
//    echo " // value: " . $value_zero;
//    echo " // shared: " . $shared;
    
    if ($stmt->rowCount() > 0)
    {
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC))
        {
            if ($shared == $row['shared_by'])
            {
                echo $row['code'];
                return;
            }
        }
    }