<?php
    require_once("php_functions.php");
    
    $session = $_COOKIE['sessionID'];
        
    if (getUserName($session) === "") {
        echo "failure";
    } else {
        echo "success";
    }
?>
