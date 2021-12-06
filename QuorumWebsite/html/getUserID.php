<?php
    require_once("php_functions.php");
    
    $session = $_POST['session'];
        
    echo getUserID($session);
?>
