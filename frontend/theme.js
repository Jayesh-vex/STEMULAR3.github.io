// theme.js - Shared across all pages

// Instant application before DOM finishes loading to prevent screen flash
(function() {
    const savedTheme = localStorage.getItem('stemular-theme') || 'standard';
    if (savedTheme === 'dark') document.documentElement.classList.add('dark-theme');
    if (savedTheme === 'light') document.documentElement.classList.add('light-theme');
})();

document.addEventListener("DOMContentLoaded", () => {
    const themeSelectors = document.querySelectorAll('.theme-selector');
    const savedTheme = localStorage.getItem('stemular-theme') || 'standard';

    const applyTheme = (theme) => {
        document.documentElement.classList.remove('dark-theme', 'light-theme');
        document.body.classList.remove('dark-theme', 'light-theme');
        
        if (theme === 'dark') {
            document.documentElement.classList.add('dark-theme');
            document.body.classList.add('dark-theme');
        } else if (theme === 'light') {
            document.documentElement.classList.add('light-theme');
            document.body.classList.add('light-theme');
        }
        
        localStorage.setItem('stemular-theme', theme);
    };

    // Re-verify on DOM load
    applyTheme(savedTheme);

    // Attach event listeners if the Themes dropdown exists on this page
    themeSelectors.forEach(selector => {
        selector.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedTheme = e.currentTarget.getAttribute('data-theme');
            applyTheme(selectedTheme);
        });
    });
});