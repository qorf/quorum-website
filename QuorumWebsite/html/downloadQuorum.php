<?php

    require_once("php_functions.php");
    
    $session = $_COOKIE['sessionID'];
    $user_name = getUserName($session);

    if ($user_name === "") {
        echo '<!DOCTYPE html>
    <html xml:lang= "en" lang= "en" >
        <head >
            <title >Quorum Profile Page - Quorum Programming Language</title>
            <meta charset= "UTF-8" >
            <meta content= "width=device-width, initial-scale=1" name= "viewport" >
            <meta content= "Login to download this file." name= "description" >
            <meta content= "programming for beginners, game programming, 
        lego programming, computer courses, programming 3D, programming,
        animation, graphics, multimedia, games, accessibility, computer science for all,
        computer science, computer languages, Quorum programming language, robot programming,
        online programming" name= "keywords" >
            <script src= "/script/jquery-1.8.3.min.js"  type="text/javascript"></script>
            <script src= "/script/script.js"  type="text/javascript"></script>
            <link rel= "stylesheet" type= "text/css" href= "/style/style.css" >
            <link rel= "stylesheet" type= "text/css" href= "/style/google.css" >
            <link rel= "icon" type= "image/x-icon" href= "/media/favicon.ico" >
            <link rel= "stylesheet" type= "text/css" href= "/style/style-small.css" media= "(max-width: 500px)" >
            <link rel= "stylesheet" type= "text/css" href= "/style/style-medium.css" media= "(min-width: 501px) and (max-width: 1000px)" >
            <link rel= "stylesheet" type= "text/css" href= "/style/style-large.css" media= "(min-width: 1001px)" >
        </head>
        <body >
            <nav class= "headerNavBar outermostContainer" >
                <div class= "skiptocontent" ><a href= "#main" >skip to main content</a></div>
                <ul >
                    <li ><a id= "homePageLink" href= "https://quorumlanguage.com/" ><img src= "/media/QuorumLogoWhite.png" alt= "Home" >Quorum</a></li>
                    <li ><a href= "/learn.html" >Learn</a></li>
                    <li ><a href= "/selection.html" >Hour of Code</a></li>
                    <li ><a href= "/reference.html" >Reference</a></li>
                    <li ><a href= "/libraries.html" >Libraries</a></li>
                    <li ><a href= "/download.html" >Download</a></li>
                    <li ><a href= "https://quorum.atlassian.net" >Bugs</a></li><li ><a id= "profileButton" href= "profile.php" >My Projects</a></li><li ><a id= "loginButton" onclick= "loginButtonPressed()" href= "#" >Login</a></li>
                </ul>
                <form action= "/search.php" id= "searchForm" role= "search" method= "post" >
                    <input id= "searchFormInput" title= "Search Input" type= "text" placeholder= "How do I create an array?" name= "search-query" /><input id= "searchFormButton" value= "Search" title= "Submit Button" type= "submit" />
                </form>
                <div id= "loginModal" class= "modal" role= "dialog" aria-labelledby= "loginTitleDiv" >
                    <div class= "modal-dialog modal-content animate" >
                        <div id= "loginTitleDiv" class= "logintitle" >Quorum Login</div>
                        <form class= "loginform" id="loginmodalform" method= "post" >
                            <div class= "loginFieldContainer" >
                                <div class= "usernamediv formfielddiv" >
                                    <input id= "usernameInput" placeholder= "Username" name= "username" class= "LoginField" type= "text" required= "true" />
                                </div>
                                <div class= "passworddiv formfielddiv" >
                                    <input id= "passwordInput" placeholder= "Password" name= "password" class= "LoginField" type= "password" required= "true" />
                                </div>
                            </div>
                            <div class= "footbar" >
                                <div class= "loginContainer" >
                                    <button tabindex= "0" class= "loginbtn" type= "submit" >Login</button>
                                    <button tabindex= "0" onclick= "hideLoginModal()" class= "loginbtn" type= "button" >Cancel</button>
                                </div>
                                <span class= "psw" >
                                    <a target= "_blank" tabindex= "0" id= "registerAccountLink" rel= "noopener noreferrer" href= "/register.html" >Sign up for an account</a>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
            <header class= "pageHeader outermostContainer" >
                <h1 >Login is Required</h1>
                You must be logged in to download.
            </header>
            <main id= "main" tabindex= "-1" role= "main" >
                <div class="bodyContainer">
                    <p>You must be logged in to download this file. Please login to your account, or create a new account, using the login button above.</p>
                </div>
            </main>
            <footer id= "footer" >The Quorum Programming Language
                <small >Copyright &copy; 2014-2019.
                Funding for 
            Quorum comes largely from the National Science Foundation 
            (NSF #0940521, #1440878, #1644491, #1640131, #1738259 and 
            #1738252)
            </small></footer></body></html>';
        return;
    }

    $requestedFile = $_GET['file'];

    $studioVersionMajor = 3;
    $studioVersionMinor = 0;
    $studioVersionSubminor = 1;

    $studioVersionName = "" . $studioVersionMajor . "." . $studioVersionMinor . "." . $studioVersionSubminor; 
    
    $quorumVersionMajor = 9;
    $quorumVersionMinor = 0;
    
    $quorumStudioDailyMajor = 3;
    $quorumStudioDailyMinor = 0;

    if ($requestedFile === "QuorumStudioWindows" . $studioVersionName . ".exe")
    {
        $file_name = 'Quorum Studio ' . $studioVersionName . '.exe';
        $file = '/var/www/Downloads/' . $file_name;
        $major = $studioVersionMajor;
        $minor = $studioVersionMinor;
        $download_name = "Quorum Studio Windows";
    }
    elseif ($requestedFile === "QuorumStudioMac" . $studioVersionName . ".pkg")
    {
        $file_name = 'Quorum Studio ' . $studioVersionName . '.pkg';
        $file = '/var/www/Downloads/' . $file_name;
        $major = $studioVersionMajor;
        $minor = $studioVersionMinor;
        $download_name = "Quorum Studio Mac";
    }
    elseif ($requestedFile === "QuorumStudioWindowsDaily.exe")
    {
        $file_name = 'QuorumStudioWindowsDaily.exe';
        $file = '/var/www/Downloads/' . $file_name;
        $major = $quorumStudioDailyMajor;
        $minor = $quorumStudioDailyMinor;
        $download_name = "Quorum Studio Daily Windows";
    }
    elseif ($requestedFile === "QuorumStudioMacDaily.pkg")
    {
        $file_name = 'QuorumStudioMacDaily.pkg';
        $file = '/var/www/Downloads/' . $file_name;
        $major = $quorumStudioDailyMajor;
        $minor = $quorumStudioDailyMinor;
        $download_name = "Quorum Studio Daily Mac";
    }
    elseif ($requestedFile === "QuorumWindows" . $quorumVersionMajor . "." . $quorumVersionMinor . ".zip")
    {
        $file_name = 'Quorum ' . $quorumVersionMajor . '.' . $quorumVersionMinor . '.zip';
        $file = '/var/www/Downloads/' . $file_name;
        $major = $quorumVersionMajor;
        $minor = $quorumVersionMinor;
        $download_name = "Quorum Console Windows";
    }
    elseif ($requestedFile === "QuorumMac" . $quorumVersionMajor . "." . $quorumVersionMinor . ".zip")
    {
        $file_name = 'Quorum ' . $quorumVersionMajor . '.' . $quorumVersionMinor . '.zip';
        $file = '/var/www/Downloads/' . $file_name;
        $major = $quorumVersionMajor;
        $minor = $quorumVersionMinor;
        $download_name = "Quorum Console Mac";
    }
    else
    {
        echo "The download link was invalid. Please select an option from the downloads page. If you reached this page from the downloads, please contact the Quorum team and let us know.";
        return;
    }

    $user_agent = $_SERVER["HTTP_USER_AGENT"];
    function getOS() { 
        global $user_agent;
        $os_platform    =   "Unknown OS Platform";
        $os_array       =   array(
                                '/windows nt 10/i'     =>  'Windows 10',
                                '/windows nt 6.3/i'     =>  'Windows 8.1',
                                '/windows nt 6.2/i'     =>  'Windows 8',
                                '/windows nt 6.1/i'     =>  'Windows 7',
                                '/windows nt 6.0/i'     =>  'Windows Vista',
                                '/windows nt 5.2/i'     =>  'Windows Server 2003/XP x64',
                                '/windows nt 5.1/i'     =>  'Windows XP',
                                '/windows xp/i'         =>  'Windows XP',
                                '/windows nt 5.0/i'     =>  'Windows 2000',
                                '/windows me/i'         =>  'Windows ME',
                                '/win98/i'              =>  'Windows 98',
                                '/win95/i'              =>  'Windows 95',
                                '/win16/i'              =>  'Windows 3.11',
                                '/macintosh|mac os x/i' =>  'Mac OS X',
                                '/mac_powerpc/i'        =>  'Mac OS 9',
                                '/linux/i'              =>  'Linux',
                                '/ubuntu/i'             =>  'Ubuntu',
                                '/iphone/i'             =>  'iPhone',
                                '/ipod/i'               =>  'iPod',
                                '/ipad/i'               =>  'iPad',
                                '/android/i'            =>  'Android',
                                '/blackberry/i'         =>  'BlackBerry',
                                '/webos/i'              =>  'Mobile'
                            );
        foreach ($os_array as $regex => $value) { 
            if (preg_match($regex, $user_agent)) {
                $os_platform    =   $value;
            }
        }   
        return $os_platform;
    }

    $os = getOS();
    $ip = $_SERVER['REMOTE_ADDR'];
    $date = date("Y-m-d H:i:s");

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $stmt = $conn->prepare("INSERT INTO quorum_studio_downloads (operating_system, address, time, version_major, version_minor, username, download) VALUES (:os, :ip, :date, :major, :minor, :user_name, :download)");
        $stmt->bindParam(':os', $os);
        $stmt->bindParam(':ip', $ip);
        $stmt->bindParam(':date', $date);
        $stmt->bindParam(':major', $major);
        $stmt->bindParam(':minor', $minor);
        $stmt->bindParam(':user_name', $user_name);
        $stmt->bindParam(':download', $download_name);
        $stmt->execute();
    } catch (PDOException $e) {
        echo "An error has occurred: " . $e->getMessage();
        return;
    }  

    

    if (file_exists($file)) 
    {
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mime_type = finfo_file($finfo, $file);

        header('Content-Description: File Transfer');
        
        if ($requestedFile === "QuorumStudioMac" . $studioVersionName . ".pkg") {
            header('Content-Type: application/x-newton-compatible-pkg');
        }
        if ($requestedFile === "QuorumStudioMacDaily.pkg") {
            header('Content-Type: application/x-newton-compatible-pkg');
        }
        elseif ($requestedFile === "QuorumMac" . $quorumVersionMajor . "." . $quorumVersionMinor . ".zip") {
            header('Content-Type: application/zip');
        }
        elseif ($requestedFile === "QuorumWindows" . $quorumVersionMajor . "." . $quorumVersionMinor . ".exe") {
            header('Content-Type: application/x-msdownload');
        }
        elseif ($requestedFile === "QuorumStudioWindowsDaily.exe")
        {
            header('Content-Type: application/x-msdownload');
        }
        elseif ($requestedFile === "QuorumStudioWindows" . $studioVersionName . ".exe")
        {
            header('Content-Type: application/x-msdownload');
        }
        
        header('Content-Disposition: attachment; filename="' . $file_name . '"');
        header('Content-Length: ' . filesize($file));

        $handle = fopen($file, 'rb'); 
//        fpassthru($handle);
        
        $buffer = ''; 
        while (!feof($handle)) { 
          $buffer = fread($handle, 4096); 
          echo $buffer; 
          ob_flush(); 
          flush(); 
        } 
        fclose($handle); 

        exit;
    }
    else
    {
        echo "The file couldn't be found for download.";
    }
?>
