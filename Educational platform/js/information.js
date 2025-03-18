document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navigation = document.querySelector('.navigation');

    burgerMenu.addEventListener('click', () => {
        navigation.classList.toggle('active');
    });
});