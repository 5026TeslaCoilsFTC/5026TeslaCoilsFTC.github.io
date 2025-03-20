let intro = document.querySelector('.intro');
let splashLogo = document.querySelector('.logoa'); // Splash screen logo
let mainLogo = document.querySelector('.logo'); // Main page logo
let logospan = document.querySelectorAll('.intro span');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        // Animate spans if they exist
        logospan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });

        // Animate the splash logo
        setTimeout(() => {
            splashLogo.classList.add('active'); // Add animation class to splash logo
        }, 800); // Slight delay after spans appear

        setTimeout(() => {
            logospan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('leave');
                }, (idx + 1) * 50);
            });

            splashLogo.classList.add('leave'); // Make splash logo fade

        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh'; // Remove splash screen
            mainLogo.classList.add('active'); // Ensure main logo appears
        }, 2300);
    });
});
