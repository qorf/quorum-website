<?php
    require_once("php_functions.php");
    
    $session = "";
    if (isset($_COOKIE['sessionID'])) {
        $session = $_COOKIE['sessionID'];
    }
    if (getUserName($session) === "") {
        echo "failure";
    } else {
        echo "success";
    }
?>
