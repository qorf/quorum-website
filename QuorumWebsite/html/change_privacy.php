<?php

require_once("php_functions.php");
    
    $user_name = getUserName($_COOKIE["sessionID"]);
    $file_name = $_POST['file'];
    $public = $_POST['public'];
    
    if ($user_name === '') {
        echo "Invalid login";
    } else {
        $result = changeProjectPrivacy($user_name, $file_name, $public);
        echo $result;
    }