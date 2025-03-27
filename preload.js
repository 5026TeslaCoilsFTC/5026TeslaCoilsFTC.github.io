window.addEventListener("load", function () {
    let preloader = document.getElementById("preloader");

    if (preloader) {
        preloader.style.opacity = "0"; // Fade out
        setTimeout(() => {
            preloader.style.display = "none"; // Hide after fade
            document.getElementById("content").style.display = "block"; // Show content
        }, 1000); // Wait for fade-out effect
    }
});
 