<?php

    // Many of the checks here are duplicates from reset_password.php.
    // This is necessary to ensure that reset_password.php can use this
    // information to display the page, but skipping the page doesn't allow an
    // attacker to skip security checks.

    require_once("php_functions.php");

    if (!isset($_POST['pagekey']))
    {
        echo "Invalid page key - if you need to reset your password, use the 'forgot password' option in the login pane.";
        return;
    }

    $key = $_POST['pagekey'];

    if ($key === null || $key === "")
    {
        echo "Invalid page key - if you need to reset your password, use the 'forgot password' option in the login pane.";
        return;
    }

//    $conn = connect();
//    $stmt = $conn->prepare("SELECT time, used FROM password_reset_keys WHERE reset_key = :key");
//    $stmt->bindParam(':key', $key);
//    $stmt->execute();

//    if ($stmt->rowCount() === 0) 
//    {
//        echo "Invalid page key - if you need to reset your password, use the 'forgot password' option in the login pane.";
//        return;
//    }

//    $row = $stmt->fetch(PDO::FETCH_ASSOC);
//    $reset_time = $row['time'];
//    $used = $row['used'];
//    $current_time = date("Y-m-d H:i:s");
    
    // Password reset keys expire after an hour.
    //if (($used === '1') || (strtotime($current_time) - strtotime($reset_time) > 3600))
    if (!isValidResetKey($key))
    {
        echo "Invalid page key - if you need to reset your password, use the 'forgot password' option in the login pane.";
        return;
    }
    
    $pass = $_POST['reset_password'];
    $confirm = $_POST['confirm_reset_password'];
    echo changeUserPassword($key, $pass, $confirm);
