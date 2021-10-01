// Open and Close Menu Function for Mobile

const menu = document.querySelector('.menu-icon');
const menuDropdown = document.querySelector('.dropdown-toggle');
const menuClose = document.querySelector('.close-icon');
const links = document.querySelectorAll('.dropdown-toggle a');
menu.addEventListener('click', () => {
    menuDropdown.className += " show";
    menu.classList.add("hidden");
    menuClose.classList.add("show");   
});
links.forEach(link => {
link.addEventListener('click', () => {
    menuDropdown.classList.remove("show");
    menuClose.classList.remove("show");
    menu.classList.remove("hidden");
});})
menuClose.addEventListener('click', () => {
    menuDropdown.classList.remove("show");
    menuClose.classList.remove("show");
    menu.classList.remove("hidden");
});
// Highlight menu function
let lis = document.getElementsByTagName('li');
for (let i = 0; i < lis.length; i++) {
    const li = lis[i];
    li.parentNode.addEventListener('mouseover', () => {
        li.parentNode.classList.add('li-focus');
    });
}
for (let i = 0; i < lis.length; i++) {
    const li = lis[i];
    li.parentNode.addEventListener('mouseout', () => {
        li.parentNode.classList.remove('li-focus');
    });
}
// Product Description/Photo Display

const para = document.querySelectorAll('.project-photo p');
const photo = document.getElementsByClassName('photo');
const label = document.querySelectorAll('.photo-overlay h3');

const display = (h3) => {  h3.parentNode.parentNode.style.display = "none";
                           h3.parentNode.parentNode.nextElementSibling.style.display = "block";
}
label.forEach(h3 => {
h3.parentNode.addEventListener('mouseover', () => {
    display(h3);
});
});
const reverseDisplay = (h3) => {
    h3.parentNode.parentNode.style.display = "block";
    h3.parentNode.parentNode.nextElementSibling.style.display = "none";
}
label.forEach(h3 => {
    h3.parentNode.parentNode.addEventListener('mouseleave', () => {
        reverseDisplay(h3);
    });
    });

// SVG Animation Trigger
let svgs = document.getElementsByClassName('svg-anima');


for (let i = 0; i < svgs.length; i++) {
    const svg = svgs[i];
    svg.addEventListener('mouseover', () => {
        svg.style.animation = "grow 1s ease-out backwards";
})};


