let intro = document.querySelector('.intro');
let logo = document.querySelector('.logoa'); // Select the logo
let logospan = document.querySelectorAll('.intro span');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        // Animate spans if they exist
        logospan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });

        // Animate the logo
        setTimeout(() => {
            logo.classList.add('active'); // Add animation class to the logo
        }, 800); // Slight delay after spans appear

        setTimeout(() => {
            logospan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            });

            logo.classList.add('fade'); // Make the logo fade too

        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh'; // Remove splash screen
        }, 2300);
    });
});
