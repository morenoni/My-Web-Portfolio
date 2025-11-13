window.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const firstSection = document.querySelector('#about');

    // Store the initial position of the navbar
    const navbarOffsetTop = navbar.offsetTop;

    window.addEventListener('scroll', function () {
        // Get the current scroll position
        const scrollPosition = window.scrollY;

        // Check if the page has been scrolled past the navbar's initial position
        if (scrollPosition >= navbarOffsetTop) {
            navbar.classList.add('fixed');
            firstSection.style.paddingTop = `${navbar.offsetHeight}px`; // Add padding equal to the navbar height
        } else {
            navbar.classList.remove('fixed');
            firstSection.style.paddingTop = '0'; // Remove the padding
        }
    });
});
