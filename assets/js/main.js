const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav__links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
});


document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
    }
    );
}
);