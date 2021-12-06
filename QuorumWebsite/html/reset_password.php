<!DOCTYPE html><html xml:lang= "en" lang= "en" ><head ><title >Reset Password Page - Quorum Programming Language</title><meta charset= "UTF-8" ><meta content= "width=device-width, initial-scale=1" name= "viewport" ><meta content= "programming for beginners, game programming, 
        lego programming, computer courses, programming 3D, programming,
        animation, graphics, multimedia, games, accessibility, computer science for all,
        computer science, computer languages, Quorum programming language, robot programming,
        online programming" name= "keywords" ><script src= "/script/jquery-1.8.3.min.js"  type="text/javascript"></script><script src= "/script/script.js"  type="text/javascript"></script><link rel= "stylesheet" type= "text/css" href= "/style/style.css" ><link rel= "stylesheet" type= "text/css" href= "/style/google.css" ><link rel= "icon" type= "image/x-icon" href= "/media/favicon.ico" ><link rel= "stylesheet" type= "text/css" href= "/style/style-small.css" media= "(max-width: 500px)" ><link rel= "stylesheet" type= "text/css" href= "/style/style-medium.css" media= "(min-width: 501px) and (max-width: 1000px)" ><link rel= "stylesheet" type= "text/css" href= "/style/style-large.css" media= "(min-width: 1001px)" ></head><body ><nav class= "headerNavBar outermostContainer" ><div class= "skiptocontent" ><a href= "#main" >skip to main content</a></div><ul ><li ><a id= "homePageLink" href= "https://quorumlanguage.com/" ><img src= "/media/QuorumLogoWhite.png" alt= "Home" >Quorum</a></li><li ><a href= "/learn.html" >Learn</a></li><li ><a href= "/selection.html" >Hour of Code</a></li><li ><a href= "/reference.html" >Reference</a></li><li ><a href= "/libraries.html" >Libraries</a></li><li ><a href= "/download.html" >Download</a></li><li ><a href= "https://quorum.atlassian.net" >Bugs</a></li><li ><a id= "profileButton" href= "profile.php" >My Projects</a></li><li ><a id= "loginButton" onclick= "loginButtonPressed()" href= "#" >Login</a></li></ul><form action= "/search.php" id= "searchForm" role= "search" method= "post" ><input id= "searchFormInput" title= "Search Input" type= "text" placeholder= "How do I create an array?" name= "search-query" /><input id= "searchFormButton" value= "Search" title= "Submit Button" type= "submit" /></form><div id= "loginModal" class= "modal" role= "dialog" aria-labelledby= "loginTitleDiv" ><div class= "modal-dialog modal-content animate" ><div id= "loginTitleDiv" class= "logintitle" >Quorum Login</div><form id= "loginmodalform" class= "loginform" method= "post" ><div class= "loginFieldContainer" ><div class= "usernamediv formfielddiv" ><input id= "usernameInput" placeholder= "Username" name= "username" class= "LoginField" type= "text" required= "true" /></div><div class= "passworddiv formfielddiv" ><input id= "passwordInput" placeholder= "Password" name= "password" class= "LoginField" type= "password" required= "true" /></div></div><div class= "footbar" ><div class= "loginContainer" ><button tabindex= "0" class= "loginbtn" onclick= "login()" type= "submit" >Login</button><button tabindex= "0" onclick= "hideLoginModal()" class= "loginbtn" type= "button" >Cancel</button></div><span class= "psw" ><a target= "_blank" tabindex= "0" id= "registerAccountLink" rel= "noopener noreferrer" href= "/register.html" >Sign up for an account</a></span></div></form></div></div></nav>
        <header class= "pageHeader outermostContainer" >
            <h1 >Password Reset</h1>
        </header>
        <div class= "bodyContainer" >
            <?php 
                require_once("php_functions.php");
            
                if (!isset($_GET['pagekey']))
                {
                    echo "Invalid page key - if you need to reset your password, use the 'forgot password' option in the login pane.";
                    return;
                }

                $key = $_GET['pagekey'];

                if ($key === null || $key === "")
                {
                    echo "Invalid page key - if you need to reset your password, use the 'forgot password' option in the login pane.";
                    return;
                }

//                function reportError($code, $message)
//                {
//                    echo "<p>An error occurred.</p>";
//                    echo "<p>" . $code . " : " . $message . "</p>";
//                }
//                
//                function reportFatalError()
//                {
//                    $err = error_get_last();
//                    print_r($err);
//                }
//                
//                set_error_handler("reportError");
//                register_shutdown_function( "reportFatalError" );
                
//                $conn = connect();
//                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//                $stmt = $conn->prepare("SELECT time, used FROM password_reset_keys WHERE reset_key = :key");
//                $stmt->bindParam(':key', $key);
//                $stmt->execute();
//                
//                if ($stmt->rowCount() === 0) 
//                {
//                    echo "Invalid page key - if you need to reset your password, use the 'forgot password' option in the login pane.";
//                    return;
//                }
//                
//                $row = $stmt->fetch(PDO::FETCH_ASSOC);
//                $reset_time = $row['time'];
//                $used = $row['used'];
//                $current_time = date("Y-m-d H:i:s");
                
                // Password reset keys expire after an hour.
//                if (($used === '1') || (strtotime($current_time) - strtotime($reset_time) > 3600))
                if (!isValidResetKey($key))
                {
                    echo "Invalid page key - if you need to reset your password, use the 'forgot password' option in the login pane.";
                    return;
                }
                
                echo '<form action= "javascript:resetPasswordClick()" id= "resetPasswordForm" class= "accountupdateForm" method= "post" >
                    <div class= "generalMessage" >Reset your password below. Leaving this page will leave your password the same.</div>
                    <div >
                        <input id= "passwordEnterInput" title= "Password" placeholder= "New Password" name= "password" onblur= "checkValidityExists(\'passwordEnterInput\', \'Please fill in password field\');" type= "password" />
                    </div>
                    <div >
                        <input id= "confirmPasswordInput" title= "Confirm Password" placeholder= "Confirm New Password" name= "Confirm Password" onblur= "checkConfirmPassword();" type= "password" />
                    </div>
                    <input id= "hidden_reset_key" value= "' . $key . '" type= "hidden" name= "hidden_reset_key" />
                    <div >
                        <input id= "submitFormButton" value= "Reset my Password" class= "accountupdateSubmit" title= "Save New Password" type= "submit" />
                    </div>
                    <div id= "feedbackMessage" aria-hidden= "true" class= "feedbackMessage off" ></div>
                    <div id= "alertMessage" aria-hidden= "true" class= "alertMessage off" ></div>
                </form>';
            ?>
        </div></body></html>