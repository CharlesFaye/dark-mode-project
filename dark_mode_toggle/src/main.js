const sunIcon = document.querySelector('.fa-sun');
const html = document.documentElement;

const getTheme = localStorage.getItem('data');
document.addEventListener('DOMContentLoaded', () => {
    if (getTheme === 'dark') {
        html.classList.add('dark');
        sunIcon.classList.add('fa-moon');
    }
    else {
        html.classList.remove('dark');
    }
})
/**
 * Toggles the website's theme between light and dark modes.
 * Updates the HTML element's class, changes the icon, and stores the current theme in localStorage.
 *
 * @function
 * @returns {void}
 */
const toggleMode = () => {
    const theme = html.getAttribute('class');
    if (theme !== 'dark') {
        html.classList.add('dark'); 
        sunIcon.classList.remove('fa-sun');
        sunIcon.classList.add('fa-moon');
        localStorage.setItem('data', 'dark');
    }
    else {
        html.classList.remove('dark');
        sunIcon.classList.add('fa-sun');
        sunIcon.classList.remove('fa-moon');
        localStorage.setItem('data', 'light');
    }
             
}
sunIcon.addEventListener('click', toggleMode);