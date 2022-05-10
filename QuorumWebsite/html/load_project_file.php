<?php

    require_once("php_functions.php");

    $user_name = getUserName($_COOKIE['sessionID']);
    $project = $_POST['project_name'];
    $shared = $_POST['shared'];
    
    $value_zero = 0;
    
    $conn = connect();
    $stmt = $conn->prepare("SELECT id, shared_by FROM projects WHERE username = :username AND project_name = :project AND deleted = :zero ORDER BY modified DESC");
    $stmt->bindParam(":username", $user_name);
    $stmt->bindParam(":project", $project);
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
                $project_stmt = $conn->prepare("SELECT code FROM files WHERE hash = (SELECT hash FROM project_files WHERE id = :id AND deleted = :zero )");
                $project_stmt->bindParam(":id", $row['id']);
                $project_stmt->bindParam(":zero", $value_zero);
                $project_stmt->execute();
                if ($project_stmt->rowCount() === 1)
                {
                   $code_row = $project_stmt->fetch(PDO::FETCH_ASSOC);
                   echo $code_row['code'];
                }
                return;
            }
        }
    }