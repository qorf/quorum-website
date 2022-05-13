<?php

    require_once("php_functions.php");

    $user_name = getUserName($_COOKIE["sessionID"]);
    $id = -1;
    if ($user_name === "")
    {
        echo "You are not logged in.";
        return;
    }
    
    $project_name = htmlspecialchars_decode($_POST['project']);
    $value_one = 1;
    
    $conn = connect();

    // get id of project
    $id_stmt = $conn->prepare("SELECT id FROM projects WHERE username = :user AND project_name = :project");
    $id_stmt->bindParam(":user", $user_name);
    $id_stmt->bindParam(":project", $project_name);
    $id_stmt->execute();
    if ($id_stmt->rowCount() > 0) 
    {
        $row = $id_stmt->fetch(PDO::FETCH_ASSOC);
        $id = $row['id'];

    } else {
        return;
    }

    // set project to deleted
    $stmt = $conn->prepare("UPDATE projects SET deleted = :one WHERE id = :id_num");
    $stmt->bindParam(":one", $value_one);
    $stmt->bindParam(":id_num", $id);
    $stmt->execute();

    // set files associated to project to deleted
    $stmt2 = $conn->prepare("UPDATE project_files SET deleted = :one WHERE id = :id_num");
    $stmt2->bindParam(":one", $value_one);
    $stmt2->bindParam(":id_num", $id);
    $stmt2->execute();
    
    echo "success";
    disconnect($conn);