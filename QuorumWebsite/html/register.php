<?php
    require_once("php_functions.php");
    require_once("login-resources/password.php");
    
    $user_name = $_POST['username'];
    $user_pass = $_POST['password'];
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $birthday = $_POST['birthday'];
    $confirm_pass = $_POST['confirm_password'];

    if ($user_name === "" || $user_pass === "" || $email === "" || $birthday === "" || $confirm_pass === "")
    {
        echo "Required fields are missing.";
        return;
    }
    
    date_default_timezone_set("UTC");
    $birthday_date = DateTime::createFromFormat('m/d/Y', $birthday);
    
    if (!($birthday_date instanceof DateTime))
    {
        echo "The birthday is given in the wrong format.";
        return;
    }
    
    $age = $birthday_date->diff(new DateTime('now', new DateTimeZone("UTC")))->y;
    
    if ($age < 13)
    {
        echo "Sorry, but you must be 13 years or older to create a Quorum account.";
        return;
    }
    
    if (!(filter_var($email, FILTER_VALIDATE_EMAIL)))
    {
        echo "You must provide a valid email address.";
        return;
    }
    
    $connect = connect();
    $statement = $connect->prepare("SELECT email FROM users WHERE email = :email");
    $statement->bindParam(':email', $email);
    $statement->execute();
    if ($statement->rowCount() > 0) 
    {
        echo "An account already exists for this email.";
        return;
    }
    $connect = null;

    if (!ctype_alnum($user_name))
    {
        echo "The username can only contain letters and numbers.";
        return;
    }
    
    $connect = connect();
    $statement = $connect->prepare("SELECT username FROM users WHERE username = :user");
    $statement->bindParam(':user', $user_name);
    $statement->execute();
    if ($statement->rowCount() > 0) 
    {
        echo "This username is unavailable.";
        return;
    }
    $connect = null;

    if (strlen($user_pass) < 9)
    {
        echo "Passwords must be at least 9 characters long.";
        return;
    }
    
    if ($user_pass !== $confirm_pass)
    {
        echo "The password and confirm password fields must match.";
        return;
    }
    
    $hashed_password = password_hash($user_pass, PASSWORD_DEFAULT);
    
    try {
        $current_time = date("Y-m-d H:i:s");
        $current_tries = 0;
        $birthday_formatted = $birthday_date->format("Y-m-d");

        $conn = connect();
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $stmt = $conn->prepare("INSERT INTO users (username, password, first_name, last_name, email, birthday, reset_password_expire, tries) VALUES (:username, :password, :first_name, :last_name, :email, :birthday, :reset_password_expire, :tries)");
        $stmt->bindParam(':username', $user_name);
        $stmt->bindParam(':password', $hashed_password);
        $stmt->bindParam(':first_name', $first_name);
        $stmt->bindParam(':last_name', $last_name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':birthday', $birthday_formatted);
        $stmt->bindParam(':reset_password_expire', $current_time);
        $stmt->bindParam(':tries', $current_tries);
        $stmt->execute();
        echo "success";
    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }    
?>