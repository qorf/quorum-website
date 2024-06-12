var currentIDEInput_$Global_ = '';
var currentIDEOutput_$Global_ = 'frontPageIdeOutput';
// var currentUIContainer_$Global_ = 'QuorumUIContainer';
var currentUIContainer_$Global_ = undefined;
var total_console_length239847239482734 = 0;

var slideNr = 0;

$(document).ready(function() {
  // add a click handler to all links 
  // that point to same-page targets (href="#...")		
  $("a[href^='#']").click(function() {
    // get the href attribute of the internal link
    // then strip the first character off it (#)
    // leaving the corresponding id attribute
    $("#" + $(this).attr("href").slice(1) + "")
      // give that id focus (for browsers that didn't already do so)
      .focus()
    // add a highlight effect to that id (comment out if not using)			
    //.effect("highlight", {}, 3000);
  });
  $.ajax({
    type: "GET",
    url: "/SessionValid.quorum",
    success: function(result) {
      if (result === "success") {
        showLogoutUI();
      } else {
        showLoginUI();
      }
    }
  });

  document.addEventListener("keydown", function(event) {
    if ((event.key === "Escape" || event.keyCode === 27)) {
      hideModals();
    }
  });

  // sign in modal keyboard navigation
  document.getElementById('usernameInput').addEventListener("keydown", function(event) {
    if (event.shiftKey && (event.key === "Tab" || event.keyCode === 9) && document.getElementById('loginModal').style.display !== 'none') {
      document.getElementById('registerAccountLink').focus();
      event.preventDefault();
    }
  });

  document.getElementById('submitSignInForm').addEventListener("keydown", function(event) {
    if (!event.shiftKey && (event.key === "Tab" || event.keyCode === 9) && document.getElementById('loginModal').style.display !== 'none') {
      document.getElementById('closeSignInModal').focus();
      event.preventDefault();
    }
  });

  document.getElementById('closeSignInModal').addEventListener("keydown", function(event) {
    if (!event.shiftKey && (event.key === "Tab" || event.keyCode === 9) && document.getElementById('loginModal').style.display !== 'none') {
      document.getElementById('usernameInput').focus();
      event.preventDefault();
    }
  });
  //forgot password modal keyboard navigation
  document.getElementById('emailForgotInput').addEventListener("keydown", function(event) {
    if (event.shiftKey && (event.key === "Tab" || event.keyCode === 9) && document.getElementById('forgotPasswordModal').style.display !== 'none') {
      document.getElementById('registerAccountLink').focus();
      event.preventDefault();
    }
  });

  document.getElementById('submitForgotPasswordForm').addEventListener("keydown", function(event) {
    if (!event.shiftKey && (event.key === "Tab" || event.keyCode === 9) && document.getElementById('forgotPasswordModal').style.display !== 'none') {
      document.getElementById('closeForgotPasswordModal').focus();
      event.preventDefault();
    }
  });

  document.getElementById('closeForgotPasswordModal').addEventListener("keydown", function(event) {
    if (!event.shiftKey && (event.key === "Tab" || event.keyCode === 9) && document.getElementById('forgotPasswordModal').style.display !== 'none') {
      document.getElementById('emailForgotInput').focus();
      event.preventDefault();
    }
  });

  //Create An Account modal keyboard navigation
  document.getElementById('userNameInput').addEventListener("keydown", function(event) {
    if (event.shiftKey && (event.key === "Tab" || event.keyCode === 9) && document.getElementById('signUpModal').style.display !== 'none') {
      document.getElementById('registerAccountLink').focus();
      event.preventDefault();
    }
  });

  document.getElementById('submitRegistrationForm').addEventListener("keydown", function(event) {
    if (!event.shiftKey && (event.key === "Tab" || event.keyCode === 9) && document.getElementById('signUpModal').style.display !== 'none') {
      document.getElementById('closeSignUpModal').focus();
      event.preventDefault();
    }
  });

  document.getElementById('closeSignUpModal').addEventListener("keydown", function(event) {
    if (!event.shiftKey && (event.key === "Tab" || event.keyCode === 9) && document.getElementById('signUpModal').style.display !== 'none') {
      document.getElementById('userNameInput').focus();
      event.preventDefault();
    }
  });

  $('#passwordEnterInput, #confirmPasswordInput').on('oninput', function() {
    checkConfirmPassword();
    checkRegistrationFieldsValidity();
  });


  $('#submitRegistrationForm').prop('disabled', true);

  //end login modal keyboard navigations

  $(".loadcancelbtn").keydown(function(event) {
    if (!event.shiftKey && (event.key === "Tab" || event.keyCode === 9) && document.getElementById(lastModalID + 'LoadModal').style.display === 'block') {
      var prefix = this.dataset.prefix;
      document.getElementById(prefix + 'LoadProjectSelect').focus();
      event.preventDefault();
    }
  });

  $(".loadProjectSelect").keydown(function(event) {
    if (event.shiftKey && (event.key === "Tab" || event.keyCode === 9) && document.getElementById(lastModalID + 'LoadModal').style.display === 'block') {
      var prefix = this.dataset.prefix;
      document.getElementById(prefix + 'LoadProjectCancel').focus();
      event.preventDefault();
    }
  });

  $(".savecancelbtn").keydown(function(event) {
    if (!event.shiftKey && (event.key === "Tab" || event.keyCode === 9) && document.getElementById(lastModalID + 'SaveModal').style.display === 'block') {
      var prefix = this.dataset.prefix;
      document.getElementById(prefix + 'projectNameInput').focus();
      event.preventDefault();
    }
  });

  $(".SaveField").keydown(function(event) {
    if (event.shiftKey && (event.key === "Tab" || event.keyCode === 9) && document.getElementById(lastModalID + 'SaveModal').style.display === 'block') {
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

function hideModals() {
  if (document.getElementById('loginModal').style.display === 'block') {
    hideLoginModal();
  }

  var saveModal = document.getElementById(lastModalID + 'SaveModal');
  if (saveModal != null && saveModal.style.display === 'block') {
    hideSaveModal(lastModalID);
  }

  var loadModal = document.getElementById(lastModalID + 'LoadModal');
  if (loadModal != null && loadModal.style.display === 'block') {
    hideLoadModal(lastModalID);
  }
}

$(function() {
  changeCodeExample();
  submitCode();
});

var downloadQuorumStudioBeta = function() {
  $.ajax({
    type: "POST",
    url: "/downloadStudioBeta.php",
    data: { os: detectOperatingSystem() },
    success: function(result) {
      if (result === "") {
        alertMessageOff("");
      } else {
        alertMessageOn(result);
      }
    },
    error: function(xhr, ajaxOptions, thrownError) {
      alertMessageOn("I could not connect to the server at quorumlanguage.com: " + thrownError);
    }
  });
};

// Detect what operating system the user is on. Not guaranteed 100% accurate.
function detectOperatingSystem() {
  // Approach to test operating system is from this post:
  // https://stackoverflow.com/questions/38241480/detect-macos-ios-windows-android-and-linux-os-with-js

  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  }
  else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  }
  else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  }
  else if (/Android/.test(userAgent)) {
    os = 'Android';
  }
  else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }
  else {
    // If we can't identify it broadly, we can at least return the raw platform value to be evaluated by the caller.
    os = platform;
  }

  return os;
}

function showLoginUI() {
  $("#loginButton").text("Login");
  let liItem = document.getElementById('profileButton').parentElement
  liItem.classList.add("hidden");
  liItem.classList.remove("block");
}

function showLogoutUI() {
  $("#loginButton").text("Logout");
  let liItem = document.getElementById('profileButton').parentElement
  liItem.classList.add("block");
  liItem.classList.remove("hidden");
}

//Front page IDE dropdown menu
var changeCodeExample = function() {
  $("#frontPageIdeDropDownMenu").change(function() {
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
    else if (selection == "Audio") {
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
var submitCode = function() {
  $("button[id$='IdeButton']").on("click", function(e) {
    console.log("Normal Setup");
    e.preventDefault();
    var target = e.target.id.slice(0, -9); //takes off "IdeButton" from the id
    $('#' + target + 'IdeOutput').text("");
    var pageURL = window.location.href;
    var tempCode = $('#' + target + 'IdeInput').val();
    let outputRegion = document.getElementById(target + "IdeOutput")
    currentIDEOutput_$Global_ = target + 'IdeOutput';
    if (tempCode == "") {
      showModal($('#noCodeModalContainer')); //the root element of the modal
    } else {
      var codeData = { code: tempCode };
      $.ajax({
        type: "GET",
        url: "/proxy.php",
        data: codeData,
        success: function(result) {
          outputRegion.innerHTML = "";
          OuTpUt_$tRiNg_ = "";
          let head = document.getElementsByTagName('head')[0];
          let run = document.getElementById("Runnable");
          if (run != null) {
            Stop();
            head.removeChild(run);
          }
          total_console_length239847239482734 = 0;
          length = 0;

          if (result.startsWith("<div class=")) {
            outputRegion.innerHTML = result;
          } else if (result.startsWith("Failed to connect")) {
            outputRegion.innerHTML = "I could not connect to the server at quorumlanguage.com"
          } else {
            var script = document.createElement('script');
            script.id = "Runnable";
            script.innerHTML = result;
            head.appendChild(script);
            Start();
          }
          completedcheck = checkOutputGeneral(OuTpUt_$tRiNg_);
          var reportData = { code: tempCode, uuid: 0/*id*/, pagenumber: 0/*pageNumber*/, slidenumber: 0/*slideNr*/, resultCode: result, completed: 0/*completedcheck*/, pageurl: pageURL, gacookie: 0/*ga_cookie*/ };
          $.ajax({
            type: "POST",
            url: "/quorum_logger.php",
            data: reportData,
            success: function(result) {
              console.log("Logged Result " + result);
            },
            error: function(xhr, ajaxOptions, thrownError) {
              console.log(xhr, ajaxOptions, thrownError);
            }
          });
        },
        error: function(xhr, ajaxOptions, thrownError) {
          $('#' + target + 'IdeOutput').html("Error: Could not connect to server: " + thrownError.toString());
          var reportData = { code: tempCode, uuid: 0/*id*/, pagenumber: 0/*pageNumber*/, slidenumber: 0/*slideNr*/, resultCode: result, completed: 0/*completedcheck*/, pageurl: pageURL, gacookie: 0/*ga_cookie*/ };
          $.ajax({
            type: "POST",
            url: "/quorum_logger.php",
            data: reportData,
            success: function(result) {
              console.log("Logged Result " + result);
            },
            error: function(xhr, ajaxOptions, thrownError) {
              console.log(xhr, ajaxOptions, thrownError);
            }
          });
        }
      });
    }
  });
};

function createSession(session, username) {
  var postData = { session: session, username: username };
  $.ajax({
    type: "POST",
    url: "/create_session.php",
    data: postData,
    success: function(result) {
      return result;
    },
  });
}

var keyboardInputShortcuts = function(event, input, output, uiContainer) {
  var key = event.keyCode;
  var active = event.getModifierState("Control");
  //CTRL + R, run a program
  if (key === 82 && active) {
    newRunCode(input, output, uiContainer, true);
  } else if (key === 66 && active) {
    newRunCode(input, output, uiContainer, false);
  }
};

//IDE stop program button action
var stopProgram = function(uiContainer = null) {
  //prevent errors if nothing has been built yet
  let run = document.getElementById("Runnable");
  if (run != null) {
    head.removeChild(run);
    if (typeof Stop === "function") {
      Stop();
    }
    if (uiContainer != null && uiContainer.id === "QuorumUIContainer") {
      let medias = window.matchMedia("(max-width: 1280px)");
      if(medias.matches) {
        uiContainer.display = "none";
      }
    }
    
  }
  
}

var editAreaUpdate = function(element) {
  let text = element.value;
  let result_element = element.parentElement.querySelector(".highlighting-content");
  if (text[text.length - 1] == "\n") {
    text += " ";
  }
  var lines = text.split(/\r|\r\n|\n/);
  var count = lines.length;
  if (count != lines) {
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

  for (let i = 0; i < numLines; i++) {
    lineNumbers += (i + 1) + '\n';
  }

  lineNumbersArea.value = lineNumbers;
};

//IDE submit button action
var newRunCode = function(input, output, uiContainer, execute) {
  // Attempt to stop previously running programs on this page first.
  stopProgram();

  // UPDATE WHEN IDE HAS MULTIPLE FILES
  var codeInput = document.getElementById(input).querySelector(".ideEditing").value;
  // ------
  var outputRegion = document.getElementById(output);

  var pageURL = window.location.href;
  var ideName = input.replace("IdeInput", "");
  let button = execute ? 0 : 1;
  let tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  currentIDEInput_$Global_ = input;
  currentIDEOutput_$Global_ = output;
  currentUIContainer_$Global_ = uiContainer;
  var codeData = { code: codeInput, pageURL: pageURL, ideName: ideName, build_only: button, timezone: tz };
  $.ajax({
    type: "POST",
    url: "/Fastrun.quorum",
    data: codeData,
    success: function(result) {
      outputRegion.innerHTML = "";
      OuTpUt_$tRiNg_ = "";
      var head = document.getElementsByTagName('head')[0];
      var run = document.getElementById("Runnable");
      if (run != null) {
        head.removeChild(run);
      }
      total_console_length239847239482734 = 0;

      if (result.startsWith("<div class=")) {
        outputRegion.innerHTML = result;
      } else if (result.startsWith("Failed to connect")) {
        outputRegion.innerHTML = "I could not connect to the server at quorumlanguage.com"
      } else {
        outputRegion.innerHTML = "Build Successful<br/>";
        if (execute === true) {
          var script = document.createElement('script');
          script.id = "Runnable";
          script.innerHTML = result;
          head.appendChild(script);
          Start();
        }
      }
    },
    error: function(xhr, ajaxOptions, thrownError) {
      outputRegion.innerHTML = "I could not connect to the server at quorumlanguage.com: " + thrownError;
    }
  });
};

var requestCompile = function(codeData) {
  return new Promise( function(resolve, reject) {$.ajax({
      type: "POST",
      url: "/Fastrun.quorum",
      data: codeData,
      success: function(result) {
        resolve(result)
      },
      error: function(xhr, ajaxOptions, thrownError) {
        reject("I could not connect to the server at quorumlanguage.com: " + thrownError);
      }
    });
  });
}

var blockEditorRunCode = function(output, uiContainer, execute = true) {
  stopProgram();
  let canvasArea = document.getElementById(uiContainer);
  
  let codeInput = window.BLOCK_EDITOR.GetCode();
  let outputRegion = document.getElementById(output);
  let pageURL = window.location.href;
  let ideName = "Block Editor";
  let button = execute ? 0 : 1;
  let tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  currentIDEOutput_$Global_ = output;
  currentUIContainer_$Global_ = uiContainer;
  let codeData = { code: codeInput, pageURL: pageURL, ideName: ideName, build_only: button, timezone: tz };
  let compileRequest = requestCompile(codeData, execute);
  compileRequest.then(
    (result) => {
      outputRegion.innerHTML = "";
      var head = document.getElementsByTagName('head')[0];
      var run = document.getElementById("Runnable");
      if (run != null) {
        head.removeChild(run);
      }
      total_console_length239847239482734 = 0;
      if (result.startsWith("<div class=")) {
        outputRegion.innerHTML = result;
      } else if (result.startsWith("Failed to connect")) {
        outputRegion.innerHTML = "I could not connect to the server at quorumlanguage.com";
      } else {
        outputRegion.innerHTML = "Build Successful<br/>";
        if (execute === true) {
          let script = document.createElement('script');
          script.id = "Runnable";
          script.innerHTML = result;
          head.appendChild(script);
          canvasArea.display = "block"
          Start();
        }
      }
    },
    (error) => {
      outputRegion.innerHTML = error;
    });
}


//this is for testing only
var validate = function(output) {
  var outputRegion = document.getElementById(output);
  $.ajax({
    type: "GET",
    url: "/SessionValid.quorum",
    success: function(result) {
      if (result === "success") {
        outputRegion.innerHTML = "User is logged in";
        ;
      } else {
        outputRegion.innerHTML = "User is not logged in";
      }
    },
    error: function(xhr, ajaxOptions, thrownError) {
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
  document.getElementById('loginModal').style.display = 'block';
  document.getElementById('usernameInput').focus();
};

var hideLoginModal = function() {
  document.getElementById('loginModal').style.display = 'none';
  //login modal
  document.getElementById('usernameInput').value = "";
  document.getElementById('passwordInput').value = "";
  //forgot password modal
  document.getElementById('emailForgotInput').value = "";
  //create an account modal
  document.getElementById('userNameInput').value = "";
  document.getElementById('emailRegistrationInput').value = "";
  document.getElementById('passwordEnterInput').value = "";
  document.getElementById('confirmPasswordInput').value = "";
  document.getElementById('firstNameInput').value = "";
  document.getElementById('lastNameInput').value = "";
  document.getElementById('birthdayInput').value = "";

  //hide all error messages remove all aria-invalid
  document.getElementById('userNameInput').removeAttribute('aria-invalid');
  document.getElementById('emailRegistrationInput').removeAttribute('aria-invalid');
  document.getElementById('passwordEnterInput').removeAttribute('aria-invalid');
  document.getElementById('confirmPasswordInput').removeAttribute('aria-invalid');
  document.getElementById('firstNameInput').removeAttribute('aria-invalid');
  document.getElementById('lastNameInput').removeAttribute('aria-invalid');
  document.getElementById('birthdayInput').removeAttribute('aria-invalid');

  document.getElementById('alertMessage').ariaHidden = true;
  document.getElementById('feedbackMessage').ariaHidden = true;
  document.getElementById('successMessage').ariaHidden = true;
};

var showSaveModal = function(id) {
  $.ajax({
    type: "GET",
    url: "/SessionValid.quorum",
    success: function(result) {
      if (result === "success") {
        hideModals();
        lastModalID = id;
        document.getElementById('outerContentModal').style.display = 'block';
        document.getElementById(id + "projectNameInput").focus();
      } else {
        hideModals();
        showLoginModal();
      }
    },
    error: function(xhr, ajaxOptions, thrownError) {
      alert("I could not connect to the server at quorumlanguage.com");
    }
  });
};

var hideSaveModal = function(id) {
  document.getElementById("outerContentModal").classList.add("hidden");
  document.getElementById("outerContentModal").classList.remove("flex");
};

var showLoadModal = function(id) {
  $.ajax({
    type: "GET",
    url: "/SessionValid.quorum",
    success: function(result) {
      if (result === "success") {
        $.ajax({
          type: "POST",
          url: "/LoadProjectSelect.quorum",
          data: { id: id },
          success: function(result) {
            hideModals();
            lastModalID = id;
            document.getElementById(id + 'LoadFieldContainer').innerHTML = result;
            document.getElementById(id + 'LoadModal').style.display = 'block';
            document.getElementById(id + "LoadProjectSelect").focus();
            document.getElementById(id + "LoadProjectSelect").addEventListener("keydown", function(event) {
              if (event.shiftKey && (event.key === "Tab" || event.keyCode === 9) && document.getElementById(lastModalID + 'LoadModal').style.display === 'block') {
                var prefix = this.dataset.prefix;
                document.getElementById(prefix + 'LoadProjectCancel').focus();
                event.preventDefault();
              }
            });
          },
          error: function(xhr, ajaxOptions, thrownError) {
            alert('I could not connect to the server at quorumlanguage.com - ' + thrownError);
          }
        });
      } else {
        hideModals();
        showLoginModal();
      }
    },
    error: function(xhr, ajaxOptions, thrownError) {
      alert("I could not connect to the server at quorumlanguage.com");
    }
  });
};



var hideLoadModal = function(id) {
  document.getElementById(id + 'LoadModal').style.display = 'none';
};

$('.publicCheckbox').change(function() {
  var public = this.checked ? 1 : 0;
  var value = this.value;
  $.ajax({
    type: "POST",
    url: "/ChangePrivacy.quorum",
    data: { public: public, file: value },
    success: function(result) {
    },
    error: function(xhr, ajaxOptions, thrownError) {
      alert("I could not connect to the server at quorumlanguage.com: " + thrownError);
    }
  });
});



var showShareModal = function(value) {
  document.getElementById('shareModal').style.display = 'block';
  document.getElementById('shareText').value = value;
  document.getElementById('shareText').focus();

  try {
    document.getElementById('shareText').select();
    var success = document.execCommand('copy');
    if (success)
      document.getElementById('clipboardCopyMessage').style.display = 'block';
    else
      document.getElementById('clipboardCopyMessage').style.display = 'none';
  }
  catch (error) {
    document.getElementById('clipboardCopyMessage').style.display = 'none';
    console.log("There was an error while copying the project sharing link to the clipboard.");
  }
};

var hideShareModal = function() {
  document.getElementById('shareModal').style.display = 'none';
};

var login = function() {
  var user = $("#usernameInput").val();
  var pwd = $("#passwordInput").val();
  loginWithParams(user, pwd, null);
};

var loginWithParams = function(user, pwd, redirect) {
  $.ajax({
    type: "POST",
    url: "/Login.quorum",
    data: { username: user, password: pwd },
    success: function(result) {
      if (result === "success") {
        showLogoutUI();
        hideLoginModal();
      } else {
        alertMessageOn(result);
      }
    },
    error: function(xhr, ajaxOptions, thrownError) {
      alertMessageOn("I could not connect to the server at quorumlanguage.com: " + thrownError);
    }
  });
};

var logout = function() {
  $.ajax({
    type: "GET",
    url: "/Logout.quorum",
    success: function(result) {
      if (result === "success") {
        showLoginUI();
        //if path is in array it will redirect to home page on logout
        let arrayOfExclusiveUrls = ["/Profile.quorum"]
        if (arrayOfExclusiveUrls.includes(window.location.pathname)) {
          window.location.href = "/";
        }
      } else {
        alert("Logout failed: " + result);
      }
    },
    error: function(xhr, ajaxOptions, thrownError) {
      alert("I could not connect to the server at quorumlanguage.com");
    }
  });
};


var saveProject = function(id, input, output, namefield, overwrite) {
  $.ajax({
    type: "GET",
    url: "/SessionValid.quorum",
    success: function(result) {
      if (result === "success") {
        // UPDATE LATER FOR MULTIPLE FILES
        console.log(`id: ${id}, input: ${input}, output: ${output}, namefield: ${namefield}, overwrite: ${overwrite}`);
        var codeInput = document.getElementById(input).value;
        // -----
        var projectName = document.getElementById(namefield).value;
        var pageURL = window.location.href;
        var codeData = { code: codeInput, project_name: projectName, overwrite: overwrite, ide: id, url: pageURL };
        $.ajax({
          type: "POST",
          url: "/ProjectSave.quorum",
          data: codeData,
          success: function(result) {
            if (result === "A file already exists with that name.") {
              if (confirm("A file already exists with this name. Do you want to overwrite it?")) {
                saveProject(id, input, output, namefield, true);
              }
            }
            else {
              hideSaveModal(id);
              document.getElementById(output).innerHTML = result;
            }
            return false;
          },
          error: function(xhr, ajaxOptions, thrownError) {
            alert("Your code could not be saved at this time: " + thrownError);
          }
        });
      } else {
        showLoginModal();
        hideSaveModal(id);
      }
      return false;
    },
    error: function(xhr, ajaxOptions, thrownError) {
      alert("I could not connect to the server at quorumlanguage.com: " + thrownError);
    }
  });
};

var loadProject = function(id, select, input, output) {
  var outputRegion = document.getElementById(output);
  $.ajax({
    type: "GET",
    url: "/SessionValid.quorum",
    success: function(result) {
      if (result === "success") {
        var inputRegion = document.getElementById(input);
        var project, sharedBy;
        var filename = document.getElementById(select).value;
        var index = filename.lastIndexOf("#");

        if (index === -1) {
          project = filename;
          sharedBy = "";
        }
        else {
          project = filename.substring(0, index);
          sharedBy = filename.substring(index + 1);
        }

        var codeData = { project_name: project, shared: sharedBy };
        $.ajax({
          type: "POST",
          url: "/LoadProjectFile.quorum",
          data: codeData,
          success: function(result) {
            if (result !== "") {
              inputRegion.value = result;
              editAreaUpdate(inputRegion);
              outputRegion.innerHTML = 'Loaded "' + filename + '".';
              hideLoadModal(id);
            } else {
              outputRegion.innerHTML = 'I could not load the project named "' + filename + '".';
              hideLoadModal(id);
            }
          },
          error: function(xhr, ajaxOptions, thrownError) {
            outputRegion.innerHTML = "I could not connect to the server at quorumlanguage.com: " + thrownError;
            hideLoadModal(id);
          }
        });
      } else {
        outputRegion.innerHTML = "You are not logged in. Log in first to load your saved projects.";
        hideLoadModal(id);
      }
    },
    error: function(xhr, ajaxOptions, thrownError) {
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

var checkOutputGeneral = function(output) {
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
  if (path === "/hourofcode/part1.html") {
    expected = 'GATTACA\nWelcome to GATTACA\n'.toLowerCase();
  } else if (path === "/hourofcode/part2.html") {
    expected = 'The area is 28.\n'.toLowerCase();
  } else if (path === "/hourofcode/part3.html") {
    expected = 'Hello!\n'.toLowerCase();
  } else if (path === "/hourofcode/part4.html") {
    expected = '2.0\n4.0\n6.0\n8.0\n10.0\n'.toLowerCase();
  } else if (path === "/hourofcode/part5.html") {
    expected = '0.0 is even\n1.0 is odd\n2.0 is even\n3.0 is odd\n4.0 is even\n5.0 is odd\n6.0 is even\n7.0 is odd\n8.0 is even\n9.0 is odd\n'.toLowerCase();
  } else if (path === "/hourofcode/part6.html") {
    expected = 'Programming in Quorum is fun!\n'.toLowerCase();
  }

  console.log(expected);

  if (expected != null && output != null) {
    if (output.toLowerCase() === expected) {
      console.log("Success!");
      showModal($('#modal'));
    } else {
      console.log("No match detected")
    }
  }
};

//Checks IDE output for correct answer in Hour of Code pages
var checkOutput = function(pageNumber, output) {
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

$(document).ready(function() {
  jQuery('#modalCloseButton, #signInFormCancelButton, #signUpFormCancelButton').click(function(e) {
    hideModal();
  });
  jQuery('#modal').keydown(function(event) {
    trapTabKey($(this), event);
  })
  jQuery('#modal').keydown(function(event) {
    trapEscapeKey($(this), event);
  })

  jQuery('#noCodeModalCloseButton').click(function(e) {
    hideModal();
  });
  jQuery('#noCodeModal').keydown(function(event) {
    trapTabKey($(this), event);
  })
  jQuery('#noCodeModal, #signInModalContainer, #signUpModalContainer').keydown(function(event) {
    trapEscapeKey($(this), event);
  })

  $('#signUpButton').click(function(e) {
    showModal($('#signUpModalContainer'));
  });

  $('#signInButton').click(function(e) {
    showModal($('#signInModalContainer'));
  });

  //hide if clicking outside of the modal
  $('#signUpModalContainer').click(function(e) {
    if (e.target.id === "signUpModalContainer") {
      hideModal();
    }
  });

  $('#signInModalContainer').click(function(e) {
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
  // var currurl = window.location.pathname;
  // var page = getPageName(currurl);
  // if (page === "part1") {
  // submitCodeSampleHourOfCode(1);
  //slideShow(part1Slides());
  // } else if (page === "part2") {
  //   submitCodeSampleHourOfCode(2);
  //   slideShow(part2Slides());
  // } else if (page === "part3") {
  //   submitCodeSampleHourOfCode(3);
  //   slideShow(part3Slides());
  // } else if (page === "part4") {
  //   submitCodeSampleHourOfCode(4);
  //   slideShow(part4Slides());
  // } else if (page === "part5") {
  //   submitCodeSampleHourOfCode(5);
  //   slideShow(part5Slides());
  // } else if (page === "part6") {
  //   submitCodeSampleHourOfCode(6);
  //   slideShow(part6Slides());
  // } else if (page === "part7") {
  //   submitCodeSampleHourOfCode(7);
  //   slideShow(part7Slides());
  // }
}

function getPageName(url) {
  var index = url.lastIndexOf("/") + 1;
  var filenameWithExtension = url.substr(index);
  var filename = filenameWithExtension.split(".")[0]; // <-- added this line
  return filename;                                    // <-- added this line
}

var submitCodeSampleHourOfCode = function(pageNumber) {
  $("#run-button, #hour-of-code-run-button").on("click", function(e) {
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
      var codeData = { code: tempCode };
      $.ajax({
        type: "GET",
        url: "/proxy.php",
        data: codeData,
        success: function(result) {
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

          var reportData = { code: tempCode, uuid: id, pagenumber: pageNumber, slidenumber: slideNr, resultCode: result, completed: completedcheck, pageurl: pageURL, gacookie: ga_cookie };
          $.ajax({
            type: "POST",
            url: "/quorum_logger.php",
            data: reportData,
            success: function(result) {
              console.log("Logged Result " + result);
            },
            error: function(xhr, ajaxOptions, thrownError) {
              console.log(xhr, ajaxOptions, thrownError);
            }

          });
        },
        error: function(xhr, ajaxOptions, thrownError) {
          //console.log(xhr, ajaxOptions, thrownError);
          $(".outputArea").html("Error: Could not connect to server: " + thrownError.toString());
          var reportData = { code: tempCode, uuid: id, pagenumber: pageNumber, slidenumber: slideNr, resultCode: thrownError.toString(), completed: 0, pageurl: pageURL, gacookie: ga_cookie };
          $.ajax({
            type: "POST",
            url: "/quorum_logger.php",
            data: reportData,
            success: function(result) {
              console.log("Logged Result " + result);
            },
            error: function(xhr, ajaxOptions, thrownError) {
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
  var slide = function(index, direction) {
    //the slide animation
    //keep track of slide number. for some reason left and right are reversed
    if (direction === "right") {
      slideNr--;
    }
    if (direction === "left") {
      slideNr++;
    }
    $('#content-box-wrapper').attr('aria-live', 'none');
    $('#slide-box').replaceWith($.parseHTML(slideArray[index]));
    $('#content-box-wrapper').attr('aria-live', 'polite');
  };

  $('.slide-navigation-button').click(function() {
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

  $('#leftArrow').click(function() {
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

  $('#rightArrow').click(function() {
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

function successMessageOn(text) {
  console.log("Brandon Success message on");
  console.log(new Error().stack);
  let header = 'Success';
  switch (text) {
    case "An email has been sent to this address. Please check your email and follow the instructions to reset your account password.":
      header = "Missing Fields";
      break;
    case "Password successfully reset. You may now close this page and log in to the website.":
      header = "Password Reset";
      break;
    default:
      header = "Success";
      break;
  }
  if (header)
    $('#successMessageHeader').text(header);
  if (text)
    $('#successMessageText').text(text);
  $('#successMessage').attr("aria-hidden", "false");
}

function successMessageOff() {
  $('#successMessage').attr("aria-hidden", "true");
}

function feedbackMessageOn(text) {
  console.log("Brandon Feedback message on");
  console.log(new Error().stack);
  let header = 'Info';
  switch (text) {
    case "An email has been sent to this address. Please check your email and follow the instructions to reset your account password.":
      header = "Your request has been sent.";
      break;
    default:
      header = "Info";
      break;
  }

  if (header)
    $('#feedbackMessageHeader').text(header);
  if (text)
    $('#feedbackMessageText').text(text);
  $('#feedbackMessage').attr("aria-hidden", "false");
}

function feedbackMessageOff() {
  $('#feedbackMessage').attr("aria-hidden", "true");
}

function alertMessageOn(text) {
  console.log("Brandon Alert message on");
  console.log(new Error().stack);
  let header = 'Error';
  //make headers for all the error messages above, they can be the same if similar
  switch (text) {
    case "Required fields are missing.":
      header = "Missing Fields";
      break;
    case "The birthday is given in the wrong format.":
      header = "Invalid Birthday";
      break;
    case "Sorry, but you must be 13 years or older to create a Quorum account.":
      header = "Age Restriction";
      break;
    case "You must provide a valid email address.":
      header = "Invalid Email";
      break;
    case "An account already exists for this email.":
      header = "Account Exists";
      break;
    case "The username can only contain letters and numbers.":
      header = "Invalid Username";
      break;
    case "This username is unavailable.":
      header = "Username Unavailable";
      break;
    case "Passwords must be at least 9 characters long.":
      header = "Password Too Short";
      break;
    case "The password and confirm password fields must match.":
      header = "Password Mismatch";
      break;
    case "This email is not registered with a Quorum account. You may have made an account with a different email. If you don't have an account, you can create one from the login area.":
      header = "Email Not Registered";
      break;
    case "An unexpected error occurred. Please try again.":
      header = "Unexpected Error";
      break;
    case "You cannot request any more password resets at this time. Please try again later.":
      header = "Reset Limit Reached";
      break;
    case "I could not connect to the server at quorumlanguage.com.":
      header = "Connection Error";
      break;
    case "We were unable to send a reset email at this time. Please try again later.":
      header = "Email Sending Error";
      break;
    default:
      header = "Error"; // This could be used for the generic error message
      break;
  }

  if (header)
    $('#alertMessageHeader').text(header);
  if (text)
    $('#alertMessageText').text(text);
  $('#alertMessage').attr("aria-hidden", "false");
}

function alertMessageOff(aMsg) {
  if (aMsg && aMsg.length > 0) {
    if ($('#alertMessage').text() === aMsg) {
      $('#alertMessage').attr("aria-hidden", "true");
    }
  }
  else {
    $('#alertMessage').attr("aria-hidden", "true");
  }
}

function registrationSubmit() {
  var user = $('#userNameInput').val();
  var firstname = $('#firstNameInput').val();
  var lastname = $('#lastNameInput').val();
  var email = $('#emailRegistrationInput').val();
  var birthday = $('#birthdayInput').val();
  var password = $('#passwordEnterInput').val();
  var confirmPassword = $('#confirmPasswordInput').val();

  if (user === '') {
    $('#userNameInput').attr("aria-invalid", "true");
  } else if (firstname === '') {
    $('#firstNameInput').attr("aria-invalid", "true");
  } else if (lastname === '') {
    $('#lastNameInput').attr("aria-invalid", "true");
  } else if (email === '' || email.indexOf('@') < 0) {
    $('#emailRegistrationInput').attr("aria-invalid", "true");
  } else if (birthday === '' || !checkBirthday(birthday)) {
    $('#birthdayInput').attr("aria-invalid", "true");
  } else if (password === '') {
    $('#passwordEnterInput').attr("aria-invalid", "true");
  } else if (confirmPassword === '') {
    $('#passwordConfirmInput').attr("aria-invalid", "true");
  } else if (confirmPassword != password) {
    $('#passwordConfirmInput').attr("aria-invalid", "true");
  } else {
    // Cleanup
    alertMessageOff();
    feedbackMessageOff();
    $('#userNameInput').attr("aria-invalid", "false");
    $('#firstNameInput').attr("aria-invalid", "false");
    $('#lastNameInput').attr("aria-invalid", "false");
    $('#emailRegistrationInput').attr("aria-invalid", "false");
    $('#birthdayInput').attr("aria-invalid", "false");
    $('#passwordEnterInput').attr("aria-invalid", "false");
    $('#passwordConfirmInput').attr("aria-invalid", "false");

    /*
$user_name = $_POST['username'];
$user_pass = $_POST['password'];
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$birthday = $_POST['birthday'];
$confirm_pass = $_POST['confirm_password'];
     */
    let registerCount = 0;
    console.log("BRANODN CHECKING REGISTRATION");

    $.ajax({
      type: "POST",
      url: "/Register.quorum",
      data: { username: user, password: password, first_name: firstname, last_name: lastname, email: email, birthday: birthday, confirm_password: confirmPassword },
      success: function(result) {
        console.log('register.quorum success: ' + registerCount++);

        // might need change for if condition
        if (result === "success") {
          alertMessageOff();
          successMessageOn("Your account was successfully created!");
          loginWithParams(user, password, "https://quorumlanguage.com");
        } else {
          alertMessageOn(result);
        }
      },
      error: function(xhr, ajaxOptions, thrownError) {
        console.log('register.quoruum error: ' + registerCount++);
        alertMessageOn("I could not connect to the server at quorumlanguage.com: " + xhr.status + ", " + xhr.responseText + ", " + thrownError);
      }
    });
  }
}

function ResetSignInModal() {
  let signInModal = document.getElementById('signInModal');
  let registerModal = document.getElementById('signUpModal');

  registerModal.classList.add('hidden');
  registerModal.classList.remove('flex');

  signInModal.classList.add('hidden');
  signInModal.classList.remove('flex');
  //focus on username input
  document.getElementById('alertMessage').ariaHidden = true;
  document.getElementById('feedbackMessage').ariaHidden = true;
  setTimeout(function() {
    document.getElementById('successMessage').ariaHidden = true;
  }, 3000);
}

function checkRegistrationFieldsValidity() {
  var allValid = $('#userNameInput').attr("aria-invalid") === "false" &&
    $('#firstNameInput').attr("aria-invalid") === "false" &&
    $('#lastNameInput').attr("aria-invalid") === "false" &&
    $('#emailRegistrationInput').attr("aria-invalid") === "false" &&
    $('#birthdayInput').attr("aria-invalid") === "false" &&
    $('#passwordEnterInput').attr("aria-invalid") === "false" &&
    $('#confirmPasswordInput').attr("aria-invalid") === "false";

  $('#submitRegistrationForm').attr("disabled", !allValid);
}

function checkBirthday(date) {
  // Only provides weak validation, requires stronger validation in PHP after.
  // Allows for erroneous dates like "02/31/2000".
  var pattern = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  return pattern.test(date);
}

function forgotPasswordClick() {
  var email = $('#emailForgotInput').val();

  if (email === '') {
    $('#emailForgotInput').attr("aria-invalid", "true");
  } else {
    // Cleanup
    alertMessageOff();
    feedbackMessageOff();
    $('#emailForgotInput').attr("aria-invalid", "false");

    $.ajax({
      type: "POST",
      url: "/RequestPasswordReset.quorum",
      data: { email: email },
      success: function(result) {
        // might need change for if condition
        if (result === "An email has been sent to this address. Please check your email and follow the instructions to reset your account password.") {
          feedbackMessageOn(result);
        } else {
          alertMessageOn(result);
        }
      },
      error: function(xhr, ajaxOptions, thrownError) {
        alertMessageOn("I could not connect to the server at quorumlanguage.com: " + xhr.status + ", " + xhr.responseText + ", " + thrownError);
      }
    });
  }
}

function resetPasswordClick() {
  var password = $('#passwordEnterInput').val();
  var passwordConfirm = $('#confirmPasswordInput').val();
  var hiddenKey = $('#hidden_reset_key').val();

  if (password === '') {
    $('#passwordEnterInput').attr("aria-invalid", "true");
  } else if (passwordConfirm === '') {
    $('#passwordConfirmInput').attr("aria-invalid", "true");
  } else if (passwordConfirm != password) {
    $('#passwordConfirmInput').attr("aria-invalid", "true");
  } else {
    // Cleanup
    alertMessageOff();
    feedbackMessageOff();
    $('#passwordConfirmInput').attr("aria-invalid", "false");
    $('#passwordEnterInput').attr("aria-invalid", "false");

    $.ajax({
      type: "POST",
      url: "/ConfirmResetPassword.quorum",
      data: { reset_password: password, confirm_reset_password: passwordConfirm, pagekey: hiddenKey },
      success: function(result) {
        // might need change for if condition
        if (result === "Password successfully reset. You may now close this page and log in to the website.") {
          document.location.href = "/";
        } else {
          alertMessageOn(result);
        }
      },
      error: function(xhr, ajaxOptions, thrownError) {
        alert("I could not connect to the server at quorumlanguage.com: " + thrownError);
      }
    });
  }

}


function checkValidityEmail() {
  var elem = $('#' + this.id)
  var invalid = (elem.val().indexOf('@') < 0);
  if (invalid) {
    elem.attr("aria-invalid", "true");
  } else {
    elem.attr("aria-invalid", "false");
  }
  checkRegistrationFieldsValidity();
}

function checkValidityExists() {
  var elem = $('#' + this.id)
  var invalid = (elem.val().length === 0);
  if (invalid) {
    elem.attr("aria-invalid", "true");
  } else {
    elem.attr("aria-invalid", "false");
  }
  checkRegistrationFieldsValidity();
}

function checkValidityDate() {
  var elem = $('#' + this.id);
  var invalid = !checkBirthday(elem.val());
  if (invalid) {
    elem.attr("aria-invalid", "true");
  } else {
    elem.attr("aria-invalid", "false");
  }
  checkRegistrationFieldsValidity();
}

function checkConfirmPassword() {
  var elem = $('#confirmPasswordInput');
  var password = $('#passwordEnterInput');

  var invalid = elem.val() != password.val();
  if (invalid) {
    elem.attr("aria-invalid", "true");
  } else {
    elem.attr("aria-invalid", "false");
  }
  checkRegistrationFieldsValidity();
}

// Remove a row from the profile project table.
function deleteRow(button) {
  if (confirm("Are you sure you want to permanently delete " + button.value + "?")) {
    $.ajax({
      type: "POST",
      url: "/delete_project.php",
      data: { project: button.value },
      success: function(result) {
        if (result === "success") {
          var row = button.parentNode.parentNode;
          row.parentNode.removeChild(row);
        }
        else {
          alert("There was an error while deleting this project: " + result);
        }
      },
      error: function(xhr, ajaxOptions, thrownError) {
        alert("I could not connect to the server at quorumlanguage.com: " + thrownError);
      }
    });
  }
}
