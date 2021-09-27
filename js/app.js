const menu = document.querySelector('.menu-icon');
const menuDropdown = document.querySelector('#myDropdown');
const menuClose = document.querySelector('.modal-close');
menu.addEventListener('click', () => {
    menuDropdown.className += " show";
});

menuClose.addEventListener('click', () => {
    menuDropdown.classList.remove("show");
});