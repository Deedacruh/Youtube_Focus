const toggle = document.getElementById("toggle");
const statusText = document.getElementById("status");
function showStatus(enabled) {
    toggle.checked = enabled;
    
    if (enabled) {
        statusText.textContent = "Enabled"
    }
    else {
        statusText.textContent = "Disabled"
    }
}
chrome.storage.sync.get("enabled", function(data) {

    if (data.enabled === true) {
        showStatus(true);
    }
    else {
        showStatus(false);
    }
});

toggle.addEventListener("change", function() {
    const enabled = toggle.checked;

    chrome.storage.sync.set({ enabled: toggle.checked });

    showStatus(toggle.checked);
});