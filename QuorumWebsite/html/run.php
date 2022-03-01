<?php header('Access-Control-Allow-Origin: *'); 
    session_start();
    ob_start();
?>
<!DOCTYPE html>
<html xml:lang= "en" lang= "en" >
    <head >
        <title >Quorum Programming Language</title>
        <meta charset= "UTF-8" >
        <meta content= "width=device-width, initial-scale=1" name= "viewport" >
        <meta content= "programming for beginners, game programming, 
            lego programming, computer courses, programming 3D, programming,
            animation, graphics, multimedia, games, accessibility, computer science for all,
            computer science, computer languages, Quorum programming language, robot programming,
            online programming" name= "keywords" >
        <script src= "/script/jquery-1.8.3.min.js"  type="text/javascript"></script>
        <script src= "/script/QuorumStandardLibrary.js"  type="text/javascript">
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
                <li ><a id= "homePageLink" href= "https://www.quorumlanguage.com/" ><img src= "/media/QuorumLogoWhite.png" alt= "Home" >Quorum</a></li>
                <li ><a href= "/learn.html" >Learn</a></li>
                <li ><a href= "/hourofcode/part1.html" >Hour of Code</a></li>
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
        <header class= "pageHeader outermostContainer">
            <h1 >Quorum Environment Output</h1>
            <p >This page runs quorum scripts</p>
        </header>
        <main id= "main" tabindex= "-1" role= "main" >
            <div class= "bodyContainer" >
                <div id= "frontPageIde" class= "allInOneIde" >
                    <h2 class= "ideSubHeading" >Console Output</h2>
                    <pre id= "IdeOutput" class= "allInOneIdeOutput" role= "region" aria-atomic= "true" aria-label= "output of Development Environment" aria-live= "assertive" aria-relevant="additions"></pre>
                    <h2 class= "ideSubHeading" >Visual Output</h2>
                    <div style= "position: relative; width: 800px; height: 600px;" id= "QuorumUIContainer" class= "ideCanvas"></div>
                </div>
                <h2>Tips for using the Run Page</h2>
                <p>This page allows us to run programs written in the Quorum 
                    programming language. Because Quorum works slightly 
                    differently online than it does offline, here are a few tips 
                    for using this page:</p>
                <ol>
                    <li><strong>Close the Window</strong>: Each browser and operating system has its own hotkey for closing this tab. For example, in Chrome, the key is CTRL + W on Windows and Command + W on Mac.</li>
                    <li><strong>Keyboard and Mouse</strong>: To use the keyboard or mouse in your games, you need to either tab into or click on the window.</li>
                </ol>
            </div>
        </main>
        <footer id= "footer" >The Quorum Programming Language
            <small> 
                Copyright &copy; 2014-2021. Funding for 
                Quorum comes largely from the National Science Foundation 
                (NSF #0940521, #1440878, #1644491, #1640131, #1738259 and 
                #1738252, #2023739, #2048356, #2106392, #2121993). Other contributions can be found on the <a href="/contributors.html">contributors</a> page.
            </small>
        </footer>
<?php
    
    $base = "quorum_server:1269";  //set this to the url you want to scrape
    $ckfile = '/var/apache/tmp/simpleproxy-cookie-' . session_id();


    /* all system code happens below - you should not need to edit it! */

    //work out cookie domain
    $cookiedomain = str_replace("http://www.","",$base);
    $cookiedomain = str_replace("https://www.","",$cookiedomain);
    $cookiedomain = str_replace("www.","",$cookiedomain);

    $request = $_SERVER['REQUEST_URI'];

    $url = $base . $request;

    //The new Quorum server is limited to HTTP, but is guarded in Docker.
    //So assume the message comes over that.
    $mydomain = 'http://'.$_SERVER['HTTP_HOST'];
    
    // Open the cURL session
    $curlSession = curl_init();

    curl_setopt ($curlSession, CURLOPT_URL, $url);
    curl_setopt ($curlSession, CURLOPT_HEADER, 1);

    $OKToPost = FALSE;
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        curl_setopt ($curlSession, CURLOPT_POST, 1);
        curl_setopt ($curlSession, CURLOPT_POSTFIELDS, http_build_query($_POST));
        
        // set variables for database submission
        $version = '10';     // hard code for each quorum release
        $code = $_POST['code'];
        $output = '';       // filled below after compile
        $button = '0';      // 0 for build | 1 for run
        $ip = $_SERVER['REMOTE_ADDR'];
        $url = $_POST['pageURL'];
        $ide = $_POST['ideName'];
        $OKToPost = TRUE;
    }

    curl_setopt($curlSession, CURLOPT_RETURNTRANSFER,1);
    curl_setopt($curlSession, CURLOPT_TIMEOUT,30);
    curl_setopt($curlSession, CURLOPT_SSL_VERIFYHOST, 2);
    curl_setopt ($curlSession, CURLOPT_COOKIEJAR, $ckfile);
    curl_setopt ($curlSession, CURLOPT_COOKIEFILE, $ckfile);

    //handle other cookies cookies
    foreach($_COOKIE as $k=>$v){
        if(is_array($v)){
            $v = serialize($v);
        }
        curl_setopt($curlSession,CURLOPT_COOKIE,"$k=$v; domain=.$cookiedomain ; path=/");
    }

    //Send the request and store the result in an array
    $response = curl_exec ($curlSession);

    // Check that a connection was made
    if (curl_error($curlSession)){
        // If it wasn't...
        print curl_error($curlSession);
    } else {

        //clean duplicate header that seems to appear on fastcgi with output buffer on some servers!!
        $response = str_replace("HTTP/1.1 100 Continue\r\n\r\n","",$response);
        $response = str_replace("Content-Length: 0\r\n\r\n","",$response);
		
        $ar = explode("\r\n\r\n", $response, 2);

        $header = $ar[0];
        $body = $ar[1];

        //handle headers - simply re-outputing them
        $header_ar = explode(chr(10),$header);
        foreach($header_ar as $k=>$v){
            if(!preg_match("/^Transfer-Encoding/",$v)){
                $v = str_replace($base,$mydomain,$v); //header rewrite if needed
                //header(trim($v));
            }
        }

      //rewrite all hard coded urls to ensure the links still work!
        $body = str_replace($base,$mydomain,$body);
        if(substr( $body, 0, 11 ) === "<div class=") {
            print rtrim($body);
            
            // set compiler output for database submission
            $output = $body;
            $output = str_replace('<div class= "compilerErrorList" >','',$output);
            $output = str_replace('<p >','',$output);
            $output = str_replace('<ol >','',$output);
            $output = str_replace('<li >','\n',$output);
            $output = str_replace('</p>','',$output);
            $output = str_replace('</ol>','',$output);
            $output = str_replace('</li>','',$output);
            $output = str_replace('</div>','',$output);
        } else {
            print '<script>' . $body . ' Start() </script>';
            print '<script>' . 
                    'var length = 0; ' .
                    'setInterval(update_console, 500); ' .

                    'function update_console() {' .
                        'var newLength = OuTpUt_$tRiNg_.length;' .
                        'if (newLength > length) {' .
                            'document.getElementById(\'IdeOutput\').insertAdjacentHTML( \'beforeend\', OuTpUt_$tRiNg_.substring(length, newLength) );' . //substring out this part and add it to the document
                            'length = newLength;' .
                        '}' .
                    '}' .
                  '</script>';
            $output = "Build Successful";
        }
        // put code submission into database
        if ($OKToPost) {
            require_once("php_functions.php");
            $user = getUserName($_COOKIE["sessionID"]);
            saveRunCode($user, $version, $code, $output, $button, $ip, $url, $ide);
        }
    }
    curl_close ($curlSession);
?>    
    </body>
</html>
