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
    const width = window.screen.width;
    const height = window.screen.height;
    const devicePixelRatio = window.devicePixelRatio || 1;

    // ✅ Common device types with estimated PPI values
    if (width <= 768) return 163; // Small phones
    if (width <= 1080) return 220; // Large phones & small tablets
    if (width <= 1440) return 160; // Laptops & normal monitors
    if (width <= 1920) return 110; // Standard 1080p monitors
    if (width >= 2560 && width < 3440) return 110; // ✅ 1440p monitors
    if (width >= 3440 && width < 5120) return 110; // ✅ Ultrawide monitors like 3440x1440
    if (width >= 5120) return 140; // 5K & Retina displays

    return 100 * devicePixelRatio; // Fallback estimate
}



// ✅ Generic function to collect user/browser data for any event type
function getUserInfo(eventType, extraData = {}) {
    const browserInfo = getBrowserDetails(); // Get browser name & version

    // Get pixel dimensions
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    
    // Get estimated PPI (common values based on device type)
    const estimatedPPI = estimatePPI();

    // Calculate approximate screen size (in inches)
    const screenSizeInches = estimatedPPI 
        ? Math.sqrt(screenWidth ** 2 + screenHeight ** 2) / estimatedPPI 
        : null; // Fallback if PPI is unknown
		
    return {
        uuid: uuid,
        user_agent: navigator.userAgent, // Keeping raw userAgent for reference
        browser: browserInfo.browser_name,
        browser_version: browserInfo.browser_version,
        os: getOS(),
        device_type: getDeviceType(),
        language: navigator.language,
        time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        country: "N/A", // Country detection may require an external service
        event_type: eventType,
        page_url: window.location.href,
        screen_resolution: `${window.screen.width}x${window.screen.height}`,
        screen_size_inches: screenSizeInches ? screenSizeInches.toFixed(1) : "unknown", // Store rounded inches
        client_timestamp: new Date().toISOString(),
        extra_data: extraData
    };
}

function getBrowserDetails() {
    const ua = navigator.userAgent;
    const match = ua.match(/(Chrome|Firefox|Safari|Edge|Opera|OPR|Brave|Vivaldi|SamsungBrowser)\/([\d.]+)/i);

    if (match) {
        return {
            browser_name: match[1],
            browser_version: match[2]
        };
    }

    return { browser_name: "Unknown", browser_version: "Unknown" };
}

// ✅ Detect OS
function getOS() {
    const platform = navigator.platform.toLowerCase();
    if (platform.includes("win")) return "Windows";
    if (platform.includes("mac")) return "MacOS";
    if (platform.includes("linux")) return "Linux";
    if (platform.includes("iphone") || platform.includes("ipad")) return "iOS";
    if (platform.includes("android")) return "Android";
    return "Unknown";
}

// ✅ Detect Device Type
function getDeviceType() {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("mobile")) return "Mobile";
    if (ua.includes("tablet")) return "Tablet";
    return "Desktop";
}

// ✅ Function to send data to the logging API
function logEvent(eventType, extraData = {}) {
    // ✅ Extract element_id and element_type first
    const elementId = extraData.element_id || null;
    const elementType = extraData.element_type || null;

    // ✅ Remove them from extraData so they don’t get duplicated inside JSON
    const { element_id, element_type, ...cleanExtraData } = extraData;

    // ✅ Generate the event data
    const eventData = getUserInfo(eventType, cleanExtraData);

    // ✅ Add extracted element_id and element_type to the final object
    eventData.element_id = elementId;
    eventData.element_type = elementType;

    console.log(`Logging '${eventType}' event:`, eventData); // Debugging output
    fetch("http://localhost:3001/experiment-api/log_event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData)
    })
    .then(response => response.json())
    .then(data => console.log("✅ Event logged:", data))
    .catch(error => console.error("❌ Logging error:", error));
}

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

			// ✅ Add ARIA attributes to extraData only if they exist
			const enrichedExtraData = {
				...(ariaLabel && { aria_label: ariaLabel }),
				...(ariaDescription && { aria_description: ariaDescription })
			};

            // ✅ Log the focus event
            logEvent("focus", {
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
    parent_element.addEventListener("touchend", (event) => handleTap(event));
    parent_element.addEventListener("dblclick", (event) => logInteraction(event, "dbl_tap"));

    // ✅ Drag & Drop
    parent_element.addEventListener("dragstart", (event) => logInteraction(event, "drag"));
    parent_element.addEventListener("drop", (event) => logInteraction(event, "drop"));

    // ✅ Swipe Handling
    let touchStartX = 0, touchStartY = 0, touchCount = 0;

    parent_element.addEventListener("touchstart", (event) => {
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
        touchCount = event.touches.length; // Number of fingers
    });

    parent_element.addEventListener("touchmove", (event) => {
        if (event.touches.length !== touchCount) return; // Only track if same number of fingers

        let touchEndX = event.touches[0].clientX;
        let touchEndY = event.touches[0].clientY;
        let deltaX = touchEndX - touchStartX;
        let deltaY = touchEndY - touchStartY;

        let direction = "";
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            direction = deltaX > 0 ? "right" : "left";
        } else {
            direction = deltaY > 0 ? "down" : "up";
        }

        let eventType = `${touchCount}_swipe_${direction}`;
        logInteraction(event, eventType);
    });

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

    // ✅ Add ARIA attributes to extraData only if they exist
    const enrichedExtraData = {
        ...(ariaLabel && { aria_label: ariaLabel }),
        ...(ariaDescription && { aria_description: ariaDescription }),
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
                }
            }
        });
    });

    // ✅ Start observing changes in QuorumUIContainer
    observer.observe(quorumContainer, { childList: true });

    console.log("🔍 Watching for Canvas inside QuorumUIContainer...");
}



