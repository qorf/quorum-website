var currentIDEInput_$Global_ = '';
var currentIDEOutput_$Global_ = 'DefaultQuorumEnvironmentIdeOutput';
var currentUIContainer_$Global_ = 'QuorumUIContainer';
var total_console_length239847239482734 = 0;
setInterval(update_console, 500);

//stolen from https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file
function LoadScript(url) {
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
}

var prismScript = undefined;
function LoadPrism()
{
    url = "https://quorumlanguage.com/script/prism-quorum.js"
    callback = hightlightCode
    // Adding the script tag to the head as suggested before
    var script = document.createElement("script");
    script.type = 'text/javascript';
    script.src = url;
    // Then bind the event to the callback function.
    script.addEventListener("load", callback);
    prismScript = script;
    // Fire the loading
    document.head.appendChild(script);
}

var hightlightCode = function() {
    Prism.highlightAll();
};

LoadPrism();
LoadScript("https://quorumlanguage.com/script/load.js");
LoadScript("https://quorumlanguage.com/script/QuorumStandardLibrary.js");



function update_console() {
    if (typeof OuTpUt_$tRiNg_ !== 'undefined' && typeof currentIDEOutput_$Global_ !== 'undefined') {
        var newLength = OuTpUt_$tRiNg_.length;
        if (newLength > total_console_length239847239482734) {
            var dom = document.getElementById(currentIDEOutput_$Global_);
            if(dom != null) {
                dom.insertAdjacentHTML('beforeend', OuTpUt_$tRiNg_.substring(length, newLength));
            }
            total_console_length239847239482734 = newLength;
        }
    }
}

var Module = {
    locateFile: function(path, prefix) {
        if (path.endsWith(".data")) return "/script/" + path;
        return prefix + path;
    }
 };

var keyboardInputShortcuts = function(event, input, output, uiContainer) {
    var key = event.keyCode;
    var active = event.getModifierState("Control");
    //CTRL + R, run a program
    if(key === 82 && active) {
        newRunCode(input, output, uiContainer, true);
    } else if (key === 66 && active) {
        newRunCode(input, output, uiContainer, false);
    }
};

//IDE stop program button action
var stopProgram = function(uiContainer) {
    //prevent errors if nothing has been built yet
    if (typeof Stop === "function") { 
        Stop();
    }
}

var editAreaUpdate = function(element) {
    let text = element.value;
    let result_element = element.parentElement.querySelector(".highlighting-content");
    if(text[text.length-1] == "\n") {
      text += " ";
    }
    var lines = text.split(/\r|\r\n|\n/);
    var count = lines.length;
    if (count != lines)
    {
      lines = count;
      updateLineNumbers(element, lines)
    }

    // Update code
    // replace <> so users cant make new html elements by typing into the text area
    result_element.innerHTML = text.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;");
    // Syntax Highlight
    Prism.highlightElement(result_element);
};
  
var editAreaSyncScroll = function(element) {
    /* Scroll result to scroll coords of event - sync with textarea */
    let result_element = element.parentElement.querySelector(".syntaxHighlighting");
    result_element.scrollTop = element.scrollTop;
    result_element.scrollLeft = element.scrollLeft;
  
    let result_lineNums = element.parentElement.querySelector(".ideLineNumbers");
    result_lineNums.scrollTop = element.scrollTop;
    result_lineNums.scrollLeft = element.scrollLeft;
};

var updateLineNumbers = function(element, numLines) {
    let lineNumbersArea = element.parentElement.querySelector(".ideLineNumbers");
    let lineNumbers = '';
  
    for(let i=0; i<numLines; i++){
      lineNumbers += (i+1)+'\n';
    }
  
    lineNumbersArea.value = lineNumbers;
};

//IDE submit button action
var newRunCode = function (input, output, uiContainer, execute) {
    var codeInput = document.getElementById(input).querySelector(".ideEditing").value;
    var outputRegion = document.getElementById(output);
    
    var pageURL = window.location.href;
    var ideName = input.replace("IdeInput","");
    currentIDEInput_$Global_ = input;
    currentIDEOutput_$Global_ = output;
    currentUIContainer_$Global_ = uiContainer;
    var codeData = {code: codeInput, pageURL: pageURL, ideName:ideName};

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
           if (xmlhttp.status == 200) {
                var result = this.responseText;
                outputRegion.innerHTML = "";
                OuTpUt_$tRiNg_ = "";
                var head= document.getElementsByTagName('head')[0];
                var run = document.getElementById("Runnable");
                if(run != null) {
                    head.removeChild(run);
                }
                total_console_length239847239482734 = 0;
                
                if(result.startsWith( "<div class=")) {
                    outputRegion.innerHTML = result;
                } else if(result.startsWith("Failed to connect")) {
                    outputRegion.innerHTML = "I could not connect to the server at quorumlanguage.com"
                } else {
                    outputRegion.innerHTML = "Build Successful<br/>";
                    if(execute === true) {
                        var script= document.createElement('script');
                        script.id = "Runnable";
                        script.innerHTML= result;
                        head.appendChild(script);
                        Start();
                    }
                }
           }
           else if (xmlhttp.status == 400) {
              outputRegion.innerHTML = "I could not connect to the server at quorumlanguage.com";
           }
           else {
               outputRegion.innerHTML = "I could not connect to the server at quorumlanguage.com";
           }
        }
    };

    xmlhttp.open("POST", "https://quorumlanguage.com/fastrun.php", true);
    xmlhttp.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
    xmlhttp.send("code=" + codeInput + "&" + "pageURL=" + pageURL + "&" + "ideName=" + ideName);
};

var InjectQuorumCodeExample = function(element, name, code) {
    if(code === undefined) {
        code = "output \"Hello, World!\"";
    }
    var result = "<pre class=\"line-numbers\" tabindex=\"0\"><code class=\"language-quorum\">" + code + "</code></pre>";
    var div = document.createElement("div");
    div.setAttribute("class", "quorum-embed");
    div.id = name + "OuterQuorumExample";
    div.innerHTML = result;
    element.appendChild(div);
}

var InjectQuorumEnvironment = function(element, name, code) {
    if(code === undefined) {
        code = "output \"Hello, World!\"";
    }

    if(name === undefined) {
        name = "DefaultQuorumEnvironment";
    }
    var result = GenerateQuorumEnvironment(name);
    var div = document.createElement("div");
    div.id = name + "OuterQuorumEnvironment";
    div.innerHTML = result;
    div.setAttribute("class", "quorum-embed");

    element.appendChild(div);

    var outer = document.getElementById(name + 'ideTextboxInput');
    outer.value = code;
    var editor = document.getElementById(name + 'IdeInput');
    editor.value = code;
    if(typeof Prism !== 'undefined') {
        editAreaUpdate(editor);
    } else {
        prismScript.addEventListener("load", () => {editAreaUpdate(editor);});
    }
}
var GenerateQuorumEnvironment = function(name) {
    var environment = 
        "<div id= \""+name+"Ide\" class= \"ideTotal\" >" + 
            "<h2 class= \"allInOneIdeTitle\" ><label for= \""+name+"IdeInput\" >Embed Quorum!</label></h2>" +
            "<p class= \"allInOneIdeSubtitle\" >Enter Quorum code below and press \"Run Program\"</p>" +
            "<h2 class= \"hidden\" >Code Area</h2>" + 
            "<section aria-labeledby= \""+name+"CodeArea\" >" +
               "<div class= \"flex-container\" >" +
                  "<div id= \""+name+"IdeInput\" tabindex= \"-1\" class= \"ideTextboxInput\" >" +
                     "<textarea tabindex= \"-1\" aria-hidden= \"true\" class= \"ideLineNumbers\" spellcheck= \"false\" readonly= \"readonly\" >1</textarea>" +
                     "<textarea id= \""+name+"ideTextboxInput\" spellcheck= \"false\" name= \"code\" onscroll= \"editAreaSyncScroll(this);\" tabindex= \"0\" class= \"ideEditing\" onkeydown= \"keyboardInputShortcuts(event, '"+name+"IdeInput', '"+name+"IdeOutput', '"+name+"QuorumUIContainer')\" aria-multiline= \"true\" oninput= \"editAreaUpdate(this); editAreaSyncScroll(this);\" ></textarea>" +
                     "<pre aria-hidden= \"true\" tabindex= \"-1\" class= \"syntaxHighlighting\" ><code tabindex= \"-1\" class= \"language-quorum highlighting-content\" ></code></pre>" +
                     "<script  type=\"text/javascript\">window.addEventListener('pageshow', () => {var element = document.getElementById('"+name+"IdeInput').querySelector('.ideEditing');editAreaUpdate(element)});</script>" +
                  "</div>" +
                  "<div id= \""+name+"QuorumUIContainer\" style=\"position: relative;\" class= \"ideVisualOutput\" ></div>" +
               "</div>" +
               "<div class= \"flex-container\" >" +
                  "<button id= \""+name+"BuildButton\" class= \"FlexBuildButton\" onclick= \"newRunCode('"+name+"IdeInput', '"+name+"IdeOutput', '"+name+"QuorumUIContainer', false)\" type= \"button\" >Build (CTRL+B)</button>" +
                  "<button id= \""+name+"RunButton\" class= \"FlexBuildButton\" onclick= \"newRunCode('"+name+"IdeInput', '"+name+"IdeOutput', '"+name+"QuorumUIContainer', true)\" type= \"button\" >Run (CTRL+R)</button>" +
                  "<button id= \""+name+"StopButton\" class= \"FlexBuildButton\" onclick= \"stopProgram()\" type= \"button\" >Stop Program</button>" +
               "</div>" +
            "</section>" +
            "<h2 class= \"hidden\" >Output Area</h2>" +
            "<pre id= \""+name+"IdeOutput\" class= \"allInOneIdeOutput\" role= \"region\" aria-atomic= \"true\" aria-label= \"output of Development Environment\" aria-live= \"assertive\" ></pre>" +
            "<input id= \""+name+"CopyArea\" type= \"hidden\" readonly= \"readonly\" />" +
         "</div>";

    return environment;
}
