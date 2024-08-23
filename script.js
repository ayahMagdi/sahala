document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var navbar = document.getElementsByClassName('navbar')[0]; // Assuming there's only one .navbar element

        if (navbar) {
            if (window.scrollY >= 36) {
                navbar.style.top = '0';
                navbar.style.boxShadow = '0 0 28px 0px rgba(0,0,0,.1)'
            } else {
                navbar.style.top = '36px';
                navbar.style.boxShadow = '0 0 0px 0px rgba(0,0,0,.0)'
            }
        }
    });
});