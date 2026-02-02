window.addEventListener("load", function () {
    console.log("Page fully loaded, removing preloader and showing content...");

    let preloader = document.getElementById("preloader");
    let content = document.getElementById("content");

    if (!preloader || !content) {
        console.error("Preloader or content div not found!");
        return;
    }

    // Ensure visibility
    content.style.display = "block";
    content.style.opacity = "1";
    content.style.visibility = "visible";
    
    // Fade out preloader
    preloader.style.opacity = "0"; 
    setTimeout(() => {
        preloader.style.display = "none"; 
        console.log("Preloader hidden, content shown.");
    }, 1000);
});
