window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const profilePicture = document.getElementById('pp');

    // Get the bottom position of the profile picture
    const profileBottom = profilePicture.getBoundingClientRect().bottom;

    // Check if the profile picture is out of view
    if (profileBottom <= 0) {
        navbar.classList.add('fixed'); // Add the 'fixed' class
    } else {
        navbar.classList.remove('fixed'); // Remove the 'fixed' class
    }
});