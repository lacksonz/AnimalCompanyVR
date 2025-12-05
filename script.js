// Wait for splash animation to finish
window.addEventListener('load', () => {
    // Total animation time (max logo animation + delay)
    const splashDuration = 3000;

    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        const main = document.getElementById('main-screen');

        // Fade out splash screen
        splash.style.transition = 'opacity 1s';
        splash.style.opacity = 0;

        // Show main screen after fade
        setTimeout(() => {
            splash.style.display = 'none';
            main.style.display = 'flex';
        }, 1000);

    }, splashDuration);
});
