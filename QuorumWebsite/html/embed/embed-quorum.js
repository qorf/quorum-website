var currentIDEInput_$Global_ = '';
var currentIDEOutput_$Global_ = 'DefaultQuorumEnvironmentIdeOutput';
var currentUIContainer_$Global_ = 'QuorumUIContainer';
var total_console_length239847239482734 = 0;
var extraBuildFiles_$Global_ = {};
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
LoadScript("https://quorumlanguage.com/script/QuorumStandardLibrary.js?version=10.5.1");



function update_console() {
    if (typeof OuTpUt_$tRiNg_ !== 'undefined' && typeof currentIDEOutput_$Global_ !== 'undefined') {
        var newLength = OuTpUt_$tRiNg_.length;
        if (newLength > total_console_length239847239482734) {
            var dom = document.getElementById(currentIDEOutput_$Global_);
            if(dom != null) {
                dom.insertAdjacentHTML('beforeend', OuTpUt_$tRiNg_.substring(0, newLength));
            }
            total_console_length239847239482734 = newLength;
        }
    }
}

var Module = {
    locateFile: function(path, prefix) {
        if (path.endsWith(".data")) return "https://quorumlanguage.com/script/" + path;
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
var newRunCode = async function (input, output, uiContainer, execute) {
    var codeInput = document.getElementById(input).querySelector(".ideEditing").value;
    var outputRegion = document.getElementById(output);


    var pageURL = window.location.href;
    var ideName = input.replace("IdeInput","");
    let button = execute ?  0 : 1;
    let tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    currentIDEInput_$Global_ = input;
    currentIDEOutput_$Global_ = output;
    currentUIContainer_$Global_ = uiContainer;
    var codeData = {code: codeInput, pageURL: pageURL, ideName:ideName, build_only: button, timezone: tz};

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

  resetVisualSize(codeInput, ideName);

  
  xmlhttp.send("code=" + encodeURIComponent(codeInput) + "&" + "pageURL=" + encodeURIComponent(pageURL) 
    + "&" + "ideName=" + encodeURIComponent(ideName) + "&" + "build_only=" + encodeURIComponent(button) 
    + "&" + "timezone=" + encodeURIComponent(tz) +  `${await addBuildFiles(extraBuildFiles_$Global_, ideName)}`)
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

async function addBuildFiles(buildFilesArr, name){
  let buildFiles = ''
  let counter = 0
  //builds a list of promises to get the files
  const promises = buildFilesArr[name].map(async (url) => {
    const response = await fetch(url);
    const text = await response.text();
    return text;
  });
  //waits for all promises to resolve
  const files = await Promise.all(promises);

  files.forEach((file) => {
    buildFiles += `&extraBuildFile${counter}=` +  encodeURIComponent(file);
    counter++;
  });
  return buildFiles;
}

function resetVisualSize(codeInput, ideName) {
  //look in code and get string with SetScreenSize(width, height) with regex
  var regex = /SetScreenSize\((\d+),\s*(\d+)\)/g;
  var match = regex.exec(codeInput);
  if(match != null) {
    var width = match[1];
    var height = match[2];
    var visualOutput = document.getElementById(ideName+"QuorumUIContainer")
    visualOutput.style.width = width + "px";
    visualOutput.style.height = height + "px";
    visualOutput.style.maxWidth = width + "px";
    visualOutput.style.maxHeight = height + "px";
    visualOutput.onclick = function() {
      visualOutput.style.height = (parseInt(height) - 1) + "px";
      setTimeout(function() {
        visualOutput.style.height = height + "px";
      }, 100);
      //on keypress of space tab, or tab+shift change the height
      visualOutput.addEventListener('keydown', function(event) {
        if(event.keyCode == 32 || event.keyCode == 9) {
          visualOutput.style.height = (parseInt(height) - 1) + "px";
          setTimeout(function() {
            visualOutput.style.height = height + "px";
          }, 100);
        }
      }
      );
      
    }
  } else{
    var visualOutput = document.getElementById(ideName+"QuorumUIContainer")
    visualOutput.style.width = 'auto';
    visualOutput.style.height = 'auto';
    visualOutput.style.maxWidth = 'auto';
    visualOutput.style.maxHeight = 'auto';
    visualOutput.onclick = null;
  }
}

var InjectQuorumEnvironment = function(element, name, code) {
    InjectQuorumEnvironment(element, name, "Embed Quorum!","Enter Quorum code below and press \"Run Program\"", code );
}

var InjectQuorumEnvironment = function(element, name, code, title, subtitle, extraBuildFiles) {
    if(code === undefined) {
        code = "output \"Hello, World!\"";
    }

    if(name === undefined) {
        name = "DefaultQuorumEnvironment";
    }
    extraBuildFiles_$Global_[name] = extraBuildFiles || [];
    var result = GenerateQuorumEnvironment(name, title, subtitle);
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

var GenerateQuorumEnvironment = function(name, title, subtitle) {
    var environment =
        "<div id= \""+name+"Ide\" class= \"ideTotal\" >" +
            "<h2 class= \"allInOneIdeTitle\" ><label for= \""+name+"IdeInput\" >" + title + "</label></h2>" +
            "<p class= \"allInOneIdeSubtitle\" >"+subtitle+"</p>" +
            "<h2 class= \"hidden\" >Code Area</h2>" +
            "<section aria-labeledby= \""+name+"CodeArea\" >" +
               "<div class= \"flex-container\" >" +
                  "<div id= \""+name+"IdeInput\" tabindex= \"-1\" class= \"ideTextboxInput\" >" +
                     "<textarea tabindex= \"-1\" aria-hidden= \"true\" class= \"ideLineNumbers\" spellcheck= \"false\" readonly= \"readonly\" >1</textarea>" +
                     "<textarea id= \""+name+"ideTextboxInput\" spellcheck= \"false\" name= \"code\" onscroll= \"editAreaSyncScroll(this);\" tabindex= \"0\" class= \"ideEditing\" onkeydown= \"keyboardInputShortcuts(event, '"+name+"IdeInput', '"+name+"IdeOutput', '"+name+"QuorumUIContainer')\" aria-multiline= \"true\" oninput= \"editAreaUpdate(this); editAreaSyncScroll(this);\" ></textarea>" +
                     "<pre aria-hidden= \"true\" tabindex= \"-1\" class= \"syntaxHighlighting\" ><code tabindex= \"-1\" class= \"language-quorum highlighting-content\" ></code></pre>" +
                     "<script  type=\"text/javascript\">window.addEventListener('pageshow', () => {var element = document.getElementById('"+name+"IdeInput').querySelector('.ideEditing');editAreaUpdate(element)});</script>" +
                  "</div>" +
                  "<div tabindex=\"0\" id= \""+name+"QuorumUIContainer\" style=\"position: relative;\" class= \"ideVisualOutput\" ></div>" +
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
