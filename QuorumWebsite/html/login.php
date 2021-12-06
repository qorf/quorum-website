<?php
    function check_password($client_pass, $actual_pass) 
    {
        return password_verify($client_pass, $actual_pass);
    }
    
    function generate_session_id()
    {
        return bin2hex(random_bytes(32));
    }
    
    require_once("php_functions.php");
    require_once("login-resources/password.php");
    require_once("login-resources/random/random.php");
    
    $requested_user = $_POST['username'];
    $requested_password = $_POST['password'];

    try {
        $servername = $servername = $_ENV["MYSQL_NAME"] . ":" . $_ENV["MYSQL_PORT"];
        $dbname = $_ENV["MYSQL_DATABASE"];
        $username = $_ENV["MYSQL_USER"];
        $password = $_ENV["MYSQL_PASSWORD"];
        $domain = $_ENV["DOMAIN"];
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $stmt = $conn->prepare("SELECT username, password, tries, last_attempted_login FROM sodbeans_users WHERE username = :user");
        $stmt->bindParam(':user', $requested_user);
        $stmt->execute();
        
        if ($stmt->rowCount() != 1) {
             echo "Incorrect username or password.";
        } else {
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $returned_user = $row['username'];
            $returned_password = $row['password'];
            $last_login = $row['last_attempted_login'];
            $current_time = date("Y-m-d H:i:s");
            
            if (strtotime($current_time) - strtotime($last_login) > 600)
            {
                $tries = 0;
            }
            else
            {
                $tries = $row['tries'] + 1;
            }
            
            if ($tries >= 10)
            {
                $try_update = connect();
                $update_stmt = $try_update->prepare("UPDATE sodbeans_users SET tries = :tries WHERE username = :user");
                $update_stmt->bindParam(':user', $requested_user);
                $update_stmt->bindParam(':tries', $tries);
                $update_stmt->execute();
                
                echo "You could not be logged in at this time. Please try again later.";
                return;
            }
            
            $is_correct = check_password($requested_password, $returned_password);
            if($is_correct) {
                $session = generate_session_id();
                $success = setcookie("sessionID", $session, time() + (86400 * 30), "/", $domain, true, true);
                if ($success)
                {
                    try 
                    {
                        $tries = 0;
                        $try_update = connect();
                        $update_stmt = $try_update->prepare("UPDATE sodbeans_users SET tries = :tries, last_attempted_login = :time, last_successful_login = :time WHERE username = :user");
                        $update_stmt->bindParam(':user', $requested_user);
                        $update_stmt->bindParam(':tries', $tries);
                        $update_stmt->bindParam(':time', $current_time);
                        $update_stmt->execute();
                    }
                    catch (PDOException $ex) 
                    {
                        echo "Failed to update login information: " . $ex->getMessage();
                    }
                    // Inform the database of the new session.
                    try {
                        $connect = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
                        $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                        $statement = $connect->prepare("INSERT INTO sessions (session, username) VALUES (:session, :username)");
                        $statement->bindParam(':session', $session);
                        $statement->bindParam(':username', $requested_user);
                        $statement->execute();
                        echo "success";
                    } catch (PDOException $e) {
                        //echo "Failed to create session: " . $e->getMessage();
                        echo "Failed to create session; please try again later.";
                    }
                }
                else
                {
                    echo "Failed to create session; your browser must allow cookies to login.";
                }
            } 
            else 
            {
                $try_update = connect();
                $update_stmt = $try_update->prepare("UPDATE sodbeans_users SET tries = :tries, last_attempted_login = :time WHERE username = :user");
                $update_stmt->bindParam(':user', $requested_user);
                $update_stmt->bindParam(':tries', $tries);
                $update_stmt->bindParam(':time', $current_time);
                $update_stmt->execute();
                echo "Incorrect username or password.";
            }
        }

    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
    
    $conn = null;  
?>
