<?php
    require_once("php_functions.php");

    $user_name = getUserName($_COOKIE["sessionID"]);
    $pageURL = $_POST['pageURL'];
    $ide_name = $_POST['ide_name'];
    
    if ($user_name === '') {
        echo "";
    } else {
        $result = loadCodeFile($user_name, $pageURL, $ide_name);
        echo $result;
    }
?>
