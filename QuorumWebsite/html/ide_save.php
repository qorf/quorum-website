<?php
    require_once("php_functions.php");
    
    $user_name = getUserName($_COOKIE["sessionID"]);
    $file_name = $_POST['file_name'];
    $pageURL = $_POST['pageURL'];
    $ide_name = $_POST['ide_name'];
    $code = $_POST['code'];

    if ($user_name === '') {
        echo "You must be logged in to save your code";
    } else {
        $result = saveCodeFile($user_name, $file_name, $pageURL, $ide_name, $code);
        echo $result;
    }
?>