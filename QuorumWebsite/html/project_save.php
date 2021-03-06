<?php

    require_once("php_functions.php");
    
    $user_name = getUserName($_COOKIE["sessionID"]);
    $project_name = $_POST['project_name'];
    $overwrite = filter_var($_POST['overwrite'], FILTER_VALIDATE_BOOLEAN);
    $code = $_POST['code'];
    $ide = $_POST['ide'];
    $url = $_POST['url'];

    if ($user_name === '') {
        echo "You must be logged in to save your code";
    } else {
        $result = saveProjectFile($user_name, $project_name, $code, $ide, $url, $overwrite);
        echo $result;
    }
    