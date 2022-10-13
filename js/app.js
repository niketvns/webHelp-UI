let menu = document.querySelector(".mobile .nav-right > img");
let loader = document.querySelector(".loader > img");
let closeNav = document.querySelector(".close-nav > img");
let closeNavAnyWay = document.querySelector(".left-nav-content");
let slideBar = document.querySelector(".nav-content");


const menuBar = () => {
    slideBar.style.display = "flex";
}
const closeMenu = () => {
    slideBar.style.display = "none";
}
menu.addEventListener("click", menuBar);
closeNav.addEventListener("click", closeMenu);
closeNavAnyWay.addEventListener("click", closeMenu);