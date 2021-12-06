<?php

    require_once("php_functions.php");
    require_once("login-resources/random/random.php");

    function send_email($recipient, $subject, $body) {
        $success = true;

        $sender = 'Quorum Website <noreply@quorumlanguage.com>';
        $mailgun_endpoint = getenv('MAILGUN_API_ENDPOINT');

        $data = [
            'from' => $sender,
            'to' => $recipient,
            'subject' => $subject,
            'text' => $body
        ];

        $curl = curl_init($mailgun_endpoint);

        curl_setopt($curl, CURLOPT_USERNAME, 'api');
        curl_setopt($curl, CURLOPT_PASSWORD, getenv('MAILGUN_API_KEY'));
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

        curl_exec($curl);

        if (curl_error($curl)) {
            error_log("Error sending MailGun e-mail via curl: " . curl_error($curl));
            $success = false;
        }

        curl_close($curl);

        return $success;
    }

    function generate_reset_key()
    {
        $current_time = date("Y-m-d H:i:s");
        $iterations = 0;
        $rows = 1;
        // If we haven't found an available key in 10 tries, then something is
        // likely wrong. Abort and report an error.
        while ($rows !== 0 && $iterations < 10)
        {
            $result = bin2hex(random_bytes(25));
            
            $conn = connect();
            $stmt = $conn->prepare("SELECT time, used FROM password_reset_keys WHERE reset_key = :key");
            $stmt->bindParam(':key', $result);
            $stmt->execute();
            $conn = null;
            
            $iterations++;
            $rows = $stmt->rowCount();
            
            // For any rows we found, check if they're valid (already expired or already used).
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC))
            {
                if (($row['used'] === '1') || (strtotime($current_time) - strtotime($row['time']) > 3600))
                {
                    $rows--;
                }
                else
                {
                    // Don't bother checking the rest if we've found a valid entry.
                    break;
                }
            }
        }
        
        if ($rows !== 0)
        {
            return "failure";
        }
        
        return $result;
    }
    
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $ip_address = $_SERVER['REMOTE_ADDR'];
    
    $conn = connect();
    $stmt = $conn->prepare("SELECT username FROM sodbeans_users WHERE email = :email");
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    $conn = null;
    
    if ($stmt->rowCount() != 1) 
    {
        error_log("User from address " . $ip_address . " attempted to reset password for " . $email . " but there was no registered account.");
        echo "This email is not registered with a Quorum account. You may have made an account with a different email."
            . " If you don't have an account, you can create one from the login area.";
        return;
    }
    
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $user_name = $row['username'];

    $reset_key = generate_reset_key();
    
    if ($reset_key === "failure")
    {
        // In order for this to happen in correct circumstances, a user would
        // have to find non-unique keys 10 times in a row (incredibly unlikely).
        error_log("User from address " . $ip_address . " failed to generate reset key for email " . $email);
        echo "An unexpected error occurred. Please try again.";
        return;
    }
    
    $link = "http://quorumlanguage.com/reset_password.php?pagekey=" . $reset_key;
    
    try 
    {
        date_default_timezone_set('UTC');
        $reset_date = date("Y-m-d H:i:s");
        
        $addr_select = connect();
        $addr_stmt = $addr_select->prepare("SELECT last_time, recent_tries FROM password_reset_addresses WHERE address = :address");
        $addr_stmt->bindParam(':address', $ip_address);
        $addr_stmt->execute();
        $addr_select = null;
        
        if ($addr_stmt->rowCount() === 0)
        {
            $tries = 1;
            $addr_insert = connect();
            $addr_stmt = $addr_insert->prepare("INSERT INTO password_reset_addresses (address, last_time, recent_tries) VALUES (:address, :time, :tries)");
            $addr_stmt->bindParam(':address', $ip_address);
            $addr_stmt->bindParam(':time', $reset_date);
            $addr_stmt->bindParam(':tries', $tries);
            $addr_stmt->execute();
            $addr_insert = null;
        }
        else
        {
            $addr_row = $addr_stmt->fetch(PDO::FETCH_ASSOC);
            $last_time = $addr_row['last_time'];
            $tries = $addr_row['recent_tries'];
            $addr_stmt = null;
            
            if (strtotime($reset_date) - strtotime($last_time) > 3600)
            {
                $tries = 0;
            }
            elseif ($tries >= 10)
            {
                error_log("User from address " . $ip_address . " exceeded reset tries while trying to reset " . $email);
                echo "You can not request any more password resets at this time. Please try again later.";
                return;
            }
            
            $tries = $tries + 1;
            
            $addr_update = connect();
            $addr_stmt = $addr_update->prepare("UPDATE password_reset_addresses SET last_time = :time, recent_tries = :tries WHERE address = :address");
            $addr_stmt->bindParam(':time', $reset_date);
            $addr_stmt->bindParam(':tries', $tries);
            $addr_stmt->bindParam(':address', $ip_address);
            $addr_stmt->execute();
            $addr_update = null;
        }
        
        $key_update = connect();
        $used = 0;
        $key_stmt = $key_update->prepare("INSERT INTO password_reset_keys (reset_key, email, time, address, used) VALUES (:key, :email, :time, :address, :used)");
        $key_stmt->bindParam(':key', $reset_key);
        $key_stmt->bindParam(':email', $email);
        $key_stmt->bindParam(':time', $reset_date);
        $key_stmt->bindParam(':address', $ip_address);
        $key_stmt->bindParam(':used', $used);
        $key_stmt->execute();
        $key_update = null;
    }
    catch (PDOException $e)
    {
        echo "I could not connect to the server at quorumlanguage.com.";
        return;
    }
    
    $subject = "Quorum Password Reset Request";
    $message = "Hi " . $user_name . ",\r\n\r\n";
    $message .= "A password reset was requested for your Quorum account. \r\n";
    $message .= "You can use the following link to reset your password: \r\n";
    $message .= $link . " \r\n";
    $message .= "This reset link is valid for 1 hour. If you need a new reset link, you may request one from the forgot password page.\r\n";
    $message .= "If you didn't make this request, then you can safely ignore this email. No action is required.\r\n\r\n";
    $message .= "Happy coding!\r\n\r\n";
    $message .= "The Quorum Programming Language Team";
    
    $success = send_email($email, $subject, $message);

    if (!$success)
    {
        echo "We were unable to send a reset email at this time. Please try again later. ";
        $mail_error = error_get_last();
        if ($mail_error == null)
        {
            error_log("There was an unknown error while emailing a password reset to " . $email);
            return;
        }

        $mail_error_output = "MAIL ERROR ";
        foreach ($a as $item) {
            $mail_error_output .= " - " . $item;
        }
        error_log($mail_error_output);

        return;
    }
    
    echo "An email has been sent to this address. Please check your email and follow the instructions to reset your account password.";