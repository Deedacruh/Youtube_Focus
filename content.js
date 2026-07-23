let video = null;

function getComments() {
    return document.querySelector("#comments");
}
function getRecommendations() {
    return document.querySelector("#secondary");
}
function updateFocusMode() {
    video = document.querySelector("video");

    if (!video) return;

    const comments = getComments();
    const recommendations = getRecommendations();

    chrome.storage.sync.get("enabled", function(data) {
        const enabled = data.enabled !== false;

        if (!enabled) {
            if (comments) {
                comments.style.display = "";
            }

            if (recommendations) {
                recommendations.style.display = "";
            }

            return;
        }

        if (video.paused) {
            if (comments) {
                comments.style.display = "";
            }

            if (recommendations) {
                recommendations.style.display = "";
            }
        }
        else {
            if (comments) {
                comments.style.display = "none";
            }

            if (recommendations) {
                recommendations.style.display = "none";
            }
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