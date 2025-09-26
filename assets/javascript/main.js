const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main_nav');

menuToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
    const isExpanded = mainNav.classList.contains('active');
    if (isExpanded) {
        menuToggle.innerHTML = '&#10005;'; // X
        menuToggle.setAttribute('aria-expanded', 'true');
    } else {
        menuToggle.innerHTML = '&#9776;'; // Hambúrguer
        menuToggle.setAttribute('aria-expanded', 'false');
    }
    });

    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        menuToggle.innerHTML = '&#9776;';
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});
