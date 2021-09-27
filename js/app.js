const menu = document.querySelector('.menu-icon');
const menuDropdown = document.querySelector('.dropdown-toggle');
const menuClose = document.querySelector('.close-icon');
menu.addEventListener('click', () => {
    menuDropdown.className += " show";
    menu.classList.add("hidden");
    menuClose.classList.add("show");   
});

menuClose.addEventListener('click', () => {
    menuDropdown.classList.remove("show");
    menuClose.classList.remove("show");
    menu.classList.remove("hidden");
});

let svg = document.getElementsByTagName('svg');

for (let i = 0; i < svg.length; i++) {
    const element = svg[i];
    element.addEventListener('mouseover', () => {
    element.style.animation = "grow 1s ease-out backwards";
})};
