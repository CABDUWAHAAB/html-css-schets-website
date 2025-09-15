// Get elements
const burgerMenu = document.getElementById('burger-menu');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.header__href');

// Toggle menu function
function toggleMenu() {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Close menu function
function closeMenu() {
    burgerMenu.classList.remove('active');
    navMenu.classList.remove('active');
}

// Event listeners
burgerMenu.addEventListener('click', toggleMenu);

// Close menu when clicking on navigation links
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!burgerMenu.contains(e.target) && !navMenu.contains(e.target)) {
        closeMenu();
    }
});