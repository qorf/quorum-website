<?php header('Access-Control-Allow-Origin: *'); ?>
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
        <script src= "/script/jquery-1.8.3.min.js"  type="text/javascript"></script><script src= "/script/QuorumStandardLibrary.js"  type="text/javascript"></script><script src= "/script/script.js"  type="text/javascript"></script><script src= "/script/prism-quorum.js"  type="text/javascript"></script><script  type="text/javascript">        var Module = {
         locateFile: function(path, prefix) {
             if (path.endsWith(".data")) return "/script/" + path;
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
        <main id= "main" tabindex= "-1" role= "main" >
            <div id= "embeddedIde" class= "ideTotal" >
               <h2 class= "allInOneIdeTitle" >
                  <label for= "embeddedideTextboxInput" >Quorum</label>
               </h2>
               <h2 class= "hidden" >Code Area</h2>
               <section aria-labeledby= "embeddedCodeArea" >
                  <div class= "flex-container" >
                     <div id= "embeddedIdeInput" tabindex= "-1" class= "ideTextboxInput" >
                        <textarea tabindex= "-1" aria-hidden= "true" class= "ideLineNumbers" spellcheck= "false" readonly= "readonly" >1</textarea>
                        <textarea id= "embeddedideTextboxInput" spellcheck= "false" name= "code" onscroll= "editAreaSyncScroll(this);" tabindex= "0" class= "ideEditing" onkeydown= "keyboardInputShortcuts(event, 'embeddedIdeInput', 'embeddedIdeOutput', 'embeddedQuorumUIContainer')" aria-multiline= "true" oninput= "editAreaUpdate(this); editAreaSyncScroll(this);" ><?php print $_GET['embedcode'] ?></textarea>
                        <pre aria-hidden= "true" tabindex= "-1" class= "syntaxHighlighting" ><code tabindex= "-1" class= "language-quorum highlighting-content" ></code></pre>
                        <script  type="text/javascript">window.addEventListener('pageshow', () => {
                           var element = document.getElementById('embeddedIdeInput').querySelector('.ideEditing');
                           editAreaUpdate(element)
                           });
                        </script>
                     </div>
                     <div id= "embeddedQuorumUIContainer" style= "position: relative;" class= "ideVisualOutput" ></div>
                  </div>
                  <div class= "flex-container" >
                     <button id= "embeddedBuildButton" class= "FlexBuildButton" onclick= "newRunCode('embeddedIdeInput', 'embeddedIdeOutput', 'embeddedQuorumUIContainer', false)" type= "button" >Build (CTRL+B)</button>
                     <button id= "embeddedRunButton" class= "FlexBuildButton" onclick= "newRunCode('embeddedIdeInput', 'embeddedIdeOutput', 'embeddedQuorumUIContainer', true)" type= "button" >Run (CTRL+R)</button>
                     <button id= "embeddedStopButton" class= "FlexBuildButton" onclick= "stopProgram()" type= "button" >Stop Program</button>
                  </div>
               </section>
               <h2 class= "hidden" >Output Area</h2>
               <pre id= "embeddedIdeOutput" class= "allInOneIdeOutput" role= "region" aria-atomic= "true" aria-label= "output of Development Environment" aria-live= "assertive" ></pre>
               <input id= "embeddedCopyArea" type= "hidden" readonly= "readonly" />
            </div>
        </main>
    </body>
</html>
