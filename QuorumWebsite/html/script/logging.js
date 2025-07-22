// ✅ Function to generate a new UUID (v4)
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// ✅ Check for an existing UUID in sessionStorage, generate one if not found
let uuid = sessionStorage.getItem('uuid');
if (!uuid) {
    uuid = generateUUID();
    sessionStorage.setItem('uuid', uuid);
    console.log("New UUID generated:", uuid);
} else {
    console.log("Existing UUID found:", uuid);
}

function estimatePPI() {
    const width = window.screen.width * window.devicePixelRatio;
    const height = window.screen.height * window.devicePixelRatio;
    const diagonalPx = Math.sqrt(width ** 2 + height ** 2);

    // ✅ Predefined screen size mappings
    const screenSizes = [
        { width: 2048, height: 1536, diagonalInches: 9.7 }, // iPad 9.7"
        { width: 2732, height: 2048, diagonalInches: 12.9 }, // iPad Pro 12.9"
        { width: 1920, height: 1200, diagonalInches: 10.1 }, // Android 10.1"
        { width: 1340, height: 800, diagonalInches: 8.4 },   // Samsung Galaxy Tab 8.4"
    ];

    // ✅ Try exact match
    const match = screenSizes.find(s => Math.abs(s.width - width) < 50 && Math.abs(s.height - height) < 50);
    if (match) return diagonalPx / match.diagonalInches;

    // ✅ Fallback estimate
    return diagonalPx / 9; // Assuming ~9 inches for unknown devices
}



function getZoomInfo() {
    let browserZoom = null;  // Desktop/Laptop Browser Zoom
    let pinchZoom = null;    // Tablet/Mobile Pinch-to-Zoom

    // ✅ Detect browser zoom (Desktop & some Tablets)
    if (window.screen.width) {
        browserZoom = Math.round((window.innerWidth / window.screen.width) * 100);
    }

    // ✅ Detect pinch-to-zoom (Mobile & Tablets)
    if (window.visualViewport && window.visualViewport.scale !== 1) {
        pinchZoom = Math.round(window.visualViewport.scale * 100);
    }

    return { browserZoom, pinchZoom };
}


// ✅ Generic function to collect user/browser data for any event type
function getUserInfo(eventType, extraData = {}) {
    const zoomInfo = getZoomInfo();
	const estimatedPPI = estimatePPI();
    const screenSizeInches = estimatedPPI ? (Math.sqrt(window.screen.width ** 2 + window.screen.height ** 2) / estimatedPPI).toFixed(1) : "unknown";

    return {
        uuid: uuid,
        experiment_key: sessionStorage.getItem("experiment_key") || "unknown",  // ✅ Include experiment_key
        user_agent: navigator.userAgent,
        browser: getBrowserDetails().browser_name,
        browser_version: getBrowserDetails().browser_version,
        os: getOS(),
        device_type: getDeviceType(),
        language: navigator.language,
        time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        country: "N/A",
        event_type: eventType,
        page_url: window.location.href,
        screen_resolution: `${window.screen.width}x${window.screen.height}`,
        screen_size_inches: screenSizeInches,
        browser_zoom: zoomInfo.browserZoom,   // ✅ Tracks browser zoom (null if not available)
        pinch_zoom: zoomInfo.pinchZoom,       // ✅ Tracks pinch zoom (null if not available)
        client_timestamp: new Date().toISOString(),
        extra_data: extraData
    };
}

function getBrowserDetails() {
    const ua = navigator.userAgent;
    let browser = "Unknown", version = "Unknown";

    if (/firefox|fxios/i.test(ua)) {
        browser = "Firefox";
        version = ua.match(/firefox\/([\d.]+)/i)?.[1];
    } else if (/chrome|crios/i.test(ua)) {
        if (/edg/i.test(ua)) {
            browser = "Edge"; // Edge Chromium
        } else if (/brave/i.test(ua)) {
            browser = "Brave";
        } else if (/opr\//i.test(ua)) {
            browser = "Opera";
        } else {
            browser = "Chrome";
        }
        version = ua.match(/(chrome|crios)\/([\d.]+)/i)?.[2];
    } else if (/safari/i.test(ua) && !/chrome|crios|fxios/i.test(ua)) {
        browser = "Safari";
        version = ua.match(/version\/([\d.]+)/i)?.[1];
    } else if (/edg/i.test(ua)) {
        browser = "Edge";
        version = ua.match(/edg\/([\d.]+)/i)?.[1];
    }

    return { browser_name: browser, browser_version: version || "Unknown" };
}


// ✅ Detect OS
function getOS() {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("windows")) return "Windows";
    if (ua.includes("mac os")) return "MacOS";
    if (ua.includes("linux")) return "Linux";
    if (/android/.test(ua)) return "Android";
    if (/iphone|ipad|ipod/.test(ua)) return "iOS";
    return "Unknown";
}


// ✅ Detect Device Type
function getDeviceType() {
    const ua = navigator.userAgent.toLowerCase();
    const isTouchDevice = navigator.maxTouchPoints > 1 || "ontouchstart" in window;
    const isLinuxARM = /linux/.test(ua) && /arm/.test(navigator.platform.toLowerCase());

    // ✅ If it's a known tablet (Android, iPad, etc.)
    if (/ipad|tablet|android(?!.*mobile)/.test(ua)) return "Tablet"; 

    // ✅ If it's Linux on ARM and has touch, assume it's a tablet
    if (isTouchDevice && isLinuxARM) return "Tablet";

    // ✅ Exclude touchscreen laptops
    if (isTouchDevice && /windows|mac|linux/i.test(ua) && window.screen.width >= 1024) return "Desktop";

    // ✅ Identify mobile devices
    if (/iphone|ipod|android.*mobile|windows phone/i.test(ua)) return "Mobile";

    return "Desktop"; // ✅ Default to Desktop if no other matches
}




const logQueue = []; // ✅ Stores events before sending
const LOG_BATCH_SIZE = 25; // ✅ Send logs when this many accumulate
const LOG_FLUSH_INTERVAL = 5000; // ✅ Send logs every 5 seconds
const MAX_RETRIES = 15; // ✅ Maximum retries for failed requests

// ✅ Function to enqueue log events
function logEvent(eventType, extraData = {}) {
    const elementId = extraData.element_id || null;
    const elementType = extraData.element_type || null;
    const { element_id, element_type, ...cleanExtraData } = extraData;

    // ✅ Create event object with millisecond precision timestamp
    const eventData = getUserInfo(eventType, cleanExtraData);
    eventData.element_id = elementId;
    eventData.element_type = elementType;
    eventData.client_timestamp = new Date().toISOString();

    logQueue.push(eventData); // ✅ Add event to queue

    if (logQueue.length >= LOG_BATCH_SIZE) {
        flushLogs(); // ✅ Send logs if batch size is reached
    }
}

// ✅ Function to send batched logs to the server
function flushLogs(forceSync = false) {
    if (sessionStorage.getItem("experiment_key") != undefined && sessionStorage.getItem("experiment_key") == "quorum") {
	console.log("Not logging.");
	return;
    }
    if (logQueue.length === 0) return; // ✅ Nothing to send

    const batchedLogs = [...logQueue]; // Copy queue contents
    logQueue.length = 0; // ✅ Clear queue after copying

    const apiUrl = `${window.location.origin}/experiment-api/log_batch`;
    const payload = JSON.stringify({ logs: batchedLogs });

    if (forceSync && navigator.sendBeacon) {
        // ✅ Use `sendBeacon()` for guaranteed sending before page unload
        const blob = new Blob([payload], { type: "application/json" });
        const success = navigator.sendBeacon(apiUrl, blob);
        if (!success) {
            console.warn("❌ sendBeacon failed, falling back to fetch");
            retryBatchRequest(payload, apiUrl); // ✅ Fallback
        }
    } else {
        // ✅ Standard fetch with retry logic
        retryBatchRequest(payload, apiUrl);
    }
}

// ✅ Function to retry failed requests with exponential backoff
function retryBatchRequest(payload, apiUrl, retries = MAX_RETRIES, delay = 2000) {
    fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log("✅ Logs batch stored:", data))
    .catch(error => {
        console.error("❌ Batch logging error:", error);
        if (retries > 0) {
            console.warn(`Retrying batch request (${retries} attempts left)...`);
            setTimeout(() => retryBatchRequest(payload, apiUrl, retries - 1, delay * 2), delay);
        } else {
            console.error("❌ Max retries reached, logs could not be stored.");
        }
    });
}

// ✅ Periodically flush logs every `LOG_FLUSH_INTERVAL`
setInterval(flushLogs, LOG_FLUSH_INTERVAL);

// ✅ Ensure logs are sent before user leaves
window.addEventListener("beforeunload", () => flushLogs(true));


// ✅ Function to extract the activity number from the URL
function extractActivityNumberFromURL() {
    const urlParts = window.location.pathname.split('/'); // Split URL path
    const lastPart = urlParts[urlParts.length - 1]; // Get last section (e.g., "datascience1.html")
    const match = lastPart.match(/\d+/); // Extract numeric part
    return match ? match[0] : "N/A"; // Return number or "N/A" if not found
}

// ✅ Fire 'page_load' event when the page loads
window.addEventListener("load", () => {
    logEvent("page_load");
});

// ✅ Fire 'page_unload' event when the page unloads
window.addEventListener("beforeunload", () => {
    logEvent("page_unload");
});

// ✅ Function to add the focus event listener once BlockEditor is loaded
function addFocusListener(parent_id) {
    const parent_element = document.getElementById(parent_id);

    if (parent_element) {
        parent_element.addEventListener("focusin", function (event) {
            const focusedElement = event.target;

            // Ensure the focused element has an ID, otherwise assign a generic one
            const elementId = focusedElement.id ? focusedElement.id : "unnamed_element";
            const elementType = focusedElement.tagName.toLowerCase(); // Get the element type
			
			// ✅ Extract ARIA attributes
			const ariaLabel = focusedElement.getAttribute("aria-label") || null;
			const ariaDescription = focusedElement.getAttribute("aria-description") || null;
			const role = focusedElement.getAttribute("role") || null;

			// ✅ Add ARIA attributes to extraData only if they exist
			const enrichedExtraData = {
				...(ariaLabel && { aria_label: ariaLabel }),
				...(ariaDescription && { aria_description: ariaDescription }),
				...(role && { role: role })
			};

            // ✅ Log the focus event
            logEvent("focus", {
                element_id: elementId,
                element_type: elementType,
				...enrichedExtraData
            });
        });
		
        parent_element.addEventListener("focusout", function (event) {
            const focusedElement = event.target;

            // Ensure the focused element has an ID, otherwise assign a generic one
            const elementId = focusedElement.id ? focusedElement.id : "unnamed_element";
            const elementType = focusedElement.tagName.toLowerCase(); // Get the element type
			
			// ✅ Extract ARIA attributes
			const ariaLabel = focusedElement.getAttribute("aria-label") || null;
			const ariaDescription = focusedElement.getAttribute("aria-description") || null;
			const role = focusedElement.getAttribute("role") || null;

			// ✅ Add ARIA attributes to extraData only if they exist
			const enrichedExtraData = {
				...(ariaLabel && { aria_label: ariaLabel }),
				...(ariaDescription && { aria_description: ariaDescription }),
				...(role && { role: role })
			};

            // ✅ Log the focus event
            logEvent("focusout", {
                element_id: elementId,
                element_type: elementType,
				...enrichedExtraData
            });
        });
		
        parent_element.addEventListener("blur", function (event) {
            const focusedElement = event.target;

            // Ensure the focused element has an ID, otherwise assign a generic one
            const elementId = focusedElement.id ? focusedElement.id : "unnamed_element";
            const elementType = focusedElement.tagName.toLowerCase(); // Get the element type
			
			// ✅ Extract ARIA attributes
			const ariaLabel = focusedElement.getAttribute("aria-label") || null;
			const ariaDescription = focusedElement.getAttribute("aria-description") || null;
			const role = focusedElement.getAttribute("role") || null;

			// ✅ Add ARIA attributes to extraData only if they exist
			const enrichedExtraData = {
				...(ariaLabel && { aria_label: ariaLabel }),
				...(ariaDescription && { aria_description: ariaDescription }),
				...(role && { role: role })
			};

            // ✅ Log the focus event
            logEvent("blur", {
                element_id: elementId,
                element_type: elementType,
				...enrichedExtraData
            });
        });

        console.log("✅ Focus event listener added to " + parent_id);
    }
}

function addInteractionListeners(parent_id) {
    const parent_element = document.getElementById(parent_id);

    if (!parent_element) return; // Ensure BlockEditor exists before adding listeners

    // ✅ Mouse & Keyboard Interactions
    parent_element.addEventListener("click", (event) => logInteraction(event, "click"));
    parent_element.addEventListener("keydown", (event) => handleKeydown(event));

    // ✅ Touch Interactions
    //parent_element.addEventListener("touchend", (event) => handleTap(event));
    parent_element.addEventListener("dblclick", (event) => logInteraction(event, "dbl_tap"));

    // ✅ Drag & Drop
    parent_element.addEventListener("dragstart", (event) => logInteraction(event, "drag"));
    parent_element.addEventListener("drop", (event) => logInteraction(event, "drop"));

    console.log("✅ All interaction listeners added to " + parent_id);
}


// ✅ Handles keydown events
function handleKeydown(event) {
    const key = event.key.toLowerCase();
    const keyCombination = [];

    if (event.altKey) keyCombination.push("alt");
    if (event.ctrlKey) keyCombination.push("ctrl");
    if (event.shiftKey) keyCombination.push("shift");

    keyCombination.push(key);

    const keyEvent = keyCombination.join("+"); // Format like "alt+shift+x"

    // ✅ List of keys to log
    const validKeys = [
        "arrowup", "arrowdown", "arrowleft", "arrowright", "tab", "enter",
        "shift+enter", "shift+tab", "escape", "alt+shift+r", "alt+shift+s",
        "alt+shift+x", "alt+plus", "alt+-", "alt+shift+h", "alt+1", "alt+2",
        "pageup", "pagedown", "backspace", "delete"
    ];

    // ✅ Only log specified keys
    if (validKeys.includes(keyEvent)) {
        logInteraction(event, "keydown", { key_pressed: keyEvent });
    }
}

// ✅ Handles tap and double-tap detection
let lastTapTime = 0;
function handleTap(event) {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTapTime;

    if (tapLength < 300 && tapLength > 0) {
        logInteraction(event, "dbl_tap");
    } else {
        logInteraction(event, "tap");
    }

    lastTapTime = currentTime;
}

// ✅ Generic function to log interactions
function logInteraction(event, eventType, extraData = {}) {
    const targetElement = event.target;
    
    // Ensure element has an ID or assign a generic one
    const elementId = targetElement.id ? targetElement.id : "unnamed_element";
    const elementType = targetElement.tagName.toLowerCase(); // Get the element type
	
	// ✅ Extract ARIA attributes
    const ariaLabel = targetElement.getAttribute("aria-label") || null;
    const ariaDescription = targetElement.getAttribute("aria-description") || null;
    const role = targetElement.getAttribute("role") || null;

    // ✅ Add ARIA attributes to extraData only if they exist
    const enrichedExtraData = {
        ...(ariaLabel && { aria_label: ariaLabel }),
        ...(ariaDescription && { aria_description: ariaDescription }),
        ...(role && { role: role }),
		...extraData
    };

    // ✅ Log the event
    logEvent(eventType, {
        element_id: elementId,
        element_type: elementType,
		...enrichedExtraData
    });
}

// ✅ Function to start observing when body exists
function startObserver() {
    if (!document.body) {
        console.error("❌ document.body is not ready yet. Retrying...");
        setTimeout(startObserver, 50); // Retry after 50ms
        return;
    }

    // ✅ Observe the DOM for when BlockEditor is added
    const observer = new MutationObserver((mutations, obs) => {
        if (document.getElementById("BlockEditor")) {
            addFocusListener("BlockEditor");
			addInteractionListeners("BlockEditor");
			//trackQuorumBehaviors();
			
            obs.disconnect(); // Stop observing once BlockEditor is found
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

// ✅ Ensure observer starts only when document is ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startObserver);
} else {
    startObserver();
}

// ✅ Select the QuorumUIContainer div
const quorumContainer = document.getElementById("QuorumUIContainer");

if (quorumContainer) {
    // ✅ MutationObserver to detect when a canvas is added or removed
    const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
            if (mutation.type === "childList") {
                const canvasElement = quorumContainer.querySelector("canvas");

                if (canvasElement) {
                    console.log("✅ Canvas detected inside QuorumUIContainer! Adding event listeners...");
					addFocusListener("QuorumUIContainer");
					addInteractionListeners("QuorumUIContainer");
					//trackQuorumBehaviors();
				}
            }
        });
    });

    // ✅ Start observing changes in QuorumUIContainer
    observer.observe(quorumContainer, { childList: true});

    console.log("🔍 Watching for Canvas inside QuorumUIContainer...");
}

// ✅ Function to format timestamps for MySQL
function formatTimestampForMySQL(isoString) {
    if (!isoString) return null;
    const date = new Date(isoString);
    return date.toISOString().slice(0, 23).replace("T", " ").replace("Z", ""); 
}

//Inject UUID to /Fastrun.quorum ajax POSTs

(function waitForJQuery() {
    if (typeof window.jQuery === "undefined") {
        setTimeout(waitForJQuery, 50); // Retry every 50ms
    } else {
		(function() {
			const originalAjax = $.ajax;
			$.ajax = function(options) {
				// Check if request is being sent to /Fastrun.quorum
				if (options.url && options.url.includes("/Fastrun.quorum")) {
					// Ensure options.data exists
					if (!options.data) {
						options.data = {};
					}

					let uuid = sessionStorage.getItem("uuid");
					if (uuid) {
						// If data is an object, add the UUID
						if (typeof options.data === 'object') {
							if (!options.data.uuid) {
								options.data.uuid = uuid;
								options.data.timestamp = formatTimestampForMySQL(new Date().toISOString());
							}
						} 
						// If data is a string (e.g., encoded form data), convert it
						else if (typeof options.data === 'string') {
							let params = new URLSearchParams(options.data);
							if (!params.has('uuid')) {
								params.append('uuid', uuid);
								params.append('timestamp', formatTimestampForMySQL(new Date().toISOString()));
							}
							options.data = params.toString();
						}
					}
				}

				return originalAjax.apply(this, arguments);
			};
		})();
	}
})();

document.addEventListener("DOMContentLoaded", function () {
    const storedKey = sessionStorage.getItem("experiment_key");

    if (!storedKey) {
        requestExperimentKey();
    } else {
        console.log("✅ Experiment key found:", storedKey);
    }
});

function requestExperimentKey() {
    const key = prompt("Enter your experiment key:");

    if (!key) {
        alert("Experiment key is required to proceed.");
        requestExperimentKey();
        return;
    }

    fetch("https://amiga2.cs.unlv.edu/experiment-api/validate-key", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ experiment_key: key }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                sessionStorage.setItem("experiment_key", key);
				logEvent("experiment_key_success");
            } else {
                alert("❌ Invalid experiment key. Try again.");
                requestExperimentKey();
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("❌ Server error. Try again.");
            requestExperimentKey();
        });
}


/*
(function () {
    let behaviorsWrapped = { defaultTable: false, Chart: false, CodeEditor: false };

    // ✅ Behavior Whitelist & Log Mapping
    const behaviorEventMap = {
    // Existing WebEditor Behaviors
    //"quorum_WebEditor_Behaviors_FocusEditorBehavior_": "quorum_FocusEditor",
    "quorum_WebEditor_Behaviors_WebEditorDoubleTapBehavior_": "quorum_WebEditorDoubleTap",
    //"quorum_WebEditor_Behaviors_FocusPaletteBehavior_": "quorum_FocusPalette",
    "quorum_WebEditor_Behaviors_WebEditorSwipeBehavior_": "quorum_WebEditorSwipe",
    //"quorum_WebEditor_Behaviors_WebEditorPanBehavior_": "quorum_WebEditorPan",
    "quorum_WebEditor_Behaviors_WebEditorSingleTapBehavior_": "quorum_WebEditorSingleTap",
    //"quorum_WebEditor_Behaviors_FocusEditorItemBehavior_": "quorum_FocusEditorItem",
    //"quorum_WebEditor_Behaviors_StopGameBehavior_": "quorum_StopGame",
    //"quorum_WebEditor_Behaviors_RunGameBehavior_": "quorum_RunGame",
    //"quorum_WebEditor_Behaviors_WebEditorLongPressBehavior_": "quorum_WebEditorLongPress",
    //"quorum_WebEditor_Behaviors_ZoomBehavior_": "quorum_Zoom",
    //"quorum_WebEditor_Behaviors_ZoomBehavior_": "quorum_Zoom",
    //"quorum_WebEditor_Behaviors_ShowHelpModalBehavior_": "quorum_ShowHelpModal",
    //"quorum_Libraries_Interface_Behaviors_FocusPreviousBehavior_": "quorum_FocusPrevious",
    //"quorum_WebEditor_Behaviors_TogglePaletteBehavior_": "quorum_TogglePalette",
    //"quorum_Libraries_Interface_Behaviors_FocusNextBehavior_": "quorum_FocusNext",

    // New Blocks & Controls Behaviors
    //"quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorFreeformEditingBehavior_": "quorum_CodeEditorFreeformEditing",
    //"quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorNewLineBehavior_": "quorum_CodeEditorNewLine",
    //"quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorDeleteBlockBehavior_": "quorum_CodeEditorDeleteBlock",
    //"quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorNavigateToStartBehavior_": "quorum_CodeEditorNavigateToStart",
    //"quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorNavigateToEndBehavior_": "quorum_CodeEditorNavigateToEnd",
    //"quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorEscapeBehavior_": "quorum_CodeEditorEscape",
    //"quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorHintBehavior_": "quorum_CodeEditorHint",
    //"quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorOpenPopupMenuBehavior_": "quorum_CodeEditorOpenPopupMenu",
    "quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorAcceptDraggedBlockBehavior_": "quorum_CodeEditorAcceptDraggedBlock",
    "quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorSelectionUpBehavior_": "quorum_CodeEditorSelectionUp",
    "quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorSelectionDownBehavior_": "quorum_CodeEditorSelectionDown",
    //"quorum_Libraries_Interface_Behaviors_Controls_CodeEditorSelectAllBehavior_": "quorum_CodeEditorSelectAll",
    //"quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorCopyToClipboardBehavior_": "quorum_CodeEditorCopyToClipboard",
    //"quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorSelectPreviousBehavior_": "quorum_CodeEditorSelectPrevious",
    //"quorum_Libraries_Interface_Behaviors_Controls_ScrollableControlMouseScrollBehavior_": "quorum_ScrollableControlMouseScroll",
    //"quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorSelectToStartBehavior_": "quorum_CodeEditorSelectToStart",
    //"quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorSelectToEndBehavior_": "quorum_CodeEditorSelectToEnd",
    //"quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorMultipleSelectionUpBehavior_": "quorum_CodeEditorMultipleSelectionUp",
    //"quorum_Libraries_Interface_Behaviors_Blocks_BlockShiftClickBehavior_": "quorum_BlockShiftClick",
    //"quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorUndoBehavior_": "quorum_CodeEditorUndo",
    //"quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorRedoBehavior_": "quorum_CodeEditorRedo",
    //"quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorCutToClipboardBehavior_": "quorum_CodeEditorCutToClipboard",
    //"quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorPasteFromClipboardBehavior_": "quorum_CodeEditorPasteFromClipboard",
    //"quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorMultipleSelectionDownBehavior_": "quorum_CodeEditorMultipleSelectionDown",
    "quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorSelectNextBehavior_": "quorum_CodeEditorSelectNext",
	"quorum_Libraries_Interface_Behaviors_Blocks_CodeEditorSelectPreviousBehavior_": "quorum_CodeEditorSelectPrevious",
	
	//Charts
	"quorum_Libraries_Interface_Behaviors_Controls_ChartNavigateBehavior_": "quorum_ChartNavigate",
	//"quorum_Libraries_Interface_Behaviors_Controls_ChartTouchStartBehavior_": "quorum_ChartTouchStart", 
	//"quorum_Libraries_Interface_Behaviors_Controls_ChartTouchContinueBehavior_": "quorum_ChartTouchContinue", 
	//"quorum_Libraries_Interface_Behaviors_Controls_ChartTouchEndBehavior_": "quorum_ChartTouchEnd"
    };

    function getBehaviorsFromTable(tableName, isDefault = false) {
        try {
            const gameStateManager = plugins_quorum_Libraries_Game_GameStateManager_;
            if (!gameStateManager || typeof gameStateManager.GetActiveGame !== "function") {
                console.warn(`⚠️ GameStateManager or GetActiveGame() not available yet for ${tableName}.`);
                return null;
            }

            const activeGame = gameStateManager.GetActiveGame();
            if (!activeGame) {
                console.warn(`⚠️ No active game detected for ${tableName}.`);
                return null;
            }

            const gameInput = activeGame.Get_Libraries_Game_Game__gameInput_();
            if (!gameInput || !gameInput.Libraries_Game_GameInput__) {
                console.warn(`⚠️ gameInput structure missing for ${tableName}.`);
                return null;
            }

            let behaviorTable;
            if (isDefault) {
                behaviorTable = gameInput.Libraries_Game_GameInput__.defaultTable.table.CopyToValueArray();
            } else {
                const inputTable = gameInput.Libraries_Game_GameInput__.inputTables.GetValue$quorum_Libraries_Language_Object(tableName);
                if (!inputTable || !inputTable.table) {
                    console.warn(`⚠️ Input table '${tableName}' not found.`);
                    return null;
                }
                behaviorTable = inputTable.table.CopyToValueArray();
            }

            if (!behaviorTable || !behaviorTable.plugin_ || !Array.isArray(behaviorTable.plugin_.array_)) {
                console.warn(`⚠️ '${tableName}' CopyToValueArray() did not return a valid plugin_.array_ structure.`);
                return null;
            }

            console.log(`✅ Retrieved behaviors from '${tableName}'`);
            return behaviorTable.plugin_.array_;
        } catch (error) {
            console.error(`❌ Error retrieving behaviors from '${tableName}':`, error);
            return null;
        }
    }

    function wrapRunFunction(behavior) {
        if (!behavior) return;

        const behaviorName = behavior.prototype?.constructor.name;
        if (!behaviorEventMap.hasOwnProperty(behaviorName)) {
            console.warn(`⚠️ Skipping non-whitelisted behavior: ${behaviorName}`);
            return;
        }

        if (typeof behavior["Run$quorum_Libraries_Interface_Events_BehaviorEvent"] !== "function") return;
        if (behavior["Run$quorum_Libraries_Interface_Events_BehaviorEvent"]._isWrapped) return;

        console.log(`✅ Wrapping Run for behavior: ${behaviorName}`);

        const originalRun = behavior["Run$quorum_Libraries_Interface_Events_BehaviorEvent"];
        behavior["Run$quorum_Libraries_Interface_Events_BehaviorEvent"] = function(event) {
            console.log(`🔥 Behavior Run Intercepted: ${behavior.prototype?.constructor.name}`);
            console.log("📌 Received Event Object:", event);
			let internal_event_type = ""
			let shouldLog = false;
			const extraData = {};
			if (event.dragEvent) {
				let placeholder_new_line = "";
				var dropEvent = event.GetDragAndDropEvent();
				var received = dropEvent.GetDestination();
				var source = dropEvent.GetSource();
				var source2D = null;
				if (global_InstanceOf(source, 'Libraries.Interface.Item2D')) {
					source2D = global_CheckCast(source, "Libraries.Interface.Item2D");
					while (!((global_InstanceOf(source2D, 'Libraries.Interface.Controls.Blocks.Block') || (source2D == null)))) {
						source2D = source2D.GetParent();
					}
				}
				if ((source2D == null)) {
					return originalRun.apply(this, arguments);
				}
				if (global_InstanceOf(received, 'Libraries.Interface.Controls.Blocks.CodeEditor')) {
					var editor = global_CheckCast(received, "Libraries.Interface.Controls.Blocks.CodeEditor");
					var y = (dropEvent.GetY() - editor.GetGlobalY());
					var line = editor.GetNavigationIndexAtY$quorum_number(y);
					if ((line >= editor.GetLineCount())) {
						line = (editor.GetLineCount() - 1);
					}
					var sourceBlocks = this.Get_Libraries_Interface_Behaviors_Blocks_CodeEditorAcceptDraggedBlockBehavior__sourceDragBehavior_().GetSourceBlocks();
					if ((sourceBlocks == null)) {
						return originalRun.apply(this, arguments);
					}
					if ((dropEvent.Get_Libraries_Interface_Events_DragAndDropEvent__eventType_() == dropEvent.Get_Libraries_Interface_Events_DragAndDropEvent__DRAGGING_CONTINUED_())) {
						if ((this.Get_Libraries_Interface_Behaviors_Blocks_CodeEditorAcceptDraggedBlockBehavior__sourceDragBehavior_().IsDraggingBlocks() == false)) {
							return originalRun.apply(this, arguments);
						}
						if ((line != this.Get_Libraries_Interface_Behaviors_Blocks_CodeEditorAcceptDraggedBlockBehavior__lastCandidateLine_())) {
							if ((editor.CanAcceptPlaceholdersAtNavigationIndex$quorum_integer(line) == false)) {
								if (editor.HasPlaceholders()) {
									//editor.RemovePlaceholders();
								}
							}
							else if (editor.HasPlaceholders()) {
								//do a move event here
								extraData.internal_event_type = "DRAGGING";
								extraData.placeholder_new_line = line;
								shouldLog = true;
								//editor.MovePlaceholdersToNavigationIndex$quorum_integer(line);
							}
							else {
								var placeholders = new quorum_Libraries_Containers_Array_();
								var i = 0;
								while ((i < sourceBlocks.GetSize())) {
									if (sourceBlocks.Get$quorum_integer(i).IsPlaceholder()) {
										placeholders.Add$quorum_Libraries_Language_Object(sourceBlocks.Get$quorum_integer(i));
									}
									else {
										placeholders.Add$quorum_Libraries_Language_Object(sourceBlocks.Get$quorum_integer(i).CopyToPlaceholder());
									}
									i = (i + 1);
								}
								//do a move event here
								extraData.internal_event_type = "DRAGGING";
								extraData.placeholder_new_line = line;
								shouldLog = true;
								//editor.InsertPlaceholdersAtNavigationIndex$quorum_integer$quorum_Libraries_Containers_Array(line, placeholders);
							}
							this.lastCandidateLine = line;
						}
					}
					else if ((dropEvent.Get_Libraries_Interface_Events_DragAndDropEvent__eventType_() == dropEvent.Get_Libraries_Interface_Events_DragAndDropEvent__DRAGGED_OFF_DESTINATION_())) {
						if (editor.HasPlaceholders()) {
							//editor.RemovePlaceholders();
						}
						this.lastCandidateLine = -2;
					}
					else if ((dropEvent.Get_Libraries_Interface_Events_DragAndDropEvent__eventType_() == dropEvent.Get_Libraries_Interface_Events_DragAndDropEvent__DRAGGED_ONTO_DESTINATION_())) {
					}
					else if ((dropEvent.Get_Libraries_Interface_Events_DragAndDropEvent__eventType_() == dropEvent.Get_Libraries_Interface_Events_DragAndDropEvent__DROPPED_())) {
						if ((sourceBlocks.IsEmpty() == false)) {
							var firstBlock = sourceBlocks.GetFromFront();
							var lastBlock = sourceBlocks.GetFromEnd();
							var toInsert = "";
							var environment = firstBlock.GetBlockEnvironment();
							if ((environment != null)) {
								if (((firstBlock == lastBlock) && firstBlock.IsPlaceholder())) {
									toInsert = (firstBlock.GetPlaceholderText() + toInsert.GetLineFeed());
								}
								else {
									toInsert = (environment.GetCodeBetween$quorum_integer$quorum_integer(firstBlock.GetStartIndex(), lastBlock.GetEndIndex()) + toInsert.GetLineFeed());
								}
								this.lastCandidateLine = -2;
								if (editor.HasPlaceholders()) {
									//Do a drop event here
									extraData.internal_event_type = "DROPPED";
									shouldLog = true;
									//editor.ConvertPlaceholdersToBlocks$quorum_text(toInsert);
								}
							}
							sourceBlocks = null;
							//this.Get_Libraries_Interface_Behaviors_Blocks_CodeEditorAcceptDraggedBlockBehavior__sourceDragBehavior_().Reset();
						}
					}
				}
				if (event.dragEvent.eventType = event.dragEvent.DRAGGING_BEGAN) {
					console.log("DRAGGING BEGAN")
					extraData.internal_event_type = "DRAGGING_BEGAN";
					shouldLog = true;
				}
				
			} else if (event.gestureEvent) {
				shouldLog = true;
				let finger_count = ""
				if (event.gestureEvent.eventType = event.gestureEvent.UP) {
					extraData.internal_event_type = "UP";
				} else if (event.gestureEvent.eventType = event.gestureEvent.DOWN) {
					extraData.internal_event_type = "DOWN";
				} else if (event.gestureEvent.eventType = event.gestureEvent.LEFT) {
					extraData.internal_event_type = "LEFT";
				} else if (event.gestureEvent.eventType = event.gestureEvent.RIGHT) {
					extraData.internal_event_type = "RIGHT";
				} else if (event.gestureEvent.eventType = event.gestureEvent.SINGLE_TAP) {
					extraData.internal_event_type = "SINGLE_TAP";
				} else if (event.gestureEvent.eventType = event.gestureEvent.DOUBLE_TAP) {
					extraData.internal_event_type = "DOUBLE_TAP";
				}
				extraData.finger_count = event.gestureEvent.maxFingerCount;
				
			}
			if (shouldLog)
				logEvent(behaviorEventMap[behavior.prototype?.constructor.name], extraData);
            return originalRun.apply(this, arguments); // Execute original function
        };

        behavior["Run$quorum_Libraries_Interface_Events_BehaviorEvent"]._isWrapped = true;
    }

    function wrapAllBehaviors() {
        let foundAll = true;

        [["defaultTable", true], ["Chart", false], ["CodeEditor", false]].forEach(([source, isDefault]) => {
            if (!behaviorsWrapped[source]) {
                const behaviorsArray = getBehaviorsFromTable(source, isDefault);
                if (behaviorsArray) {
                    console.log(`🔍 Wrapping behaviors from '${source}'`);
                    behaviorsArray.forEach(wrapRunFunction);
                    behaviorsWrapped[source] = true;
                } else {
                    foundAll = false;
                }
            }
        });

        if (foundAll) {
            console.log("✅ All behavior sources have been wrapped!");
            return true;
        }
        return false;
    }

    function observeForActiveGame() {
        console.log("⏳ Waiting for all behavior sources to be available...");

        const observerInterval = setInterval(() => {
            if (wrapAllBehaviors()) clearInterval(observerInterval);
        }, 500);
    }

    window.trackQuorumBehaviors = observeForActiveGame;
})();
*/










