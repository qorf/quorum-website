<?php

    require_once("php_functions.php");

    $id = $_POST['id'];
    
    echo getProjectTable($id);