var currentIDEInput_$Global_ = '';
var currentIDEOutput_$Global_ = 'frontPageIdeOutput';
var currentUIContainer_$Global_ = 'QuorumUIContainer';
var total_console_length239847239482734 = 0;
setInterval(update_console, 500);

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

var slideNr = 0;

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-26662794-3', 'auto');
ga('require', 'displayfeatures');
ga('send', 'pageview');
                
$(document).ready(function() {
    // add a click handler to all links 
    // that point to same-page targets (href="#...")		
    $("a[href^='#']").click(function() {
    // get the href attribute of the internal link
    // then strip the first character off it (#)
    // leaving the corresponding id attribute
    $("#"+$(this).attr("href").slice(1)+"")
        // give that id focus (for browsers that didn't already do so)
        .focus()
        // add a highlight effect to that id (comment out if not using)			
        //.effect("highlight", {}, 3000);
    });
    $.ajax({
        type: "GET",
        url: "/session_valid.php",
        success: function (result) {
            if (result === "success") {
                showLogoutUI();
            } else {
                showLoginUI();
            }
        }
    });
    
    document.addEventListener("keydown", function (event)
    {
        if ((event.key === "Escape" || event.keyCode === 27))
        {
            hideModals();
        }
    });
    
    document.getElementById('registerAccountLink').addEventListener("keydown", function (event)
    {
        if (!event.shiftKey && (event.key === "Tab" || event.keyCode === 9) && document.getElementById('loginModal').style.display === 'block')
        {
            document.getElementById('usernameInput').focus();
            event.preventDefault();
        }
    });
   
    document.getElementById('usernameInput').addEventListener("keydown", function (event)
    {
        if (event.shiftKey && (event.key === "Tab" || event.keyCode === 9) && document.getElementById('loginModal').style.display === 'block')
        {
            document.getElementById('registerAccountLink').focus();
            event.preventDefault();
        }
    });
    
    $(".loadcancelbtn").keydown(function (event)
    {
        if (!event.shiftKey && (event.key === "Tab" || event.keyCode === 9) && document.getElementById(lastModalID + 'LoadModal').style.display === 'block')
        {
            var prefix = this.dataset.prefix;
            document.getElementById(prefix + 'LoadProjectSelect').focus();
            event.preventDefault();
        }
    });
   
    $(".loadProjectSelect").keydown(function (event)
    {
        if (event.shiftKey && (event.key === "Tab" || event.keyCode === 9) && document.getElementById(lastModalID + 'LoadModal').style.display === 'block')
        {
            var prefix = this.dataset.prefix;
            document.getElementById(prefix + 'LoadProjectCancel').focus();
            event.preventDefault();
        }
    });
    
    $(".savecancelbtn").keydown(function (event)
    {
        if (!event.shiftKey && (event.key === "Tab" || event.keyCode === 9) && document.getElementById(lastModalID + 'SaveModal').style.display === 'block')
        {
            var prefix = this.dataset.prefix;
            document.getElementById(prefix + 'projectNameInput').focus();
            event.preventDefault();
        }
    });
   
    $(".SaveField").keydown(function (event)
    {
        if (event.shiftKey && (event.key === "Tab" || event.keyCode === 9) && document.getElementById(lastModalID + 'SaveModal').style.display === 'block')
        {
            var prefix = this.dataset.prefix;
            document.getElementById(prefix + 'SaveProjectCancel').focus();
            event.preventDefault();
        }
    });
    
    $("#loginmodalform").submit(function() {
        login();
        return false;
    });
    
    if (typeof jQuery != 'undefined') {
        jQuery(document).ready(function($) {
            var filetypes = /\.(zip|exe|pdf|doc*|xls*|ppt*|mp3)$/i;
            var baseHref = '';
            if (jQuery('base').attr('href') != undefined)
                baseHref = jQuery('base').attr('href');
            jQuery('a').each(function() {
                var href = jQuery(this).attr('href');
                if (href && (href.match(/^https?\:/i)) && (!href.match(document.domain))) {
                    jQuery(this).click(function() {
                        var extLink = href.replace(/^https?\:\/\//i, '');
                        _gaq.push(['_trackEvent', 'External', 'Click', extLink]);
                        if (jQuery(this).attr('target') != undefined && jQuery(this).attr('target').toLowerCase() != '_blank') {
                            setTimeout(function() { location.href = href; }, 200);
                            return false;
                        }
                    });
                }
                else if (href && href.match(/^mailto\:/i)) {
                    jQuery(this).click(function() {
                        var mailLink = href.replace(/^mailto\:/i, '');
                        _gaq.push(['_trackEvent', 'Email', 'Click', mailLink]);
                    });
                }
                else if (href && href.match(filetypes)) {
                    jQuery(this).click(function() {
                        var extension = (/[.]/.exec(href)) ? /[^.]+$/.exec(href) : undefined;
                        var filePath = href;
                        _gaq.push(['_trackEvent', 'Download', 'Click-' + extension, filePath]);
                        if (jQuery(this).attr('target') != undefined && jQuery(this).attr('target').toLowerCase() != '_blank') {
                            setTimeout(function() { location.href = baseHref + href; }, 200);
                            return false;
                        }
                    });
                }
            });
        });
    }
});

// Stores the last ID used to open a load/save modal so it can be closed easily.
var lastModalID = "";

function hideModals()
{
    if (document.getElementById('loginModal').style.display === 'block')
    {
        hideLoginModal();
    }
    
    var saveModal = document.getElementById(lastModalID + 'SaveModal');
    if (saveModal != null && saveModal.style.display === 'block')
    {
        hideSaveModal(lastModalID);
    }
    
    var loadModal = document.getElementById(lastModalID + 'LoadModal');
    if (loadModal != null && loadModal.style.display === 'block')
    {
        hideLoadModal(lastModalID);
    }
}

$(function () {
    changeCodeExample();
    submitCode();
});

var downloadQuorumStudioBeta = function() {
    $.ajax({
        type: "POST",
        url: "/downloadStudioBeta.php",
        data: {os: detectOperatingSystem()},
        success: function (result) {
            if (result === "") {
                alertMessageOff("");
            } else {
                alertMessageOn(result);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alertMessageOn("I could not connect to the server at quorumlanguage.com: " + thrownError);
        }
    });
};

// Detect what operating system the user is on. Not guaranteed 100% accurate.
function detectOperatingSystem()
{
    // Approach to test operating system is from this post:
    // https://stackoverflow.com/questions/38241480/detect-macos-ios-windows-android-and-linux-os-with-js
    
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) 
    {
        os = 'Mac OS';
    }
    else if (iosPlatforms.indexOf(platform) !== -1) 
    {
        os = 'iOS';
    } 
    else if (windowsPlatforms.indexOf(platform) !== -1) 
    {
        os = 'Windows';
    }
    else if (/Android/.test(userAgent)) 
    {
        os = 'Android';
    } 
    else if (!os && /Linux/.test(platform)) 
    {
        os = 'Linux';
    }
    else
    {
        // If we can't identify it broadly, we can at least return the raw platform value to be evaluated by the caller.
        os = platform;
    }

    return os;
}

function showLoginUI()
{
    $("#loginButton").text("Login");
    document.getElementById('profileButton').style.display = 'none';
}

function showLogoutUI()
{
    $("#loginButton").text("Logout");
    document.getElementById('profileButton').style.display = 'inline-block';
}

//Front page IDE dropdown menu
var changeCodeExample = function () {
    $("#frontPageIdeDropDownMenu").change(function () {
        $("#frontPageIdeInput").find(".ideEditing").text("");
        var selection = $(this).children(":selected").html();
        var codeExample = "";
        if (selection == "Hello, world!") {
            codeExample = "output \"Hello, world!\"";
        }
        else if (selection == "Conditionals") {
            codeExample = "integer a = 1\ninteger c = 0\nif a = 1\n\tc = 1\nelseif a > 1\n\tc = 2\nelse\n\tc = 0\nend\noutput c";
        }
        else if (selection == "Loops") {
            codeExample = "repeat 3 times\n\toutput \"Quorum\"\nend"
        }
        else if (selection == "Actions") {
            codeExample = "action Main\n\tinteger addedNumbers = add(5,10)\n\toutput addedNumbers\nend\n\naction add(integer a, integer b) returns integer\n\treturn a + b\nend";
        }
        else if (selection == "Classes") {
            codeExample =
                    "class Main\n" +
                    "   action Main\n" +
                    "       i = 1\n" +
                    "       repeat 10 times\n" +
                    "           output i\n" +
                    "           i = i + 1\n" +
                    "       end\n" +
                    "   end\n" +
                    "end";
        }
        else if(selection == "Audio") {
            codeExample = "use Libraries.Sound.Audio\n\n" +
                    "//Beachfront Celebration by Kevin MacLeod\n" +
                    "//(incompetech.com).\n" +
                    "//Creative Commons\n" +
                    "//Attribution 3.0 License.\n" +
                    "Audio song\n" + 
                    "song:Load(\"media/song.ogg\")\n" +
                    "song:Play()";
        }
        $("#frontPageIdeInput").children(".ideEditing").val(codeExample);
        editAreaUpdate(document.getElementById("frontPageIdeInput").querySelector(".ideEditing"));
    });
};

//IDE submit button action
var submitCode = function () {
    $("button[id$='IdeButton']").on("click", function (e) {
        console.log("Normal Setup");
        e.preventDefault();
        var target = e.target.id.slice(0, -9); //takes off "IdeButton" from the id
        $('#' + target + 'IdeOutput').text("");
        var pageURL = window.location.href;
        var tempCode = $('#' + target + 'IdeInput').val();
        let outputRegion = document.getElementById(target+"IdeOutput")
        currentIDEOutput_$Global_ =  target + 'IdeOutput';
        if (tempCode == "") {
            showModal($('#noCodeModalContainer')); //the root element of the modal
        } else {
            var codeData = {code: tempCode};
            $.ajax({
                type: "GET",
                url: "/proxy.php",
                data: codeData,
                success: function (result) {
                    outputRegion.innerHTML = "";
                    OuTpUt_$tRiNg_ = "";
                    let head= document.getElementsByTagName('head')[0];
                    let run = document.getElementById("Runnable");
                    if(run != null) {
                        Stop();
                        head.removeChild(run);
                    }
                    total_console_length239847239482734 = 0;
                    length = 0;

                    if(result.startsWith( "<div class=")) {
                        outputRegion.innerHTML = result;
                    } else if(result.startsWith("Failed to connect")) {
                        outputRegion.innerHTML = "I could not connect to the server at quorumlanguage.com"
                    } else {
                        var script= document.createElement('script');
                        script.id = "Runnable";
                        script.innerHTML= result;
                        head.appendChild(script);
                        Start();
                    }
                    completedcheck = checkOutputGeneral(OuTpUt_$tRiNg_);
                    var reportData = {code: tempCode, uuid: 0/*id*/, pagenumber: 0/*pageNumber*/, slidenumber: 0/*slideNr*/, resultCode: result, completed: 0/*completedcheck*/, pageurl: pageURL, gacookie: 0/*ga_cookie*/};
                    $.ajax({
                        type: "POST",
                        url: "/quorum_logger.php",
                        data: reportData,
                        success: function (result) {
                            console.log("Logged Result " + result);
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            console.log(xhr, ajaxOptions, thrownError);
                        }
                    });
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    $('#' + target + 'IdeOutput').html("Error: Could not connect to server: " + thrownError.toString());
                    var reportData = {code: tempCode, uuid: 0/*id*/, pagenumber: 0/*pageNumber*/, slidenumber: 0/*slideNr*/, resultCode: result, completed: 0/*completedcheck*/, pageurl: pageURL, gacookie: 0/*ga_cookie*/};
                    $.ajax({
                        type: "POST",
                        url: "/quorum_logger.php",
                        data: reportData,
                        success: function (result) {
                            console.log("Logged Result " + result);
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            console.log(xhr, ajaxOptions, thrownError);
                        }
                    });
                }
            });
        }
    });
};

function createSession(session, username) {
    var postData = {session: session, username:username};
    $.ajax({
        type: "POST",
        url: "/create_session.php",
        data: postData,
        success: function (result) {
            return result;
        },
    });
}

function saveIDE(input, output) {
    var codeInput = document.getElementById(input).value;
    var outputRegion = document.getElementById(output);
    var session = getSession();
    var filename = "";
    var pageURL = window.location.href;
    var ideName = input.replace("IdeInput","");

    var postData = {session:session, filename:filename, pageURL:pageURL, ideName:ideName, code:code};
    $.ajax({
        type: "POST",
        url: "/ide_save.php",
        data: postData,
        success: function (result) {
            outputRegion.innerHTML = result;
        },
        error: function (xhr, ajaxOptions, thrownError) {
            outputRegion.innerHTML = "I could not connect to the server at quorumlanguage.com.";
        }
    });
}

function loadIDE(input, output) {
    var codeInputRegion = document.getElementById(input);
    var outputRegion = document.getElementById(output);
    var session = getSession();
    var filename = "";
    var pageURL = window.location.href;
    var ideName = input.replace("IdeInput","");

    var postData = {session:session, pageURL:pageURL, ideName:ideName};
    $.ajax({
        type: "POST",
        url: "/ide_load.php",
        data: postData,
        success: function (result) {
            codeInputRegion.innerHTML = result;
        },
        error: function (xhr, ajaxOptions, thrownError) {
            outputRegion.innerHTML = "I could not connect to the server at quorumlanguage.com.";
        }
    });
}

//IDE submit button action
var buildCode = function (input, output) {
    var codeInput = document.getElementById(input).value;
    var outputRegion = document.getElementById(output);
    
    var pageURL = window.location.href;
    var ideName = input.replace("IdeInput","");

    var codeData = {code: codeInput, pageURL: pageURL, ideName:ideName};
    $.ajax({
        type: "POST",
        url: "/build.php",
        data: codeData,
        success: function (result) {
            outputRegion.innerHTML = result;
        },
        error: function (xhr, ajaxOptions, thrownError) {
            outputRegion.innerHTML = "I could not connect to the server at quorumlanguage.com: " + thrownError;
        }
    });
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
	// Attempt to stop previously running programs on this page first.
	stopProgram();
	
    var codeInput = document.getElementById(input).querySelector(".ideEditing").value;
    var outputRegion = document.getElementById(output);
    
    var pageURL = window.location.href;
    var ideName = input.replace("IdeInput","");
    currentIDEInput_$Global_ = input;
    currentIDEOutput_$Global_ = output;
    currentUIContainer_$Global_ = uiContainer;
    var codeData = {code: codeInput, pageURL: pageURL, ideName:ideName};
    $.ajax({
        type: "POST",
        url: "/fastrun.php",
        data: codeData,
        success: function (result) {
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
        },
        error: function (xhr, ajaxOptions, thrownError) {
            outputRegion.innerHTML = "I could not connect to the server at quorumlanguage.com: " + thrownError;
        }
    });
};

//this is for testing only
var validate = function (output) {
    var outputRegion = document.getElementById(output);
    $.ajax({
        type: "GET",
        url: "/session_valid.php",
        success: function (result) {
            if (result === "success") {
                outputRegion.innerHTML = "User is logged in";
;            } else {
                outputRegion.innerHTML = "User is not logged in";
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            outputRegion.innerHTML = "I could not connect to the server at quorumlanguage.com: " + thrownError;
        }
    });
};

var loginButtonPressed = function() {
    if ($("#loginButton").text() === "Login") {
        showLoginModal();
    } else {
        logout();
    }
};

var showLoginModal = function() {
    document.getElementById('loginModal').style.display='block';
    document.getElementById('usernameInput').focus();
};

var hideLoginModal = function() {
    document.getElementById('loginModal').style.display='none';
    document.getElementById('usernameInput').value = "";
    document.getElementById('passwordInput').value = "";
};

var showSaveModal = function(id) {
    $.ajax({
        type: "GET",
        url: "/session_valid.php",
        success: function (result) {
            if (result === "success") {
                hideModals();
                lastModalID = id;
                document.getElementById(id + 'SaveModal').style.display='block';
                document.getElementById(id + "projectNameInput").focus();
            } else {
                hideModals();
                showLoginModal();
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert("I could not connect to the server at quorumlanguage.com");
        }
    });
};

var hideSaveModal = function(id) {
    document.getElementById(id + 'SaveModal').style.display='none';
};

var showLoadModal = function(id) {
    $.ajax({
        type: "GET",
        url: "/session_valid.php",
        success: function (result) {
            if (result === "success") {
                $.ajax({
                    type: "POST",
                    url: "/load_project_select.php",
                    data: {id: id},
                    success: function(result)
                    {
                        hideModals();
                        lastModalID = id;
                        document.getElementById(id + 'LoadFieldContainer').innerHTML = result;
                        document.getElementById(id + 'LoadModal').style.display='block';
                        document.getElementById(id + "LoadProjectSelect").focus();
                        document.getElementById(id + "LoadProjectSelect").addEventListener("keydown", function (event)
                        {
                            if (event.shiftKey && (event.key === "Tab" || event.keyCode === 9) && document.getElementById(lastModalID + 'LoadModal').style.display === 'block')
                            {
                                var prefix = this.dataset.prefix;
                                document.getElementById(prefix + 'LoadProjectCancel').focus();
                                event.preventDefault();
                            }
                        });
                    },
                    error: function(xhr, ajaxOptions, thrownError)
                    {
                        alert('I could not connect to the server at quorumlanguage.com - ' + thrownError);
                    }
                });
            } else {
                hideModals();
                showLoginModal();
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert("I could not connect to the server at quorumlanguage.com");
        }
    });
};



var hideLoadModal = function(id) {
    document.getElementById(id + 'LoadModal').style.display='none';
};

var login = function() {
    var user = $("#usernameInput").val();
    var pwd = $("#passwordInput").val();
    loginWithParams(user, pwd, null);
};

var loginWithParams = function(user, pwd, redirect) {
    $.ajax({
        type: "POST",
        url: "/login.php",
        data: {username: user, password: pwd},
        success: function (result) {
            if (result === "success") {
                //$("#loginButton").text("Logout");
                showLogoutUI();
                hideLoginModal();
                if (redirect !== null) {
                    window.location.href = redirect;
                }
            } else {
                alert(result);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert("I could not connect to the server at quorumlanguage.com: " + thrownError);
        }
    });
};

var logout = function() {
    $.ajax({
        type: "GET",
        url: "/logout.php",
        success: function (result) {
            if (result === "success") {
                //$("#loginButton").text("Login");
                showLoginUI();
;            } else {
                alert("Logout failed");
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert("I could not connect to the server at quorumlanguage.com");
        }
    });
};

var saveCode = function(input, output) {
    var outputRegion = document.getElementById(output);
    $.ajax({
        type: "GET",
        url: "/session_valid.php",
        success: function (result) {
            if (result === "success") {
                var codeInput = document.getElementById(input).value;
                var pageURL = window.location.href;
                var ideName = input.replace("IdeInput","");
                var fileName = "";
                var codeData = {code: codeInput, pageURL: pageURL, ide_name:ideName, file_name: fileName};
                $.ajax({
                    type: "POST",
                    url: "/ide_save.php",
                    data: codeData,
                    success: function (result) {
                        outputRegion.innerHTML = result;
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        outputRegion.innerHTML = "I could not connect to the server at quorumlanguage.com: " + thrownError;
                    }
                });
            } else {
                outputRegion.innerHTML = "User is not logged in";
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            outputRegion.innerHTML = "I could not connect to the server at quorumlanguage.com: " + thrownError;
        }
    });
};

var saveProject = function(id, input, output, namefield, overwrite) {
    $.ajax({
        type: "GET",
        url: "/session_valid.php",
        success: function (result) {
            if (result === "success") {
                var codeInput = document.getElementById(input).value;
                var filename = document.getElementById(namefield).value;
                var pageURL = window.location.href;
                var codeData = {code: codeInput, file_name: filename, overwrite: overwrite, ide: id, url: pageURL};
                $.ajax({
                    type: "POST",
                    url: "/project_save.php",
                    data: codeData,
                    success: function (result) {
                        if (result === "A file already exists with that name.")
                        {
                            if (confirm("A file already exists with this name. Do you want to overwrite it?"))
                            {
                                saveProject(id, input, output, namefield, true);
                            }
                        }
                        else
                        {
                            hideSaveModal(id);
                            document.getElementById(output).innerHTML = result;
                        }
                        return false;
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        alert("Your code could not be saved at this time: " + thrownError);
                    }
                });
            } else {
                showLoginModal();
                hideSaveModal(id);
            }
            return false;
        },
        error: function (xhr, ajaxOptions, thrownError) {
           alert("I could not connect to the server at quorumlanguage.com: " + thrownError);
        }
    });
};

var loadCode = function(input, output) {
    var outputRegion = document.getElementById(output);
    $.ajax({
        type: "GET",
        url: "/session_valid.php",
        success: function (result) {
            if (result === "success") {
                var inputRegion = document.getElementById(input);
                var pageURL = window.location.href;
                var ideName = input.replace("IdeInput","");
                var codeData = {pageURL: pageURL, ide_name:ideName};
                $.ajax({
                    type: "POST",
                    url: "/ide_load.php",
                    data: codeData,
                    success: function (result) {
                        if (result !== "") {
                            inputRegion.value = result;
                            outputRegion.innerHTML = "Code loaded successfully";
                        } else {
                            outputRegion.innerHTML = "No saved code found";
                        }
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        outputRegion.innerHTML = "I could not connect to the server at quorumlanguage.com: " + thrownError;
                    }
                });
            } else {
                outputRegion.innerHTML = "User is not logged in";
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            outputRegion.innerHTML = "I could not connect to the server at quorumlanguage.com: " + thrownError;
        }
    });
};

var loadProject = function(id, select, input, output)
{
    var outputRegion = document.getElementById(output);
    $.ajax({
        type: "GET",
        url: "/session_valid.php",
        success: function (result) {
            if (result === "success") {
                var inputRegion = document.getElementById(input);
                var file, sharedBy;
                var filename = document.getElementById(select).value;
                var index = filename.lastIndexOf("#");
                
                if (index === -1)
                {
                    file = filename;
                    sharedBy = "";
                }
                else
                {
                    file = filename.substring(0, index);
                    sharedBy = filename.substring(index + 1);
                }
                
                var codeData = {filename: file, shared: sharedBy};
                $.ajax({
                    type: "POST",
                    url: "/load_project_file.php",
                    data: codeData,
                    success: function (result) {
                        if (result !== "") {
                            inputRegion.value = result;
                            outputRegion.innerHTML = 'Loaded "' + filename + '".';
                            hideLoadModal(id);
                        } else {
                            outputRegion.innerHTML = 'I could not load the project named "' + filename + '".';
                            hideLoadModal(id);
                        }
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        outputRegion.innerHTML = "I could not connect to the server at quorumlanguage.com: " + thrownError;
                        hideLoadModal(id);
                    }
                });
            } else {
                outputRegion.innerHTML = "You are not logged in. Log in first to load your saved projects.";
                hideLoadModal(id);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            outputRegion.innerHTML = "I could not connect to the server at quorumlanguage.com: " + thrownError;
        }
    });
};

var embedCode = function(input, output, copyArea) {
    var inputRegion = document.getElementById(input);
    var outputRegion = document.getElementById(output);

    window.open("tutorials/language/embedTutorial.html", "_blank")
    outputRegion.innerHTML = outputRegion.innerHTML + "<br></br>A tab was opened which contains a tutorial on how to embed Quorum online.";

};

var checkOutputGeneral = function (output) {
    console.log("Checking output");
    path = window.location.pathname;
    console.log(path);
    
    var outputArray = [];
    outputArray[0] = 'GATTACA\nWelcome to GATTACA\n';
    outputArray[1] = 'The area is 28.';
    outputArray[2] = 'Hello!\n';
    outputArray[3] = '2.0\n4.0\n6.0\n8.0\n10.0\n';
    outputArray[4] = '0.0 is even\n1.0 is odd\n2.0 is even\n3.0 is odd\n4.0 is even\n5.0 is odd\n6.0 is even\n7.0 is odd\n8.0 is even\n9.0 is odd\n';
    outputArray[5] = 'Programming in Quorum is fun!\n';

    expected = null;
    if(path === "/hourofcode/part1.html") {
        expected = 'GATTACA\nWelcome to GATTACA\n'.toLowerCase();
    } else if(path === "/hourofcode/part2.html") {
        expected = 'The area is 28.\n'.toLowerCase();
    } else if(path === "/hourofcode/part3.html") {
        expected = 'Hello!\n'.toLowerCase();
    } else if(path === "/hourofcode/part4.html") {
        expected = '2.0\n4.0\n6.0\n8.0\n10.0\n'.toLowerCase();
    } else if(path === "/hourofcode/part5.html") {
        expected = '0.0 is even\n1.0 is odd\n2.0 is even\n3.0 is odd\n4.0 is even\n5.0 is odd\n6.0 is even\n7.0 is odd\n8.0 is even\n9.0 is odd\n'.toLowerCase();
    } else if(path === "/hourofcode/part6.html") {
        expected = 'Programming in Quorum is fun!\n'.toLowerCase();
    }
    
    console.log(expected);
    
    if(expected != null && output != null) {
        if(output.toLowerCase() === expected) {
            console.log("Success!");
            showModal($('#modal'));
        } else {
            console.log("No match detected")
        }
    }
};

//Checks IDE output for correct answer in Hour of Code pages
var checkOutput = function (pageNumber, output) {
    console.log("Checking output");
    var outputArray = [];
    outputArray[0] = 'GATTACA<br>Welcome to GATTACA<br>';
    outputArray[1] = 'The area is 28.';
    outputArray[2] = 'Hello!<br>';
    outputArray[3] = '2.0<br>4.0<br>6.0<br>8.0<br>10.0<br>';
    outputArray[4] = '0.0 is even<br>1.0 is odd<br>2.0 is even<br>3.0 is odd<br>4.0 is even<br>5.0 is odd<br>6.0 is even<br>7.0 is odd<br>8.0 is even<br>9.0 is odd<br>';
    outputArray[5] = 'Programming in Quorum is fun!<br>';

    if (pageNumber == 2) {
        output = output.substring(0, 15); //to get around any rounding errors
    }

    //Should make this case insensitive
    if (outputArray[pageNumber - 1].toLowerCase() == output.toLowerCase()) {
        //success
        console.log("Success!");
        showModal($('#modal'));
        return 1;
    }
    else {
        console.log("not yet right");
        return 0;
    }
};




/* Modal stuff */

/* Accessible Modal Window
 
 ============================================
 License for Application
 ============================================
 
 This license is governed by United States copyright law, and with respect to matters
 of tort, contract, and other causes of action it is governed by North Carolina law,
 without regard to North Carolina choice of law provisions.  The forum for any dispute
 resolution shall be in Wake County, North Carolina.
 
 Redistribution and use in source and binary forms, with or without modification, are
 permitted provided that the following conditions are met:
 
 1. Redistributions of source code must retain the above copyright notice, this list
 of conditions and the following disclaimer.
 
 2. Redistributions in binary form must reproduce the above copyright notice, this
 list of conditions and the following disclaimer in the documentation and/or other
 materials provided with the distribution.
 
 3. The name of the author may not be used to endorse or promote products derived from
 this software without specific prior written permission.
 
 THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED
 WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY
 AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE
 LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 
 */

// jQuery formatted selector to search for focusable items
var focusableElementsString = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";

// store the item that has focus before opening the modal window
var focusedElementBeforeModal;

$(document).ready(function () {
    jQuery('#modalCloseButton, #signInFormCancelButton, #signUpFormCancelButton').click(function (e) {
        hideModal();
    });
    jQuery('#modal').keydown(function (event) {
        trapTabKey($(this), event);
    })
    jQuery('#modal').keydown(function (event) {
        trapEscapeKey($(this), event);
    })

    jQuery('#noCodeModalCloseButton').click(function (e) {
        hideModal();
    });
    jQuery('#noCodeModal').keydown(function (event) {
        trapTabKey($(this), event);
    })
    jQuery('#noCodeModal, #signInModalContainer, #signUpModalContainer').keydown(function (event) {
        trapEscapeKey($(this), event);
    })

    $('#signUpButton').click(function (e) {
        showModal($('#signUpModalContainer'));
    });

    $('#signInButton').click(function (e) {
        showModal($('#signInModalContainer'));
    });

    //hide if clicking outside of the modal
    $('#signUpModalContainer').click(function (e) {
        if (e.target.id === "signUpModalContainer") {
            hideModal();
        }
    });

    $('#signInModalContainer').click(function (e) {
        if (e.target.id === "signInModalContainer") {
            hideModal();
        }
    });

    hourOfCodeSetup();
});


/** 
 * Hour of Code stuff
 *
 */
function hourOfCodeSetup() {
    // Hook loading of slides into HourOfCode
    var currurl = window.location.pathname;
    var page = getPageName(currurl);
    if (page === "part1") {
        submitCodeSampleHourOfCode(1);
        slideShow(part1Slides());
    } else if (page === "part2") {
        submitCodeSampleHourOfCode(2);
        slideShow(part2Slides());
    } else if (page === "part3") {
        submitCodeSampleHourOfCode(3);
        slideShow(part3Slides());
    } else if (page === "part4") {
        submitCodeSampleHourOfCode(4);
        slideShow(part4Slides());
    } else if (page === "part5") {
        submitCodeSampleHourOfCode(5);
        slideShow(part5Slides());
    } else if (page === "part6") {
        submitCodeSampleHourOfCode(6);
        slideShow(part6Slides());
    } else if (page === "part7") {
        submitCodeSampleHourOfCode(7);
        slideShow(part7Slides());
    }
}

function getPageName(url) {
    var index = url.lastIndexOf("/") + 1;
    var filenameWithExtension = url.substr(index);
    var filename = filenameWithExtension.split(".")[0]; // <-- added this line
    return filename;                                    // <-- added this line
}

var submitCodeSampleHourOfCode = function (pageNumber) {
    $("#run-button, #hour-of-code-run-button").on("click", function (e) {
        console.log("hourOfCodesetup");
        e.preventDefault();
        $(".outputArea").text("");
        
        var pageURL = "";
        pageURL = window.location.protocol + "//" + window.location.pathname;
        
        var id = getCookie("PHPSESSID");
        var ga_cookie = getGAClient();
        var tempCode = $('.inputArea').val();
        if (tempCode == "") {
            console.log("Tried to show modal window ");
            showModal($('#noCodeModal'));
        } else {
            var codeData = {code: tempCode};
            $.ajax({
                type: "GET",
                url: "/proxy.php",
                data: codeData,
                success: function (result) {
                    var hadCompilerError = false;
                    //console.log(result);
                    try {
                        $(".outputArea").html(eval(result));
//                            $("#IDE-output").html('GATTACA<br>Welcome to GATTACA<br>');
                    } catch (e) {
                        if (e instanceof SyntaxError) {
                            $(".outputArea").text(result);
                            hadCompilerError = true;
                        }
                    }
                    var completedcheck = 0;
                    //check hour of code output based on the page
                    if (!hadCompilerError) {
                        console.log("No compiler error page number:" + pageNumber);

                        if (pageNumber >= 1 && pageNumber <= 6) { //7th page has no exercises
                            completedcheck = checkOutput(pageNumber, $('.outputArea').html());
                        }
                    }
                    
                    console.log("After check");

                    var reportData = {code: tempCode, uuid: id, pagenumber: pageNumber, slidenumber: slideNr, resultCode: result, completed: completedcheck, pageurl: pageURL, gacookie: ga_cookie};
                    $.ajax({
                        type: "POST",
                        url: "/quorum_logger.php",
                        data: reportData,
                        success: function (result) {
                            console.log("Logged Result " + result);
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            console.log(xhr, ajaxOptions, thrownError);
                        }

                    });
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    //console.log(xhr, ajaxOptions, thrownError);
                    $(".outputArea").html("Error: Could not connect to server: " + thrownError.toString());
                    var reportData = {code: tempCode, uuid: id, pagenumber: pageNumber, slidenumber: slideNr, resultCode: thrownError.toString(), completed: 0, pageurl: pageURL, gacookie: ga_cookie};
                    $.ajax({
                        type: "POST",
                        url: "/quorum_logger.php",
                        data: reportData,
                        success: function (result) {
                            console.log("Logged Result " + result);
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            console.log(xhr, ajaxOptions, thrownError);
                        }
                    });
                }
            });
        }
    });
};

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2)
        return parts.pop().split(";").shift();
}
;

function getGAClient() {
    try {
        var client = ga.getAll()[0].get('clientId');
        return client;
    } catch (e) {
    }
}
;

function slideShow(slideArray) {
    for (var i = 0; i < slideArray.length; i++) {
        $('#slide-navigation').append('<button class="slide-navigation-button" aria-hidden="true" tabindex="0" aria-label="Show section ' + (i + 1) + '">' + (i + 1) + '</button>');
        slideArray[i] = "<article id =\"slide-box\" role=\"description\" aria-label=\"Section " + (i + 1) + "\">" + slideArray[i] + "</article>";
    }

    //button array
    var buttonArray = new Array();
    buttonArray = $('.slide-navigation-button').toArray();

    //initial load stuff
    $(buttonArray[0]).addClass('active-slide-navigation-button');
    $('#slide-box').replaceWith($.parseHTML(slideArray[0]));
    $('#slide-navigation').append('<p class="hourOfCodeIDELabel" aria-hidden="true">Notes</p>');

    //changing slides
    var slide = function (index, direction) {
        //the slide animation
        //keep track of slide number. for some reason left and right are reversed
        if (direction === "right") {
            slideNr--;
        }
        if (direction === "left") {
            slideNr++;
        }
        $('#content-box-wrapper').attr('aria-live', 'none');
//            $('#slide-box').hide('slide', { direction: direction }, 400, function(){
//                $('#slide-box').replaceWith($.parseHTML(slideArray[index]));
//                $('#content-box-wrapper').attr('aria-live', 'polite');
//            });
        $('#slide-box').replaceWith($.parseHTML(slideArray[index]));
        $('#content-box-wrapper').attr('aria-live', 'polite');
    };

    $('.slide-navigation-button').click(function () {
        var current = $('.slide-navigation-button').index($('.active-slide-navigation-button'));
        var next = $('.slide-navigation-button').index(this);
        $('.active-slide-navigation-button').removeClass('active-slide-navigation-button');
        $(buttonArray[next]).addClass('active-slide-navigation-button');
        if (current < next) { //next slide
            if (next == (slideArray.length - 1)) { //disable arrow
                $('#rightArrow').click(false);
                $('#rightArrow').attr("aria-hidden", "true");
                $('#rightArrow').toggleClass("rightArrow-disabled");
            }

            slide(next, "left");
//                $('#slide-box').focus();

            if ($('#leftArrow').hasClass("leftArrow-disabled")) { //enable arrow
                $('#leftArrow').click(true);
                $('#leftArrow').attr("aria-hidden", "false");
                $('#leftArrow').toggleClass("leftArrow-disabled");
            }
        }

        else if (current > next) { //previous slide
            if (next == 0) { //disable arrow
                $('#leftArrow').click(false);
                $('#leftArrow').attr("aria-hidden", "true");
                $('#leftArrow').toggleClass("leftArrow-disabled");
            }

            slide(next, "right");

            if ($('#rightArrow').hasClass("rightArrow-disabled")) { //enable arrow
                $('#rightArrow').click(true);
                $('#rightArrow').attr("aria-hidden", "false");
                $('#rightArrow').toggleClass("rightArrow-disabled");
            }
        }
    });

    $('#leftArrow').click(function () {
        var current = $('.slide-navigation-button').index($('.active-slide-navigation-button'));
        if (current != 0) { //check for bounds
            var next = current - 1;
            $('.active-slide-navigation-button').removeClass('active-slide-navigation-button');
            $(buttonArray[next]).addClass('active-slide-navigation-button');
            if ($('#rightArrow').hasClass("rightArrow-disabled")) { //enable arrow
                $('#rightArrow').click(true);
                $('#rightArrow').attr("aria-hidden", "false");
                $('#rightArrow').toggleClass("rightArrow-disabled");
            }
            if (next == 0) { //disable arrow
                $('#leftArrow').click(false);
                $('#leftArrow').toggleClass("leftArrow-disabled");
                $('#leftArrow').attr("aria-label", "You are on slide " + current - 1);
                $('#leftArrow').attr("aria-hidden", "true");
            }
            slide(next, "right");
        }
    });

    $('#rightArrow').click(function () {
        var current = $('.slide-navigation-button').index($('.active-slide-navigation-button'));
//            alert(current + " " + slideArray.length)
        if (current != (slideArray.length - 1)) {
            var next = current + 1;
            $('.active-slide-navigation-button').removeClass('active-slide-navigation-button');
            $(buttonArray[next]).addClass('active-slide-navigation-button');
            if ($('#leftArrow').hasClass("leftArrow-disabled")) { //enable arrow
                $('#leftArrow').click(true);
                $('#leftArrow').attr("aria-hidden", "false");
                $('#leftArrow').toggleClass("leftArrow-disabled");
            }
            if (next == (slideArray.length - 1)) { //disable arrow
                $('#rightArrow').click(false);
                $('#leftArrow').attr("aria-label", "You are on slide " + current - 1);
                $('#rightArrow').attr("aria-hidden", "true");
                $('#rightArrow').toggleClass("rightArrow-disabled");
            }
            slide(next, "left");
        }
    });

}

function part1Slides() {
//slide array
    var slideArray = [];
    slideArray[0] = "<h4 class=\"slideHeader\" role=\"heading\">Variables</h4>\n\
        <ul>\n\
        <li>In programming, a <code>variable</code> is a container to store information that can be used at a later time.</li>\n\
        <li>In Quorum, there are four types of basic variables: <code>text</code>, <code>number</code>, <code>integer</code> and <code>boolean</code>.  Each type of variable holds a different kind of information.</li>\n\
        <li>In this first example, we will create a <code>text</code> variable, which holds a text string of anything you want to type in. We'll explain the other types in the next sections.</li>\n\
        <li>Notice that a <code>text</code> string is enclosed in two double quotation marks.</li>\n\
        </ul><br><p>Move on to the next slide when you are ready.<p>";

    slideArray[1] = "<h4 class=\"slideHeader\" role=\"heading\">Creating Variables</h4>\n\
        <ul>\n\
        <li>To create a variable in Quorum, we start by telling the computer what type of variable we want to make, in this case it's a <code>text</code> variable, followed by a space and a name for the variable.</li>\n\
        <li>The important thing to remember about naming a variable is that a variable needs to start with a letter.  After that, you can have numbers or more letters in the name.</li>\n\
        <span class=\"title\">Try it!</span>\n\
        <div class =\"task\">Create a text variable named dna in the code box below by typing the code: <code>text dna</code> then go to the next slide.</div>\n\
        </ul>";

    slideArray[2] = "<h4 class=\"slideHeader\" role=\"heading\">Storing Text in Variables: Literals</h4>\n\
        <ul>\n\
        <li>Now we have made a variable named <code>dna</code>, but we haven't stored any information in it yet, so it's empty.</li>\n\
        <li>To store a value into a variable we use the <code>=</code> operator, followed by the information we want stored.</li>\n\
        <li>For this example, let's store the text string \"GATTACA\" in our <code>dna</code> variable.</li>\n\
        <li>Remember to put double quotes around the string we're storing in a text variable to tell the computer we want to store exactly what we typed.</li>\n\
        <span class=\"title\">Try it!</span>\n\
        <div class =\"task\">Store the text \"GATTACA\" to the <code>dna</code> variable: <code>text dna = \"GATTACA\"</code> then go to the next slide.</div>\n\
        </ul>";

    //rewrite the example to include a literal string concatenate with a variable holding a string
    slideArray[3] = "<h4 class=\"slideHeader\" role=\"heading\">Using Variables for Output</h4>\n\
        <ul>\n\
        <li>Now that we've stored something in our variable, we can refer to its contents whenever we need to by using the variable name.</li>\n\
        <li>To demonstrate this, let's take what we have stored in our variable and display it to the screen.</li>\n\
        <li>In Quorum, to output information to the screen we type the word <code>output</code> followed by a space and then whatever we want to show up on screen.</li>\n\
        <span class=\"title\">Try it!</span>\n\
        <div class =\"task\">Output the contents of the dna variable by typing <code>output dna</code> on a new second line and hit the green Run button to see the output.</div>\n\
        </ul>";

    slideArray[4] = "<h4 class=\"slideHeader\" role=\"heading\">Storing Text in Variables: From Variables</h4>\n\
        <ul>\n\
        <li>If we want to assign the value of one variable to another variable, we can use the <code>=</code> operator to copy the contents.</li>\n\
        <li>We can also use the <code>+</code> operator to put more than one thing into a variable.</li>\n\
        <li>For <code>text</code> variables putting two strings into the same variable puts them one after the other.</li>\n\
        <span class=\"title\">Try it!</span>\n\
            <div class =\"task\">Create a new variable called <code>text msg</code> and then use the <code>=</code> operator to put the string and variable <code>\"Welcome to \" + dna</code> into it.  On the next line, output the msg variable: <code>output msg</code>.</div>\n\
        </ul>";

    slideArray[5] = "<h4 class=\"slideHeader\" role=\"heading\">Additional Information Regarding Variables</h4>\n\
        <ul>\n\
        <li>Names are case sensitive: dna is not the same as DNA.</li>\n\
        <li>When storing a string into a text variable, be sure to use double quotes.</li>\n\
        <li>Because variables are just containers, if we change what is stored inside of it we can still use the same output statement and get a different result on screen.</li>\n\
        <li>If you've been following along, you can test this by changing what is initally stored in the <code>dna</code> variable.</li>\n\
        </ul>";
    return slideArray;
}

function part2Slides() {
    //slide array
    var slideArray = [];
    slideArray[0] = "<h5 class=\"slideHeader\"role=\"heading\">Number Variables</h5>\n\
        <ul>\n\
        <li>Another type of variable often used in programming is a real (or decimal) number. In Quorum to create this type of variable we use the keyword <code>number</code>.</li>\n\
        <li>A <code>number</code> variable holds numeric values that can include decimal places such as 8.3439 or 42.0 or even 19.</li>\n\
        <li>Unlike text variables, we never use double quotes when storing a number, we just type it.</li>\n\
        <span class=\"title\">Try it!</span>\n\
        <div class =\"task\">Create a number variable with the following code: <code>number pi = 3.14159</code> then move to the next slide.</div>\n\
        </ul>";

    slideArray[1] = "<h5 class=\"slideHeader\"role=\"heading\">Arithmetic with Number Variables</h5>\n\
        <ul>\n\
        <li>We can do arithmetic calculations with <code>number</code> variables, just like we would on the numbers themselves.</li>\n\
        <li>The computer substitutes the actual number in the variable into the formula and performs the calculation.</li>\n\
        <li>For example, if we make a new variable that holds the radius of a circle, then we can calculate its area using the formula area = pi X radius X radius.  On a computer, the multiplication operator is the <code>*</code>.</li>\n\
        <span class=\"title\">Try it!</span>\n\
        <div class =\"task\">Create a variable to hold your circle's radius: <code>number radius = 3</code> and then calculate the area: <code>number area = pi * radius * radius</code></div>\n\
        </ul>";

    slideArray[2] = "<h5 class=\"slideHeader\"role=\"heading\">Make the Computer Talk with: Say</h5>\n\
        <ul>\n\
        <li>Quorum has a built in feature to instruct the computer to say things out loud.  This is done by using the keyword <code>say</code> followed by whatever we want it to say.</li>\n\
        <li>Just like with output statements, the computer can say the contents of a variable or a string that we type in.</li>\n\
        <li><span class = \"bold\">Note:</span> Say statements may not work with all web browsers.</li>\n\
        <span class=\"title\">Try it!</span>\n\
        <div class =\"task\">Tell the computer to say the result of the area calculation you just completed by typing a new line: <code>say \"The area is \" + area</code> followed by <code>output \"The area is \" + area</code> and then Run your code.</div>\n\
        </ul>"; //operators, concat

    slideArray[3] = "<h5 class=\"slideHeader\"role=\"heading\">Additional Information</h5>\n\
        <ul>\n\
        <li>There are 5 main operators when using numbers: <code>+</code> (addition), <code>-</code> (subtraction), <code>*</code> (multiplication), <code>/</code> division and <code>mod</code> (modulus).</li>\n\
        <li>The modulus operator is used for finding the remainder of a division operation, for example: <code>15 mod 10</code> will give us a result of 5.</li>\n\
        <li>One example of how to use the modulus operator is to deterimine if a number is even or odd: <code>evenNum mod 2</code>  equals 0 and <code>oddNum mod 2</code> equals 1.</li>\n\
        <li>When using <code>say</code> or <code>output</code> statements, you can concatenate (add) things to be output one after another using the <code>+</code> operator, just like in the previous slide.</li>\n\
        </ul>";

    return slideArray;
}

function part3Slides() {
    //slide array
    var slideArray = [];

    slideArray[0] = "<h5 class=\"slideHeader\"role=\"heading\">Boolean Variables</h5>\n\
        <ul>\n\
        <li>A <code>boolean</code> variable is a special type of variable that contains one of two possible values: <code>true</code> or <code>false</code>.</li>\n\
        <li>By themselves, <code>boolean</code> variables don't seem to do too much, but they are a powerful tool when working with control structures, as we will soon see.</li>\n\
        <span class=\"title\">Try it!</span>\n\
        <div class =\"task\">\n\
            <ul>\n\
            <li>Make a <code>boolean</code> variable and assign it a value of true: <code>boolean sayStatement = false</code>.</li>\n\
            <li>Create a <code>text</code> variable named \"greeting\" and assign it a string you like in double quotes: <code>text greeting = \"Hello!\"</code></li>\n\
            <li>We will use these variables in a couple slides.</li>\n\
            </ul></div>\n\
        </ul>";

    slideArray[1] = "<h5 class=\"slideHeader\"role=\"heading\">Control Structures: If (Structure)</h5>\n\
        <ul>\n\
        <li>One powerful ability of a computer is to evaluate a condition and make a decision about which instructions to execute. These decisions can be made with a simple conditional statement, which in Quorum uses the keyword <code>if</code>.</li>\n\
        <li>An <code>if</code> statement has three parts: the keyword <code>if</code> followed by a condition, followed by the block of code to execute if the condition is <code>true</code>, followed by <code>end</code>.</li>\n\
        <li><code>boolean</code> variables are often used to specify the condition.</li>\n\
        <span class=\"title\">Try it!</span>\n\
        <div class =\"task\"><p>Create an <code>if</code> statement using the <code>boolean</code> from the last slide: <code>if sayStatement = true</code> and then type <code>end</code> on a new line and then move to the next slide.</p>\n\</div>\n\
        </ul>";

    slideArray[2] = "<h5 class=\"slideHeader\"role=\"heading\">Control Structures: If (Conditional Logic)</h5>\n\
        <ul>\n\
        <li>When determining whether to execute the block of code within the <code>if</code> statement the computer checks the condition part of the statement to see whether it is <code>true</code> or <code>false</code>.</li>\n\
        <li>You can specify the condition using a <code>boolean</code> variable or any other expression that evaluates to <code>true</code> or <code>false</code></li>\n\
        <li>For example, if you typed <code>if 1 + 1 = 4</code> the condition <code>1 + 1 = 4</code> evaluates to <code>false</code>, so the code is skipped.</li>\n\
        <li>If code is skipped, the computer jumps to the <code>end</code> keyword for the next instruction.</li>\n\
        <span class=\"title\">Try it!</span>\n\
        <div class =\"task\"><p>Inside the previous <code>if</code> block type: <code>say greeting</code> and then Run your code.</p></div>\n\
        </ul>";

    slideArray[3] = "<h5 class=\"slideHeader\"role=\"heading\">Control Structures: If (elseif)</h5>\n\
        <ul>\n\
        <li>You can also specify an alternatve condition to evaluate if the condition in the first part of the <code>if</code> statement is <code>false</code> by using the keyword <code>elseif</code> before the <code>end</code>.</li>\n\
        <li>We can include as many <code>elseif</code> conditions as we want and include code blocks to execute in each case.</li>\n\
        <li>There is a single <code>end</code> statement at the conclusion.</li>\n\
        <span class=\"title\">Try it!</span>\n\
        <div class =\"task\"><p>Continuing the example from the last slide, insert a new condition before the line <code>end</code> and then a line containing the code to execute: <code>elseif sayStatement = false</code><br><code>output greeting</code> and then Run your code.</p></div>\n\
        </ul>";

    slideArray[4] = "<h5 class=\"slideHeader\"role=\"heading\">Control Structures: If (else)</h5>\n\
        <ul>\n\
        <li>There is one other optional part of an <code>if</code> statement called the default condition, which will execute if no other condition in the statement is <code>true</code>.  In Quorum, this block is designated with the keyword <code>else</code></li>\n\
        <li>In our example, there are only two states: <code>true</code> and <code>false</code>, so there are no other possible conditions, although the <code>elseif</code> line could be converted to an <code>else</code> without a second condition.</li>\n\
        <li>In other cases, you might have a list of conditions like: <br> <code>if x = 1</code> {code block}<br>\n\
        <code>elseif x = 2</code> {code block}<br>\n\
        <code>else</code> {code block}<br>\n\
        <code>end</code>\n\
        &nbsp(You can experiment or move on when ready)</li>\n\
        </ul>";

    slideArray[5] = "<h5>If Statements: Additional Information</h5>\n\
        <ul>\n\
        <li>More documentation on <code>if</code> statements can be found <a href=\"http://quorumlanguage.com/documents/syntax/if.php\">here</a>.</li>\n\
        </ul>";

    return slideArray;
}

function part4Slides() {
    var slideArray = [];
    slideArray[0] = "<h5 class=\"slideHeader\"role=\"heading\">Control Structures: Repeat</h5>\n\
        <ul>\n\
        <li>If we want the computer to repeat a task multiple times, we can use a loop in our program.  This is usually a lot less work than typing the instruction repeatedly and more flexible because we can have the instructions executed a variable number of times.</li>\n\
        <li>In Quorum, we create a loop using the keyword <code>repeat</code>.</li>\n\
        <li>We mark the end of a loop in the same way we marked the end of an <code>if</code> statement, by using the keyword <code>end</code>.</li>\n\
        <li>In this example, we will explore three different ways to control loops using the statements: <code>repeat {number} times</code>, <code>repeat while {condition}</code> and <code>repeat until {condition}</code>.</li>\n\
        </ul><p>Move on to the next slide when you are ready.<p>";

    slideArray[1] = "<h5 class=\"slideHeader\"role=\"heading\">Control Structures: Repeat Times</h5>\n\
        <ul>\n\
        <li>The most basic type of loop involves just telling the computer how many times to repeat something.</li>\n\
        <li>In Quorum, if we want to do something 5 times, we can type: <code>repeat 5 times</code> or if we have a numeric variable, we can place that in the \"5\" position like: <code>repeat x times</code>.</li>\n\
        <span class=\"title\">Try it!</span>\n\
        <div class =\"task\"><p>Output five even numbers:<br><code>number evenNumber = 2</code><br>\n\
        <code>repeat 5 times</code><br>\n\
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<code>output evenNumber</code><br>\n\
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<code>evenNumber = evenNumber + 2</code><br>\n\
        <code>end</code>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(Then Run your code)</p>\n\
        </div>\n\
        </ul>";

    slideArray[2] = "<h5 class=\"slideHeader\"role=\"heading\">Control Structures: Repeat While</h5>\n\
        <ul>\n\
        <li>An alternative type of loop is to repeat a block of code while a certain condition is met.</li>\n\
        <li>In Quorum we do this by using a <code>repeat while</code> statement. After the keyword <code>while</code>, we include a condition, just like we did with an <code>if</code> statement.</li>\n\
        <li>If we want to mimic the last example, we could just repeat while our variable is less than or equal to 10.</li>\n\
        <li>Note that the value of the variable will be 12, but the output statement is skipped when the repeat condition is false.</li>\n\
        <span class=\"title\">Try it!</span>\n\
        <div class =\"task\"><p>Output the even numbers again by changing line 2 to: <code>repeat while evenNumber <= 10</code>, then hit Run.</p></div>\n\
        </ul>";

    slideArray[3] = "<h5 class=\"slideHeader\"role=\"heading\">Control Structures: Repeat Until</h5>\n\
        <ul>\n\
        <li>The final way of representing a loop in Quorum is to use a <code>repeat until</code> statement, which is very similar to the <code>repeat while</code> loop.</li>\n\
        <li>The difference is that the <code>repeat until</code> loop stops when a specific condition is met instead of repeating while a condition is met.</li>\n\
        <li>You can represent the same logical control with either format, so it is your choice which one you use, but sometimes one is more natural than the other.</li>\n\
        <span class=\"title\">Try it!</span>\n\
        <div class =\"task\"><p>Output the even numbers by changing line 2 to: <code>repeat until evenNumber > 10</code>, then hit Run</p></div>\n\
        </ul>";

    slideArray[4] = "<h5 class=\"slideHeader\"role=\"heading\">Control Structures: Additional Information</h5>\n\
        <ul>\n\
        <li>More documentation on <code>repeat</code> can be found <a href=\"http://quorumlanguage.com/documents/syntax/repeat.php\">here</a>.</li>\n\
        </ul>";

    return slideArray;
}

function part5Slides() {
    //slide array
    var slideArray = [];
    slideArray[0] = "<h5 class=\"slideHeader\"role=\"heading\">Putting It All Together</h5>\n\
        <ul>\n\
        <li>We've learned quite a bit up to this point and now it's time use all of our new skills to write a program that will detect if a number is even or odd.</li>\n\
        <li>We are going to test a range of numbers, so we need to loop from a starting number to a stopping number.</li>\n\
        <span class=\"title\">Try it!</span>\n\
        <div class =\"task\"><p>First create a number variable called <code>testNumber</code> and set it to your starting number.<br>Next, set up a repeat loop using <code>repeat until</code> and for the condition specify the number to stop at.<br>Finally, don't forget to include <code>end</code> to mark the end of the loop. Move on to the next slide when you're done.</p></div>\n\
        </ul>";

    slideArray[1] = "<h5 class=\"slideHeader\"role=\"heading\">Implementing the Logic: Part 1</h5>\n\
        <ul>\n\
        <li>Now that we have the <code>repeat</code> loop set up, we need to complete the code block to repeat inside the loop.</li>\n\
        <li>We will use the modulus operator <code>mod</code> to determine if a number is even or odd. Remember that the modulus operator returns the remainder when dividing two numbers, so any even number divided by two will have a remainder of 0 and any odd number will have a remainder of 1.</li>\n\
        <span class=\"title\">Try it!</span>\n\
        <div class =\"task\"><p>Create an <code>if</code> statement inside the <code>repeat</code> loop checking the modulus of the variable:<br><code>if testNumber mod 2 = 0</code><br><code>end</code> <code>end</code>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(Then move to the next slide).</div>\n\
        </ul>";

    slideArray[2] = "<h5 class=\"slideHeader\"role=\"heading\">Implementing the Logic: Part 2</h5>\n\
        <ul>\n\
        <li>Our <code>if</code> statement is now set up for even numbers.  If we want alternative instructions to run if the number is odd, we need some kind of <code>else</code> condition as well.</li>\n\
        <li>Since there are only two possibilities (even or odd), we can use the simple default <code>else</code> statement here.</li>\n\
        <span class=\"title\">Try it!</span>\n\
        <div class =\"task\"><p>Before the <code>end</code> in the <code>if</code> statement, insert a line with <code>else</code> to set up the block for odd numbers.<br>\n\
Now, to increment our testing variable by one on each pass of the loop, insert a line <code>testNumber = testNumber + 1</code> just after the end of the <code>if</code> block.&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(Then move to the next slide)</p></div>\n\
        </ul>";

    slideArray[3] = "<h5 class=\"slideHeader\"role=\"heading\">Being Creative</h5>\n\
        <ul>\n\
        <li>So now we have a logical code structure set up to execute different instructions if a number is even or if it is odd inside a repeat loop that will test a range of numbers.</li>\n\
        <li>All we need to do now is write some instructions inside the code blocks!</li>\n\
        <li>For this example, let's just use an <code>output</code> statement to print a message depending on whether the number is even or odd. You can also try a <code>say</code> statement if you want to hear it. Try something like <code>output testNumber + \" is even.\"</code> in the first block and then Run it.</li>\n\
        <li>The next slide has the full code for this section...experiment with other ideas yourself.</li>\n\
        </ul>";

    slideArray[4] = "<h5 class=\"slideHeader\"role=\"heading\">Example Code</h5><p class =\"code\">number testNumber = 0<br>\n\
        repeat until testNumber = 10<br>\n\
        &nbsp&nbsp&nbsp&nbsp if testNumber mod 2 = 0<br>\n\
        &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp output testNumber + \" is even\"<br>\n\
        &nbsp&nbsp&nbsp&nbsp else<br>\n\
        &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp output testNumber + \" is odd\"<br>\n\
        &nbsp&nbsp&nbsp&nbsp end<br>\n\
        &nbsp&nbsp&nbsp&nbsp testNumber = testNumber + 1<br>\n\
        end</p><br>\n\
        <ul><li>Mary's full version of the clothing picker can be found <a href=\"projects/clothing_picker.zip\">here</a>.</li></ul>";
    return slideArray;
}

function part6Slides() {
    var slideArray = [];
    slideArray[0] = "<h5 class=\"slideHeader\"role=\"heading\">Actions</h5>\n\
        <ul>\n\
        <li>Often times inside a program, we want to run the same code sections many times in different places. We usually want to eliminate this duplicate code to save time, reduce errors and make things easier to change.</li>\n\
        <li>We do this by writing procedures that we call whenever we want code to run.  In Quorum, these are called actions.</li>\n\
        <li>You didn't realize it, but we have already been using an action called <code>Main</code>. The computer always starts running our program from our <code>Main</code> action.  We haven't had to use it so far, because Quorum automatically puts our code inside a <code>Main</code> action if we don't use any other actions.</li>\n\
        <li>Now that we are going to use other actions though, we always need to include it.</li>\n\
</ul>";

    slideArray[1] = "<h5 class=\"slideHeader\"role=\"heading\">Creating Actions: Part 1</h5>\n\
        <ul>\n\
        <li>In Quorum to create an action, we use the keyword <code>action</code> followed by the name of the action.  We usually capitalize the first letter of an action name, but it is not required. Naming rules for actions are the same as variables, it must start with a letter.</li>\n\
        <li>Since we are going to have a code block inside the action, we also need to include an <code>end</code> to mark where the action ends.</li>\n\
        <span class=\"title\">Try it!</span><div class =\"task\"><p>Lets start a new program by creating a Main action:<br>\n\
        <code>action Main</code><br>\n\
        <code>end</code> (then move to the next slide)</p>\n\
        </div>\n\
        </ul>";

    slideArray[2] = "<h5 class=\"slideHeader\"role=\"heading\">Creating Actions: Part 2</h5>\n\
        <ul>\n\
        <li>You can put any type of code that you've learned so far inside the <code>Main</code> action or call other actions from it.</li>\n\
        <li>We are going to create another action now that we will call from the <code>Main</code> action.</li>\n\
        <li>To do this, just create a new action after the <code>end</code> statement of the <code>Main</code> action.</li>\n\
            <span class=\"title\">Try it!</span><div class =\"task\"><p>Create an action called <code>PrintMsg</code> after the <code>Main</code> action:<br>\n\
        <code>action PrintMsg</code>.<br>\n\
        <code>end</code> (then move to the next slide).</p></div>\n\
        </ul>";

    slideArray[3] = "<h5 class=\"slideHeader\"role=\"heading\">Creating Actions: Part 3</h5>\n\
        <ul>\n\
        <li>At the moment, we have two actions in our program, but no code to run inside the actions.  We'll learn how to call an action in a moment, but first, let's write some code inside the <code>PrintMsg</code> action. </li>\n\
        <li>To keep our example simple, we are going to write a simple output message to the screen.</li>\n\
        <span class=\"title\">Try it!</span>\n\
        <div class =\"task\"><p>Insert an <code>output</code> statement inside the <code>PrintMsg</code> action:<br>\n\
        <code>output \"Programming in Quorum is fun!\"</code><br>(then move to the next slide)</div></p>\n\
        </ul>";
 
    slideArray[4] = "<h5 class=\"slideHeader\"role=\"heading\">Calling Actions</h5>\n\
        <ul>\n\
        <li>Now, in order to complete this program we need to call our <code>PrintMsg</code> action from our <code>Main</code> action so that it will execute.</li>\n\
        <li>In Quorum, this is very easy to do, we just insert a line of code in the <code>Main</code> action that redirects the computer to the other action.  We do this adding the line <code>PrintMsg()</code> to the <code>Main</code> action.</li>\n\
        <li>The parentheses are necessary after the action name to notify the computer that it should run an action.</li>\n\
        <span class=\"title\">Try it!</span>\n\
        <div class =\"task\"><p>Call <code>PrintMsg</code> from <code>Main</code>:<br>\n\
        <code>PrintMsg()</code> (then Run your code).</p></div>\n\
        </ul>";

    slideArray[5] = "<h5 class=\"slideHeader\"role=\"heading\">Actions: More Information</h5>\n\
        <ul>\n\
        <li>Here is our full example:<br>\n\
        <p class=\"code\"> action Main<br>\n\
        &nbsp&nbsp&nbsp&nbsp PrintMsg()<br>\n\
        end<br><br>\n\
        action PrintMsg<br>\n\
        &nbsp&nbsp&nbsp&nbsp output \"Programming in Quorum is Fun!\"<br>\n\
        end</p>\n\</li>\n\<li>Actions are an important and useful concept in programming, but we've only covered the basics so far. You can also do things like pass variables to an action and return values from an action.</li>\n\
        <li>For more information on actions, click <a href=\"http://quorumlanguage.com/documents/syntax/actions.php\">here</a></li>\n\
        <li>Mary's project covering actions can be found <a href=\"projects/actions_and_classes.zip\">here</a>.</li>\n\
        </ul>";
    return slideArray;
}

function part7Slides() {
     //slide array
    var slideArray = [];
    slideArray[0] = "<h5 class=\"slideHeader\"role=\"heading\">Hour of Code Review - Variables</h5>\n\
        <ul>\n\
        <li>Variables are containers for information.</li>\n\
        <li>To create a variable, declare the type of the variable followed by the name.</li>\n\
        <li>To assign a value into a variable, use the <code>=</code> operator.</li>\n\
        <li>There are four main types of variables in Quorum, each for specific kinds of data:<br>\n\
        &nbsp&nbsp&nbsp&nbsp<code>text</code> for any number of characters<br>\n\
        &nbsp&nbsp&nbsp&nbsp<code>integer</code> for positive and negative whole numbers<br>\n\
        &nbsp&nbsp&nbsp&nbsp<code>number</code> for values with a demical point<br>\n\
        &nbsp&nbsp&nbsp&nbsp<code>boolean</code> for true or false values.</li>\n\
        <li>When creating a variable name, always start it with a letter (usually lower case, but this is not required).</li>\n\
        <li>More information on variables can be found <a href=\"http://quorumlanguage.com/documents/syntax/types.php\">here</a>.</li>\n\
        </ul>";
    
    slideArray[1] = "<h5 class=\"slideHeader\"role=\"heading\">Hour of Code Review - Output/Say Statements</h5>\n\
        <ul>\n\
        <li>An <code>output</code> statement will print text on the screen.</li>\n\
        <li>A <code>say</code> statements will instruct the computer to speak the expression aloud.</li>\n\
        <li>Note that some browsers do not support the <code>say</code> feature in Quorum's online mode.</li>\n\
        </ul>";
    
    slideArray[2] = "<h5 class=\"slideHeader\"role=\"heading\">Hour of Code Review - If Statements</h5>\n\
        <ul>\n\
        <li>Use an <code>if</code> statement to have the computer decide whether or not to run certain code.</li>\n\
        <li>An <code>if</code> statement requires a condition to be evaluated (variable > 5, variable = 5, etc.) and an <code>end</code> statement to mark the end of the code block.</li>\n\
        <li>An <code>if</code> statement can optionally contain an <code>elseif</code> statement to test another condition or a default <code>else</code> statement (or both) to handle any other possibility not listed.</li>\n\
        <li>More information on <code>if</code> statements can be found <a href=\"http://quorumlanguage.com/documents/syntax/if.php\">here</a>.</li>\n\
        </ul>";
    
    slideArray[3] = "<h5 class=\"slideHeader\"role=\"heading\">Hour of Code Review - Repeat</h5>\n\
        <ul>\n\
        <li>When we want to run a section of code repeatedly, we use a <code>repeat</code> statement to create a loop.</li>\n\
        <li>Like an <code>if</code> statement, a <code>repeat</code> statement requires a condition for stopping and an <code>end</code> statement.</li>\n\
        <li>We specify the condition for stopping the loop by using one of these formats: <br>\n\
        <code>repeat {number} times</code>,<br>\n\
        <code>repeat while {condition}</code> or <br>\n\
        <code>repeat until {condition}</code>.</li>\n\
        <li>More information on repeat loops can be found <a href=\"http://quorumlanguage.com/documents/syntax/repeat.php\">here</a>.</li>\n\
        </ul>";
    
    slideArray[4] = "<h5 class=\"slideHeader\"role=\"heading\">Hour of Code Review - Actions</h5>\n\
        <ul>\n\
        <li>Actions are used to reduce the amount of duplicate code in a program and to make it easier to read.</li>\n\
        <li>To create an action, use the keyword <code>action</code> followed by the action's name, which usually starts with a capital letter.</li>\n\
        <li>The computer always starts executing a program at the <code>Main</code> action, but if the program has only one action, Quorum will automatically insert the program code into a <code>Main</code> action.</li>\n\
        <li>If a program has actions besides <code>Main</code>, the action <code>Main</code> must be defined somewhere in the program.</li>\n\
        <li>To execute an action at a particular point in the program, type the name of the action followed by parentheses.</li>\n\
        <li>More information on actions can be found <a href=\"http://quorumlanguage.com/documents/syntax/actions.php\">here</a></li>\n\
        </ul>";
    return slideArray;
}

function trapEscapeKey(obj, evt) {
    // if escape pressed
    if (evt.which == 27) {
        hideModal();
        evt.preventDefault();
    }
}

function trapTabKey(obj, evt) {
    // if tab or shift-tab pressed
    if (evt.which == 9) {

        // get list of all children elements in given object
        var o = obj.find('*');

        // get list of focusable items
        var focusableItems;
        focusableItems = o.filter(focusableElementsString).filter(':visible')

        // get currently focused item
        var focusedItem;
        focusedItem = jQuery(':focus');

        // get the number of focusable items
        var numberOfFocusableItems;
        numberOfFocusableItems = focusableItems.length

        // get the index of the currently focused item
        var focusedItemIndex;
        focusedItemIndex = focusableItems.index(focusedItem);

        if (evt.shiftKey) {
            //back tab
            // if focused on first item and user preses back-tab, go to the last focusable item
            if (focusedItemIndex == 0) {
                focusableItems.get(numberOfFocusableItems - 1).focus();
                evt.preventDefault();
            }

        } else {
            //forward tab
            // if focused on the last item and user preses tab, go to the first focusable item
            if (focusedItemIndex == numberOfFocusableItems - 1) {
                focusableItems.get(0).focus();
                evt.preventDefault();
            }
        }
    }
}


function showModal(obj) {
    jQuery('#mainPage').attr('aria-hidden', 'true'); // mark the main page as hidden
    jQuery('#modalOverlay, #noCodeModalContent').css('display', 'block'); // insert an overlay to prevent clicking and make a visual change to indicate the main page is not available
    jQuery(obj).css('display', 'block'); // make the modal window visible
    jQuery(obj).attr('aria-hidden', 'false'); // mark the modal window as visible

    // save current focus
    focusedElementBeforeModal = jQuery(':focus');

    // get list of all children elements in given object
    var o = obj.find('*');

    // Safari and VoiceOver shim
    // if VoiceOver in Safari is used, set the initial focus to the modal window itself instead of the first keyboard focusable item. This causes VoiceOver to announce the aria-labelled attributes. Otherwise, Safari and VoiceOver will not announce the labels attached to the modal window.

    // set the focus to the first keyboard focusable item
    o.filter(focusableElementsString).filter(':visible').first().focus();
}

function hideModal() {
    console.log("Hiding modal");
    jQuery('#modalOverlay, #noCodeModal, #noCodeModalContainer, #signInModalContainer, #signUpModalContainer').css('display', 'none'); // remove the overlay in order to make the main screen available again
    jQuery('#modal, #noCodeModalContent').css('display', 'none'); // hide the modal window
    jQuery('#modal, #noCodeModalContent, #noCodeModal').attr('aria-hidden', 'true'); // mark the modal window as hidden
    jQuery('#mainPage').attr('aria-hidden', 'false'); // mark the main page as visible

    // set focus back to element that had it before the modal was opened
    focusedElementBeforeModal.focus();
}

function feedbackMessageOn(content) {
    $('#feedbackMessage').text(content);
    $('#feedbackMessage').attr("aria-hidden", "false");
    $('#feedbackMessage').removeClass("off");
}

function feedbackMessageOff(aMsg) {

    $('#feedbackMessage').text("");
    $('#feedbackMessage').attr("aria-hidden", "true");
    $('#feedbackMessage').addClass("off");
}

function alertMessageOn(content) {
    $('#alertMessage').text(content);
    $('#alertMessage').attr("aria-hidden", "false");
    $('#alertMessage').removeClass("off");
}

function alertMessageOff(aMsg) {
    if (aMsg && aMsg.length > 0 ){
        if ($('#alertMessage').text() === aMsg) {
            $('#alertMessage').text("");
            $('#alertMessage').attr("aria-hidden", "true");
            $('#alertMessage').addClass("off");
        }
    }
    else {
        $('#alertMessage').text("");
        $('#alertMessage').attr("aria-hidden", "true");
        $('#alertMessage').addClass("off");
    }
}

function registrationSubmit() {
    var user = $('#userNameInput').val();
    var firstname = $('#firstNameInput').val();
    var lastname = $('#lastNameInput').val();
    var email = $('#emailInput').val();
    var birthday = $('#birthdayInput').val();
    var password = $('#passwordEnterInput').val();
    var confirmPassword = $('#confirmPasswordInput').val();
    
    if (user === '') {
        alertMessageOn("Username required!");
        $('#userNameInput').addClass("inputWarn");
        $('#userNameInput').attr("aria-invalid", "true");
    } else if (firstname === '') {
        alertMessageOn("First Name required!");
        $('#firstNameInput').addClass("inputWarn");
        $('#firstNameInput').attr("aria-invalid", "true");
    } else if (lastname === '') {
        alertMessageOn("Last Name required!");
        $('#lastNameInput').addClass("inputWarn");
        $('#lastNameInput').attr("aria-invalid", "true");
    } else if (email === '' || email.indexOf('@') < 0) {
        alertMessageOn("Email required!");
        $('#emailInput').addClass("inputWarn");
        $('#emailInput').attr("aria-invalid", "true");
    } else if (birthday === '' || !checkBirthday(birthday)) {
        alertMessageOn("Birthday required!");
        $('#birthdayInput').addClass("inputWarn");
        $('#birthdayInput').attr("aria-invalid", "true");
    } else if (password === '' ) {
        alertMessageOn("Password required!");
        $('#passwordEnterInput').addClass("inputWarn");
        $('#passwordEnterInput').attr("aria-invalid", "true");
    } else if (confirmPassword === '' ) {
        alertMessageOn("Confirm Password required!");
        $('#passwordConfirmInput').addClass("inputWarn");
        $('#passwordConfirmInput').attr("aria-invalid", "true");
    } else if (confirmPassword != password ) {
        alertMessageOn("Passwords entered are not equal!");
        $('#passwordConfirmInput').addClass("inputWarn");
        $('#passwordConfirmInput').attr("aria-invalid", "true");
    } else {
        // Cleanup
        alertMessageOff();
        feedbackMessageOff();
        $('#userNameInput').attr("aria-invalid", "false");
        $('#userNameInput').removeClass("inputWarn");
        $('#firstNameInput').removeClass("inputWarn");
        $('#firstNameInput').attr("aria-invalid", "false");
        $('#lastNameInput').removeClass("inputWarn");
        $('#lastNameInput').attr("aria-invalid", "false");
        $('#emailInput').removeClass("inputWarn");
        $('#emailInput').attr("aria-invalid", "false");
        $('#birthdayInput').removeClass("inputWarn");
        $('#birthdayInput').attr("aria-invalid", "false");
        $('#passwordConfirmInput').removeClass("inputWarn");
        $('#passwordConfirmInput').attr("aria-invalid", "false");
        $('#passwordEnterInput').removeClass("inputWarn");
        $('#passwordEnterInput').attr("aria-invalid", "false");
        
        /*
    $user_name = $_POST['username'];
    $user_pass = $_POST['password'];
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $birthday = $_POST['birthday'];
    $confirm_pass = $_POST['confirm_password'];
         */
        
        $.ajax({
            type: "POST",
            url: "/register.php",
            data: {username: user, password: password, first_name: firstname, last_name: lastname, email: email, birthday: birthday, confirm_password: confirmPassword},
            success: function (result) {
                // might need change for if condition
                if (result === "success") {
                   feedbackMessageOn("Your account was successfully created!");
                   loginWithParams(user, password, "https://quorumlanguage.com");
                } else {
                   alertMessageOn(result);
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert("I could not connect to the server at quorumlanguage.com: " + xhr.status + ", " + xhr.responseText + ", " + thrownError);
            }
        });
    }
}

function checkBirthday(date) {
    // Only provides weak validation, requires stronger validation in PHP after.
    // Allows for erroneous dates like "02/31/2000".
    var pattern = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    return pattern.test(date);
}

function forgotPasswordClick() {
    var email = $('#emailInput').val();
    
    if (email === '') {
        alertMessageOn("Email required!");
        $('#emailInput').addClass("inputWarn");
        $('#emailInput').attr("aria-invalid", "true");
    } else {
        // Cleanup
        alertMessageOff();
        feedbackMessageOff();
        $('#emailInput').attr("aria-invalid", "false");
        $('#emailInput').removeClass("inputWarn");

        $.ajax({
            type: "POST",
            url: "/request_password_reset.php",
            data: {email: email},
            success: function (result) {
                // might need change for if condition
                if (result === "An email has been sent to this address. Please check your email and follow the instructions to reset your account password.") {
                   feedbackMessageOn(result);
                } else {
                   alertMessageOn(result);
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert("I could not connect to the server at quorumlanguage.com: " + xhr.status + ", " + xhr.responseText + ", " + thrownError);
            }
        });
    }
}

function resetPasswordClick() {
    var password = $('#passwordEnterInput').val();
    var passwordConfirm = $('#confirmPasswordInput').val();
    var hiddenKey = $('#hidden_reset_key').val();

    if (password === '' ) {
        alertMessageOn("Password required!");
        $('#passwordEnterInput').addClass("inputWarn");
        $('#passwordEnterInput').attr("aria-invalid", "true");
    } else if (passwordConfirm === '' ) {
        alertMessageOn("Confirm Password required!");
        $('#passwordConfirmInput').addClass("inputWarn");
        $('#passwordConfirmInput').attr("aria-invalid", "true");
    } else if (passwordConfirm != password ) {
        alertMessageOn("The new password and confirm password fields must match.");
        $('#passwordConfirmInput').addClass("inputWarn");
        $('#passwordConfirmInput').attr("aria-invalid", "true");
    } else {
        // Cleanup
        alertMessageOff();
        feedbackMessageOff();
        $('#passwordConfirmInput').removeClass("inputWarn");
        $('#passwordConfirmInput').attr("aria-invalid", "false");
        $('#passwordEnterInput').removeClass("inputWarn");
        $('#passwordEnterInput').attr("aria-invalid", "false");

        $.ajax({
            type: "POST",
            url: "/confirm_reset_password.php",
            data: {reset_password: password, confirm_reset_password: passwordConfirm, pagekey: hiddenKey},
            success: function (result) {
                // might need change for if condition
                if (result === "Password successfully reset. You may now close this page and log in to the website.") 
                {
                   feedbackMessageOn(result);
                } else {
                   alertMessageOn(result);
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert("I could not connect to the server at quorumlanguage.com: " + thrownError);
            }
        });
    }

}


function checkValidityEmail(aID, aMsg)
 {
   var elem = $('#' + aID )
   var invalid = (elem.val().indexOf('@') < 0) ;
   if (invalid) {
     elem.attr("aria-invalid", "true");
     alertMessageOn(aMsg);
     elem.addClass("inputWarn");
   } else {
     elem.attr("aria-invalid", "false");
     elem.removeClass("inputWarn");
     alertMessageOff(aMsg);
   }
 }

function checkValidityExists(aID, aMsg)
 {
   var elem = $('#' + aID);
   var invalid = (elem.val().length === 0);
   if (invalid) {
     elem.attr("aria-invalid", "true");
     alertMessageOn(aMsg);
     elem.addClass("inputWarn");
   } else {
     elem.attr("aria-invalid", "false");
     elem.removeClass("inputWarn");
     alertMessageOff(aMsg);
   }
 }

function checkValidityDate(aID, aMsg)
 {
   var elem = $('#' + aID );
   var invalid = !checkBirthday(elem.val());
   if (invalid) {
     elem.attr("aria-invalid", "true");
     alertMessageOn(aMsg);
     elem.addClass("inputWarn");
    } else {
     elem.attr("aria-invalid", "false");
     elem.removeClass("inputWarn");
     alertMessageOff(aMsg);
   }
 }

function checkConfirmPassword() {
   var elem = $('#confirmPasswordInput');
   var aMsg = "Passwords entered are not equal!";
   var password = $('#passwordEnterInput'); 
   var invalid = elem.val() != password.val();
   if (invalid) {
     elem.attr("aria-invalid", "true");
     alertMessageOn(aMsg);
     elem.addClass("inputWarn");
   } else {
     elem.attr("aria-invalid", "false");
     elem.removeClass("inputWarn");
     alertMessageOff(aMsg);
   }
}

// Remove a row from the profile project table.
function deleteRow(button) 
{
    if (confirm("Are you sure you want to permanently delete " + button.value + "?"))
    {
        $.ajax({
            type: "POST",
            url: "/delete_project.php",
            data: {file: button.value},
            success: function (result) 
            {
                if (result === "success")
                {
                    var row = button.parentNode.parentNode;
                    row.parentNode.removeChild(row);
                }
                else
                {
                    alert("There was an error while deleting this project: " + result);
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert("I could not connect to the server at quorumlanguage.com: " + thrownError);
            }
        });
    }
}
