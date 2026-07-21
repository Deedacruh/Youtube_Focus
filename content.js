let video = null;

function getComments() {
    return document.querySelector("#comments");
}
function updateFocusMode() {
    video = document.querySelector("video");

    if (!video) return;

    const comments = getComments();

    chrome.storage.sync.get("enabled", function(data) {
        const enabled = data.enabled !== false;

        if (!comments) return;

        if (!enabled) {
            comments.style.display = "";
            return;
        }

        if (video.paused) {
            comments.style.display = "";
        }
        else {
            comments.style.display = "none";
        }
    });
}

function setupVideoListeners() {
    video = document.querySelector("video");

    if (!video) {
        setTimeout(setupVideoListeners, 1000);
        return;
    }

    video.addEventListener("play", updateFocusMode);
    video.addEventListener("pause", updateFocusMode);

    updateFocusMode();
}

setupVideoListeners();

setInterval(updateFocusMode, 1000);