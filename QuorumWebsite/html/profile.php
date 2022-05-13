<?php

    require_once("php_functions.php");

?>

<!DOCTYPE html>
    <html xml:lang= "en" lang= "en" >
        <head >
            <title >Quorum Profile Page - Quorum Programming Language</title>
            <meta charset= "UTF-8" >
            <meta content= "width=device-width, initial-scale=1" name= "viewport" >
            <meta content= "View or modify your Quorum projects, or make a new one." name= "description" >
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
                    <li ><a id= "homePageLink" href= "/index.html" ><img src= "/media/QuorumLogoWhite.png" alt= "Home" >Quorum</a></li>
                    <li ><a href= "/learn.html" >Learn</a></li>
                    <li ><a href= "/selection.html" >Hour of Code</a></li>
                    <li ><a href= "/reference.html" >Reference</a></li>
                    <li ><a href= "/libraries.html" >Libraries</a></li>
                    <li ><a href= "/download.html" >Download</a></li>
                    <li ><a href= "/bugs.html" >Bugs</a></li><li ><a id= "profileButton" href= "profile.php" >My Projects</a></li><li ><a id= "loginButton" onclick= "loginButtonPressed()" href= "#" >Login</a></li>
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
                <div id= "shareModal" class= "modal" role= "dialog" aria-labelledby= "shareTitleDiv" >
                    <div class= "modal-dialog modal-content animate" >
                        <div id= "shareTitleDiv" class= "sharetitle" >Share my Project</div>
                            <div id= "shareContent" class="sharecontent">
                                <input id="shareText" type="text" value="Name" class="sharetext" readonly/>
                                <p class="sharePublicMessage">This link goes to your project. If the project is private, no one will be able to look at the project except you. If you want to share it with others, the project must be public.</p>
                                <p class="sharePublicMessage" id="clipboardCopyMessage" style="display: none;">The link has been copied to your clipboard.</p>
                            </div>
                        <button tabindex="0" onclick="hideShareModal()" class="sharebutton" type ="button" >Close</button>
                    </div>
                </div>
            </nav>
            <header class= "pageHeader outermostContainer" >
                <h1 >My Projects</h1>
                On this page you can create, edit, share, and delete projects.
            </header>
            <main id= "main" tabindex= "-1" role= "main" >
                <div class= "bodyContainer" >
                    <div class ="projectTable" >
                        <?php echo getProjectTable(); ?>
                        <script>
                            $('.publicCheckbox').change(function() {
                            var public = this.checked ? 1 : 0;
                            var value = this.value;
                                $.ajax({
                                    type: "POST",
                                    url: "/change_privacy.php",
                                    data: {public: public, file: value},
                                    success: function (result) {
                                    },
                                    error: function (xhr, ajaxOptions, thrownError) {
                                        alert("I could not connect to the server at quorumlanguage.com: " + thrownError);
                                    }
                                });
                            });
                            
                            
                            
                            var showShareModal = function(value) {
                                document.getElementById('shareModal').style.display='block';
                                document.getElementById('shareText').value = value;
                                document.getElementById('shareText').focus();
                                
                                try
                                {
                                    document.getElementById('shareText').select();
                                    var success = document.execCommand('copy');
                                    if (success)
                                        document.getElementById('clipboardCopyMessage').style.display='block';
                                    else
                                        document.getElementById('clipboardCopyMessage').style.display='none';
                                }
                                catch (error)
                                {
                                    document.getElementById('clipboardCopyMessage').style.display='none';
                                    console.log("There was an error while copying the project sharing link to the clipboard.");
                                }
                            };

                            var hideShareModal = function() {
                                document.getElementById('shareModal').style.display='none';
                            };
                        </script>
                    </div>
                    <div>
                        <form action="project.php">
                            <input type="submit" class="newProjectButton" value ="Create a New Project"/>
                        </form>
                    </div>
                </div>
            </main>
            <footer id= "footer" >The Quorum Programming Language
                <small >Copyright &copy; 2014-2019.
                Funding for 
            Quorum comes largely from the National Science Foundation 
            (NSF #0940521, #1440878, #1644491, #1640131, #1738259 and 
            #1738252)
            </small></footer></body></html>