document.addEventListener("DOMContentLoaded", () => {
    // Add fade-in effect to elements
    document.querySelectorAll(".fade-in").forEach(el => el.classList.add("visible"));

    // Video background logic
    const video = document.getElementById("video-background");
    const sources = [
        "assets/videos/video1.mp4",
        "assets/videos/video2.mp4",
        "assets/videos/video3.mp4",
        "assets/videos/video4.mp4"
    ];
    let currentVideoIndex = 0;

    function playNextVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % sources.length;
        video.src = sources[currentVideoIndex];
        video.load(); // Ensure the new source is loaded
        video.play();
    }

    video.src = sources[currentVideoIndex];
    video.load(); // Ensure the initial source is loaded
    video.play();

    video.addEventListener("ended", playNextVideo);
});