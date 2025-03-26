window.addEventListener("load", function () {
    let preloader = document.getElementById("preloader");

    // Fade out effect
    preloader.classList.add("hidden");

    // Wait for the transition to complete before hiding it completely
    setTimeout(() => {
        preloader.style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 1000); // Matches the CSS transition duration (1s)
});