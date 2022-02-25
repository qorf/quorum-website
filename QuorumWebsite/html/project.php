<?php 


    require_once("php_functions.php");

    $user_name = getUserName($_COOKIE["sessionID"]);
    $run_text = "Program";
    $code = "";
    $header = "Run Quorum Online";
    $subheader = "This is a page for running Quorum online.";
    
    if (!isset($_GET['user']) || !isset($_GET['file']))
    {
        // Just show the project page.
    }
    else
    {
        $project_user = $_GET['user'];
        $project_name = $_GET['file'];
        $valid = false;

        $value_zero = 0;

        $conn = connect();
        $stmt = $conn->prepare("SELECT public, code FROM project_files WHERE username = :username AND filename = :filename AND deleted = :zero");
        $stmt->bindParam(":username", $project_user);
        $stmt->bindParam(":filename", $project_name);
        $stmt->bindParam(":zero", $value_zero);
        $stmt->execute();
        
        $test_condition = 0;

        // There can be at most 1 row with the given criteria.
        if ($stmt->rowCount() === 1)
        {
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            $header = htmlspecialchars('"') . htmlspecialchars($project_name) . htmlspecialchars('"') . " by " . $project_user;
            
            if ($row['public'] == 1 || ($user_name == $project_user))
            {
                $code = $row['code'];
                $run_text = $project_name;
                $subheader = $row['public'] == 1 ? "This is a public project. Anyone can view it." : "This is a private project. Only you can view it.";
            }
            else
            {
                // User doesn't have permission to view this file.
                if ($user_name == "")
                {
                    $subheader = "This is a private project. You need to log in to view it.";
                    $test_condition = 1;
                }
                else
                {
                    $subheader = "This is a private project. Only the owner can view it.";
                    $test_condition = 2;
                }
            }

        }
        else
        {
            // There is no viable file to view.
            $test_condition = 3;
        }
    }
?>


<!DOCTYPE html>
<html xml:lang= "en" lang= "en" >
   <head >
      <title >Quorum Project Page - Quorum Programming Language</title>
      <meta charset= "UTF-8" >
      <meta content= "width=device-width, initial-scale=1" name= "viewport" >
      <meta content= "Create or load a Quorum project, and save it to your account." name= "description" >
      <meta content= "programming for beginners, game programming, 
         lego programming, computer courses, programming 3D, programming,
         animation, graphics, multimedia, games, accessibility, computer science for all,
         computer science, computer languages, Quorum programming language, robot programming,
         online programming" name= "keywords" >
      <script src= "/script/jquery-1.8.3.min.js"  type="text/javascript"></script><script src= "/script/QuorumStandardLibrary.js"  type="text/javascript"></script><script src= "/script/script.js"  type="text/javascript"></script><script src= "/script/prism-quorum.js"  type="text/javascript"></script><script  type="text/javascript">        var Module = {
         locateFile: function (path, prefix) {
             if (path.endsWith(".data"))
                 return "/script/" + path;
             return prefix + path;
         }
         };
      </script><script src= "/script/load.js"  type="text/javascript"></script>
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
            <li ><a href= "https://quorum.atlassian.net" >Bugs</a></li>
            <li ><a id= "profileButton" href= "profile.php" >My Projects</a></li>
            <li ><a id= "loginButton" onclick= "loginButtonPressed()" href= "#" >Login</a></li>
         </ul>
         <form action= "/search.php" id= "searchForm" role= "search" method= "post" >
            <input id= "searchFormInput" title= "Search Input" type= "text" placeholder= "How do I create an array?" name= "search-query" />
            <input id= "searchFormButton" value= "Search" title= "Submit Button" type= "submit" />
         </form>
         <div id= "loginModal" class= "modal" role= "dialog" aria-labelledby= "loginTitleDiv" >
            <div class= "modal-dialog modal-content animate" >
               <div id= "loginTitleDiv" class= "logintitle" >Quorum Login</div>
               <form class= "loginform" method= "post" >
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
                        <button tabindex= "0" class= "loginbtn" onclick= "login()" type= "submit" >Login</button>
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
         <h1 ><?php echo $header ?> </h1>
         <?php echo $subheader ?>
      </header>
      <main id= "main" tabindex= "-1" role= "main" >
         <div class= "bodyContainer" >
            <div id= "writeCodeIde" class= "ideTotal" >
               <h2 class= "allInOneIdeTitle" >
                  <label for= "writeCodeideTextboxInput" ><?php if ($code == "") {print "Quorum Online";} else {print $project_name;} ?></label>
               </h2>
               <h2 class= "hidden" >Code Area</h2>
               <section aria-labeledby= "writeCodeCodeArea" >
                  <div class= "flex-container" >
                     <div id= "writeCodeIdeInput" tabindex= "-1" class= "ideTextboxInput" >
                        <textarea tabindex= "-1" aria-hidden= "true" class= "ideLineNumbers" spellcheck= "false" readonly= "readonly" >1</textarea>
                        <textarea id= "writeCodeideTextboxInput" spellcheck= "false" name= "code" onscroll= "editAreaSyncScroll(this);" tabindex= "0" class= "ideEditing" onkeydown= "keyboardInputShortcuts(event, 'writeCodeIdeInput', 'writeCodeIdeOutput', 'writeCodeQuorumUIContainer')" aria-multiline= "true" oninput= "editAreaUpdate(this); editAreaSyncScroll(this);" ><?php print $code; ?></textarea>
                        <pre aria-hidden= "true" tabindex= "-1" class= "syntaxHighlighting" ><code tabindex= "-1" class= "language-quorum highlighting-content" ></code></pre>
                        <script  type="text/javascript">window.addEventListener('pageshow', () => {
                           var element = document.getElementById('writeCodeIdeInput').querySelector('.ideEditing');
                           editAreaUpdate(element)
                           });
                        </script>
                     </div>
                     <div id= "writeCodeQuorumUIContainer" style= "position: relative;" class= "ideVisualOutput" ></div>
                  </div>
                  <div class= "flex-container" >
                     <button id= "writeCodeBuildButton" class= "FlexBuildButton" onclick= "newRunCode('writeCodeIdeInput', 'writeCodeIdeOutput', 'writeCodeQuorumUIContainer', false)" type= "button" >Build (CTRL+B)</button>
                     <button id= "writeCodeRunButton" class= "FlexBuildButton" onclick= "newRunCode('writeCodeIdeInput', 'writeCodeIdeOutput', 'writeCodeQuorumUIContainer', true)" type= "button" >Run (CTRL+R)</button>
                     <button id= "writeCodeStopButton" class= "FlexBuildButton" onclick= "stopProgram()" type= "button" >Stop Program</button>
                  </div>
               </section>
               <div id= "writeCodeSaveModal" class= "modal" role= "dialog" aria-labelledby= "writeCodeSaveTitleDiv" >
                  <div class= "modal-dialog modal-content animate" >
                     <div id= "writeCodeSaveTitleDiv" class= "savetitle" >Save this Project</div>
                     <form class= "saveform" method= "post" >
                        <div class= "saveFieldContainer" >
                           <div class= "projectnamediv formfielddiv" ><label >Project Name: </label><input id= "writeCodeprojectNameInput" name= "projectname" class= "SaveField" type= "text" required= "true" data-prefix= "writeCode" /></div>
                        </div>
                        <div class= "footbar" >
                           <div class= "saveContainer" ><button tabindex= "0" class= "savebtn" onclick= "saveProject('writeCode', 'writeCodeideTextboxInput', 'writeCodeIdeOutput', 'writeCodeprojectNameInput', 'false')" type= "button" >Save Project</button><button id= "writeCodeSaveProjectCancel" tabindex= "0" onclick= "hideSaveModal('writeCode')" class= "savebtn savecancelbtn" type= "button" data-prefix= "writeCode" >Cancel</button></div>
                        </div>
                     </form>
                  </div>
               </div>
               <div id= "writeCodeLoadModal" class= "modal" role= "dialog" aria-labelledby= "writeCodeLoadTitleDiv" >
                  <div class= "modal-dialog modal-content animate" >
                     <div id= "writeCodeLoadTitleDiv" class= "loadtitle" >Load a Project</div>
                     <form class= "loadform" method= "post" >
                        <div id= "writeCodeLoadFieldContainer" class= "loadFieldContainer" >
                           <div class= "projectloaddiv formfielddiv" ><select id= "writeCodeLoadProjectSelect" class= "loadProjectSelect" data-prefix= "writeCode" size= "5" ></select></div>
                        </div>
                        <div class= "footbar" >
                           <div class= "loadContainer" ><button tabindex= "0" class= "loadbtn" onclick= "loadProject('writeCode', 'writeCodeLoadProjectSelect', 'writeCodeideTextboxInput', 'writeCodeIdeOutput')" type= "button" >Load Project</button><button id= "writeCodeLoadProjectCancel" tabindex= "0" onclick= "hideLoadModal('writeCode')" class= "loadbtn loadcancelbtn" type= "button" data-prefix= "writeCode" >Cancel</button></div>
                        </div>
                     </form>
                  </div>
               </div>
               <div class= "flex-container" ><button id= "writeCodesaveProjectButton" class= "FlexBuildButton" onclick= "showSaveModal('writeCode')" type= "button" >Save</button><button id= "writeCodeloadProjectButton" class= "FlexBuildButton" onclick= "showLoadModal('writeCode')" type= "button" >Load</button><button id= "writeCodeembedCodeButton" class= "FlexBuildButton" onclick= "embedCode('writeCodeideTextboxInput', 'writeCodeIdeOutput', 'writeCodeCopyArea')" type= "button" >Embed</button></div>
               <h2 class= "hidden" >Output Area</h2>
               <pre id= "writeCodeIdeOutput" class= "allInOneIdeOutput" role= "region" aria-atomic= "true" aria-label= "output of Development Environment" aria-live= "assertive" ></pre>
               <input id= "writeCodeCopyArea" type= "hidden" readonly= "readonly" />
            </div>
         </div>
      </main>
      <footer id= "footer" >The Quorum Programming Language
         <small >Copyright &copy; 2014-2021.
         Funding for 
         Quorum comes largely from the National Science Foundation 
         (NSF #0940521, #1440878, #1644491, #1640131, #1738259 and 
         #1738252)
         </small>
      </footer>
   </body>
</html>
