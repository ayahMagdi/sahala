document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var navbar = document.getElementsByClassName('navbar')[0]; // Assuming there's only one .navbar element

        if (navbar) {
            if (window.scrollY >= 36) {
                navbar.style.top = '0';
            } else {
                navbar.style.top = '36px';
            }
        }
    });
});