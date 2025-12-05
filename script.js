window.addEventListener('load', () => {
    const splashDuration = 2500; // Match animation duration

    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        const main = document.getElementById('main-screen');

        // Fade out splash
        splash.style.transition = 'opacity 1s';
        splash.style.opacity = 0;

        setTimeout(() => {
            splash.style.display = 'none';
            main.style.display = 'flex';
        }, 1000);

    }, splashDuration);
});
