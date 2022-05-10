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
    if($session  === null || $session === '') {
        return "";
    }
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


function saveRunCode($version, $code, $build, $timezone, $ip, $url, $ide) {
    $conn = connect();
    if ($conn != NULL) {
        $stmt = $conn->prepare("INSERT INTO run_code (quorum_version, build_only, address, timezone, pageURL, ide_name) VALUES (:version, :build, :address, :tz, :url, :ide)");
        $stmt->bindParam(':version', $version);
        $stmt->bindParam(':build', $build);
        $address = md5($_ENV["ADDRESS_SALT"] . $ip);
        $stmt->bindParam(':address', $address);
        $stmt->bindParam(':tz',$timezone);
        $stmt->bindParam(':url', $url);
        $stmt->bindParam(':ide', $ide);
        $stmt->execute();

        $last_id = $conn->lastInsertId();
        $fileSHA = sha1($code);
        $stmt2 = $conn->prepare("INSERT INTO compiled_files (id, hash) VALUES (:id_num, :file_hash)");
        $stmt2->bindParam(':id_num', $last_id);
        $stmt2->bindParam(':file_hash', $fileSHA);
        $stmt2->execute();
    
        $file_stmt = $conn->prepare("INSERT IGNORE INTO files (hash, code) VALUES (:file_hash, :code)");
        $file_stmt->bindParam(':file_hash', $fileSHA);
        $file_stmt->bindParam(':code', $code);
        $file_stmt->execute();
        disconnect($conn);
    }
}

function hasProject($user_name, $project)
{
    $conn = connect();
    if ($conn === NULL)
    {
        return false;
    }
    
    $stmt = $conn->prepare("SELECT deleted FROM projects WHERE username = :user_name AND project_name = :project ORDER BY deleted ASC" );
    $stmt->bindParam(':user_name', $user_name);
    $stmt->bindParam(':project', $project);
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

function saveProjectFile($user_name, $project_name, $code, $ide, $url, $overwrite)
{
    $found = hasProject($user_name, $project_name);
    
    if ($found)
    {
        if ($overwrite)
        {
            // if overwriting 'delete' old one
            $value_zero = 0;
            $value_one = 1;
            
            $id = -1;
            // get id of project
            $conn = connect();
            $id_stmt = $conn->prepare("SELECT id FROM projects WHERE username = :user AND project_name = :project");
            $id_stmt->bindParam(":user", $user_name);
            $id_stmt->bindParam(":project", $project_name);
            $id_stmt->execute();
            if ($id_stmt->rowCount() > 0) 
            {
                $row = $id_stmt->fetch(PDO::FETCH_ASSOC);
                $id = $row['id'];
        
            } else {
                return;
            }
        
            // set project to deleted
            $stmt = $conn->prepare("UPDATE projects SET deleted = :one WHERE id = :id_num");
            $stmt->bindParam(":one", $value_one);
            $stmt->bindParam(":id_num", $id);
            $stmt->execute();
        
            // set files associated to project to deleted
            $stmt2 = $conn->prepare("UPDATE project_files SET deleted = :one WHERE id = :id_num");
            $stmt2->bindParam(":one", $value_one);
            $stmt2->bindParam(":id_num", $id);
            $stmt2->execute();
            disconnect($conn);
        }
        else
        {
            return "A file already exists with that name.";
        }
    }
    
    $fileSHA = sha1($code);

    $conn = connect();
    $stmt = $conn->prepare("INSERT INTO projects (username, project_name, created, pageURL, ide_name) VALUES (:user, :project, now(), :url, :ide)");
    $stmt->bindParam(':user', $user_name);
    $stmt->bindParam(":project", $project_name);
    $stmt->bindParam(':url', $url);
    $stmt->bindParam(':ide', $ide);
    $stmt->execute();

    $last_id = $conn->lastInsertId();
    // UPDATE WHEN USERS CAN SET FILENAMES
    $default_filename = "Main";
    $project_stmt = $conn->prepare("INSERT INTO project_files (id, filename, hash) VALUES (:id_num, :filename, :file_hash)");
    $project_stmt->bindParam(':id_num', $last_id);
    $project_stmt->bindParam(':filename', $default_filename);
    $project_stmt->bindParam(':file_hash', $fileSHA);
    $project_stmt->execute();

    $file_stmt = $conn->prepare("INSERT IGNORE INTO files (hash, code) VALUES (:file_hash, :code)");
    $file_stmt->bindParam(':file_hash', $fileSHA);
    $file_stmt->bindParam(':code', $code);
    $file_stmt->execute();

    disconnect($conn);

    return 'Your project was successfully saved as "' . $project_name . '".';
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
    $stmt = $conn->prepare("SELECT shared_by, project_name, modified, created, public FROM projects WHERE username = :username AND deleted = :deleted ORDER BY modified DESC");
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
            $share_link = 'quorumlanguage.com/project.php?user=' . htmlspecialchars($user_name) . '&file=' . htmlspecialchars(urlencode($row['project_name']));
            
            $table .= "<tr>";
            $table .= "<td>" . $row['project_name'] . "</td>";
            if ($row['shared_by'] != null)
            {
                $table .= "<td>" . $row['shared_by'] . "</td>";
            }
            else
            {
                //$table .= "<td>" . $user_name . "</td>";
            }
            $table .= "<td>" . formatDate($row['modified']) . "</td>";
            $table .= '<td class="centeredRow">' . '<input class="publicCheckbox" type="checkbox" id="publicBox' . $counter . '" name="public" value="' . htmlspecialchars($row['project_name']) . '" ' . $checked . ' /></td>';
            //$table .= "<td>" . $row['created'] . "</td>";
            $table .= "<td>" . '<form action="project.php">';
            $table .= '<input type="hidden" name="user" value="' . htmlspecialchars($user_name) . '"/>';
            $table .= '<input type="hidden" name="file" value="' . htmlspecialchars($row['project_name']) . '"/>';
            $table .= '<input class="profileButton" type="submit" value="Load"></form>' . "</td>";
            $table .= "<td>" . '<button class="profileButton" onclick="showShareModal(\'' . $share_link . '\')">Share</button>' . "</td>";
            $table .= "<td>" . '<button class="profileButton" value="' . htmlspecialchars($row['project_name']) . '" onclick="deleteRow(this)">Delete</button>' . "</td>";
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
    $stmt = $conn->prepare("SELECT shared_by, project_name, modified FROM projects WHERE username = :username AND deleted = :deleted ORDER BY modified DESC");
    $stmt->bindParam(':username', $user_name);
    $stmt->bindParam(':deleted', $value_zero);
    $stmt->execute();
    
    if ($stmt->rowCount() > 0)
    {
        $select = '<select class="loadProjectSelect" id="' . $id . 'LoadProjectSelect" size="10" tabindex="0" data-prefix="' . $id . '">';
        
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC))
        {
            $select .= '<option value="' . $row['project_name'];
            if ($row['shared_by'] != null)
            {
            //    $select .= '#' . $row['shared_by'];
            }
            //$select .= '">'. $row['filename'] . ' - <em>';
            $select .= '">'. $row['project_name'];
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

function changeProjectPrivacy($user, $project, $public)
{
    $value_zero = 0;
    
    $conn = connect();
    $stmt = $conn->prepare("UPDATE projects SET public = :public, modified = modified WHERE username = :user AND project_name = :project AND deleted = :zero");
    $stmt->bindParam(":public", $public);
    $stmt->bindParam(":user", $user);
    $stmt->bindParam(":project", $project);
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
        $password_stmt = $password_update->prepare("UPDATE users SET password = :password WHERE email = :email");
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