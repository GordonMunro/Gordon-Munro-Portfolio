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

const para = document.querySelectorAll('.project-photo p');
const photo = document.getElementsByClassName('photo');
const label = document.querySelectorAll('.photo-overlay h3');

const display = (h3) => {  h3.parentNode.parentNode.style.display = "none";
                           h3.parentNode.parentNode.nextElementSibling.style.display = "block";
}
label.forEach(h3 => {
h3.parentNode.addEventListener('mouseover', () => {
    setTimeout(display(h3), 3000);
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

let svg = document.getElementsByTagName('svg');

for (let i = 0; i < svg.length; i++) {
    const element = svg[i];
    element.addEventListener('mouseover', () => {
    element.style.animation = "grow 1s ease-out backwards";
})};

let lis = document.getElementsByTagName('li');
for (let i = 0; i < lis.length; i++) {
    const li = lis[i];
    li.addEventListener('mouseover', () => {
        li.parentNode.classList.add('li-focus');
    });
}
