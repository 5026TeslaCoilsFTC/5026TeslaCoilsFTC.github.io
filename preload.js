window.addEventListener("load", function () {
    console.log("Page has loaded, attempting to hide preloader...");

    let preloader = document.getElementById("preloader");
    let content = document.getElementById("content");

    if (!preloader || !content) {
        console.error("Preloader or content div not found!");
        return;
    }

    // Start fade out
    preloader.style.opacity = "0"; 
    console.log("Preloader fade out started.");

    // After fade, remove preloader and show content
    setTimeout(() => {
        preloader.style.display = "none"; 
        content.style.display = "block";
        console.log("Preloader hidden, content displayed.");
    }, 1000);
});
