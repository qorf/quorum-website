<?php
require_once("login-resources/password.php");

function connect() {
    $servername = $servername = $_ENV["MYSQL_NAME"] . ":" . $_ENV["MYSQL_PORT"];
    $dbname = $_ENV["MYSQL_DATABASE"];
    $username = $_ENV["MYSQL_USER"];
    $password = $_ENV["MYSQL_PASSWORD"];
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $conn;
    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
        return NULL;
    }
}

function disconnect($conn) {
    $conn = NULL;
}

function getUserName($session) {
    $conn = connect();
    if ($conn != NULL) {
        $stmt = $conn->prepare("SELECT username FROM sessions WHERE session = :session");
        $stmt->bindParam(':session', $session);
        $stmt->execute();

        if ($stmt->rowCount() != 1) {
            $returned_user = "";
        } else {
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $returned_user = $row['username'];
        }
        disconnect($conn);
        return $returned_user;
    }
}

function saveCodeFile($user_name, $filename, $pageURL, $ide_name, $code) {
    $conn = connect();
    if ($conn != NULL) {
        $stmt = $conn->prepare("INSERT INTO file_system (username, filename, pageURL, ide_name, code) VALUES (:user_name, :filename, :pageURL, :ide_name, :code)");
        $stmt->bindParam(':user_name', $user_name);
        $stmt->bindParam(':filename', $filename);
        $stmt->bindParam(':pageURL', $pageURL);
        $stmt->bindParam(':ide_name', $ide_name);
        $stmt->bindParam(':code', $code);
        $stmt->execute();
        disconnect($conn);
        return "Code saved for user: ".$user_name;
    } else {
        return "Failed to connect";
    }
}

function loadCodeFile($user_name, $pageURL, $ide_name) {
    $conn = connect();
    if ($conn != NULL) {
        $stmt = $conn->prepare("SELECT filename, code FROM file_system WHERE username = :user_name AND pageURL = :url AND ide_name = :ide ORDER BY created DESC" );
        $stmt->bindParam(':user_name', $user_name);
        $stmt->bindParam(':url', $pageURL);
        $stmt->bindParam(':ide', $ide_name);
        $stmt->execute();
        if ($stmt->rowCount() >= 1) {
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $code = $row['code'];
        }
        disconnect($conn);
        return $code;
    }
}

function saveRunCode($user, $version, $code, $output, $button, $ip, $url, $ide) {
    $conn = connect();
    if ($conn != NULL) {
        $stmt = $conn->prepare("INSERT INTO run_code (username, quorum_version, code, compiler_output, button, IP, pageURL, ide_name) VALUES (:user, :version, :code, :output, :button, :ip, :url, :ide)");
        $stmt->bindParam(':user', $user);
        $stmt->bindParam(':version', $version);
        $stmt->bindParam(':code', $code);
        $stmt->bindParam(':output', $output);
        $stmt->bindParam(':button', $button);
        $stmt->bindParam(':ip', $ip);
        $stmt->bindParam(':url', $url);
        $stmt->bindParam(':ide', $ide);
        $stmt->execute();
        disconnect($conn);
    }
}

function hasProjectFile($user_name, $filename)
{
    $conn = connect();
    if ($conn === NULL)
    {
        return false;
    }
    
    $stmt = $conn->prepare("SELECT deleted FROM project_files WHERE username = :user_name AND filename = :filename ORDER BY deleted ASC" );
    $stmt->bindParam(':user_name', $user_name);
    $stmt->bindParam(':filename', $filename);
    $stmt->execute();
    disconnect($conn);

    if ($stmt->rowCount() > 0) 
    {
        /*
         * Because rows are retrieved in ascending order of deletion value,
         * if there is an undeleted entry (the deleted value is 0) then it
         * will appear in the first row.
         */
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($row['deleted'] === '0')
        {
            return true;
        }
    }
    
    return false;
}

function saveProjectFile($user_name, $filename, $code, $ide, $url, $overwrite)
{
    $found = hasProjectFile($user_name, $filename);
    
    if ($found)
    {
        if ($overwrite)
        {
            $value_zero = 0;
            $value_one = 1;
            
            $update_conn = connect();
            $update_stmt = $update_conn->prepare("UPDATE project_files SET deleted = :value WHERE username = :user AND filename = :file AND deleted = :delete");
            $update_stmt->bindParam(':user', $user_name);
            $update_stmt->bindParam(':file', $filename);
            $update_stmt->bindParam(':value', $value_one);
            $update_stmt->bindParam(':delete', $value_zero);
            $update_stmt->execute();
        }
        else
        {
            return "A file already exists with that name.";
        }
    }
        
    $conn = connect();
    $stmt = $conn->prepare("INSERT INTO project_files (username, filename, code, created, page_url, ide_name) VALUES (:user, :file, :code, now(), :url, :ide)");
    $stmt->bindParam(':user', $user_name);
    $stmt->bindParam(':file', $filename);
    $stmt->bindParam(':code', $code);
    $stmt->bindParam(':url', $url);
    $stmt->bindParam(':ide', $ide);
    $stmt->execute();
    disconnect($conn);

    return 'Your project was successfully saved as "' . $filename . '".';
}

function getProjectTable()
{
    $user_name = getUserName($_COOKIE['sessionID']);
    
    if ($user_name === "")
    {
        return '<p style="text-align: center; color: black;">You must be logged in to load a project.</p>';
    }
    
    $value_zero = 0;
    
    $conn = connect();
    $stmt = $conn->prepare("SELECT shared_by, filename, modified, created, public FROM project_files WHERE username = :username AND deleted = :deleted ORDER BY modified DESC");
    $stmt->bindParam(':username', $user_name);
    $stmt->bindParam(':deleted', $value_zero);
    $stmt->execute();
    
    if ($stmt->rowCount() > 0)
    {
        $table = "<table>";
        $table .= "<tr><th>Project Name</th>" . /*"<th>Creator</th>" .*/ "<th>Last Modified</th><th>Public</th><th>Load</th><th>Share</th><th>Delete</th></tr>";
        
        $counter = 0;
        
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC))
        {
            $checked = $row['public'] == 0 ? '' : 'checked="checked"';
            $share_link = 'quorumlanguage.com/project.php?user=' . htmlspecialchars($user_name) . '&file=' . htmlspecialchars(urlencode($row['filename']));
            
            $table .= "<tr>";
            $table .= "<td>" . $row['filename'] . "</td>";
            if ($row['shared_by'] != null)
            {
                $table .= "<td>" . $row['shared_by'] . "</td>";
            }
            else
            {
                //$table .= "<td>" . $user_name . "</td>";
            }
            $table .= "<td>" . formatDate($row['modified']) . "</td>";
            $table .= '<td class="centeredRow">' . '<input class="publicCheckbox" type="checkbox" id="publicBox' . $counter . '" name="public" value="' . htmlspecialchars($row['filename']) . '" ' . $checked . ' /></td>';
            //$table .= "<td>" . $row['created'] . "</td>";
            $table .= "<td>" . '<form action="project.php">';
            $table .= '<input type="hidden" name="user" value="' . htmlspecialchars($user_name) . '"/>';
            $table .= '<input type="hidden" name="file" value="' . htmlspecialchars($row['filename']) . '"/>';
            $table .= '<input class="profileButton" type="submit" value="Load"></form>' . "</td>";
            $table .= "<td>" . '<button class="profileButton" onclick="showShareModal(\'' . $share_link . '\')">Share</button>' . "</td>";
            $table .= "<td>" . '<button class="profileButton" value="' . htmlspecialchars($row['filename']) . '" onclick="deleteRow(this)">Delete</button>' . "</td>";
            $table .= "<tr>";
        }

        $table .= "</table>"; 
        return $table;
    }
    else
    {
        return '<p style="text-align: center; color: black;">You do not have any saved projects yet.</p>';
    }
}

function getProjectSelect($id)
{
    $user_name = getUserName($_COOKIE['sessionID']);
    
    if ($user_name === "")
    {
        return '<p style="text-align: center; color: black;">You must be logged in to load a project.</p>';
    }
    
    $value_zero = 0;
    
    $conn = connect();
    $stmt = $conn->prepare("SELECT shared_by, filename, modified FROM project_files WHERE username = :username AND deleted = :deleted ORDER BY modified DESC");
    $stmt->bindParam(':username', $user_name);
    $stmt->bindParam(':deleted', $value_zero);
    $stmt->execute();
    
    if ($stmt->rowCount() > 0)
    {
        $select = '<select class="loadProjectSelect" id="' . $id . 'LoadProjectSelect" size="10" tabindex="0" data-prefix="' . $id . '">';
        
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC))
        {
            $select .= '<option value="' . $row['filename'];
            if ($row['shared_by' != null])
            {
            //    $select .= '#' . $row['shared_by'];
            }
            //$select .= '">'. $row['filename'] . ' - <em>';
            $select .= '">'. $row['filename'];
            if ($row['shared_by'] != null)
            {
                //$select .= "Shared by " . $row['shared_by'] . " - ";
            }
            //$select .= "Last modified on " . formatDate($row['modified']) . "</em>";
            $select .= "</option>";
        }

        $select .= "</select>"; 
        return $select;
    }
    else
    {
        return '<p style="text-align: center; color: black;">You do not have any saved projects yet.</p>';
    }
}

// Accepts a timestamp in SQL format (Year-Month-Day Hour-Minute-Second).
// Returns string in a more readable format, e.g. "September 7th, 2017".
function formatDate($timestamp)
{
    return date("F jS, Y", strtotime($timestamp));
}

function changeProjectPrivacy($user, $file, $public)
{
    $value_zero = 0;
    
    $conn = connect();
    $stmt = $conn->prepare("UPDATE project_files SET public = :public, modified = modified WHERE username = :user AND filename = :file AND deleted = :zero");
    $stmt->bindParam(":public", $public);
    $stmt->bindParam(":user", $user);
    $stmt->bindParam(":file", $file);
    $stmt->bindParam(":zero", $value_zero);
    $stmt->execute();
}

function changeUserPassword($key, $pass, $confirm)
{
    if (strlen($pass) < 9)
    {
        echo "Passwords must be at least 9 characters long.";
        return;
    }
    
    if ($pass !== $confirm)
    {
        return "The new password and confirm password fields must match.";
    }
    
    try 
    {
        $conn = connect();
        $stmt = $conn->prepare("SELECT email FROM password_reset_keys WHERE reset_key = :key");
        $stmt->bindParam(":key", $key);
        $stmt->execute();
        
        if ($stmt->rowCount() != 1)
        {
            return "An error occurred. Your password could not be reset.";
        }
        
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        $email = $row['email'];
        $conn = null;
        $value_one = 1;
        $hashed_pass = password_hash($pass, PASSWORD_DEFAULT);
        
        $key_update = connect();
        $key_stmt = $key_update->prepare("UPDATE password_reset_keys SET used = :one WHERE reset_key = :key");
        $key_stmt->bindParam(":one", $value_one);
        $key_stmt->bindParam(":key", $key);
        $key_stmt->execute();
        
//        echo "RESULT: " . $hashed_pass;
        
        $password_update = connect();
        $password_stmt = $password_update->prepare("UPDATE sodbeans_users SET password = :password WHERE email = :email");
        $password_stmt->bindParam(":password", $hashed_pass);
        $password_stmt->bindParam(":email", $email);
        $password_stmt->execute();
//        
//        $test_conn = connect();
//        $test_stmt = $test_conn->prepare("SELECT password, username FROM sodbeans_users WHERE email = :email");
//        $test_stmt->bindParam(":email", $email);
//        $test_stmt->execute();
//        
//        echo "Rows : " . $test_stmt->rowCount() . " ...";
    }
    catch (PDOException $e)
    {
        return "I could not connect to the server at quorumlanguage.com.";
    }
    
    return "Password successfully reset. You may now close this page and log in to the website.";
}

// Checks if the reset key provided is valid. A key is valid if it exists in the
// table, hasn't been used, and hasn't expired (less than one hour old).
// Returns 1 if the key is valid (truthy value) or 0 if it is not (falsey value).
function isValidResetKey($key)
{
    $conn = connect();
    $stmt = $conn->prepare("SELECT time, used FROM password_reset_keys WHERE reset_key = :key");
    $stmt->bindParam(':key', $key);
    $stmt->execute();
    $conn = null;

    $rows = $stmt->rowCount();
	$current_time = date("Y-m-d H:i:s");

    // For any rows we found, check if they're invalid (already expired or already used).
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
    
    return $rows > 0 ? 1 : 0;
}

?>