let menu = document.querySelector(".mobile .nav-right > img");
let closeNav = document.querySelector(".close-nav > img");
let closeNavAnyWay = document.querySelector(".left-nav-content");
let slideBar = document.querySelector(".nav-content");
let loader = document.querySelector(".loader");
let leftDocs = document.querySelector(".left-docs");
let docsCloseOutline = document.querySelector(".docs-close-outline");
let docsMenuOutline = document.querySelector(".docs-menu-outline");
let rightDocs = document.querySelector(".right-docs");

setTimeout(() => {
    loader.style.display = "none"
}, 3000)


const menuBar = () => {
    slideBar.style.display = "flex";
}
const closeMenu = () => {
    slideBar.style.display = "none";
}


const showDocsMenu = () => {
    leftDocs.style.left = "0px"
    docsCloseOutline.style.display = "block";
    docsMenuOutline.style.display = "none";
}

const closeDocsMenu = () => {
    leftDocs.style.left = "-300px"
    docsCloseOutline.style.display = "none";
    docsMenuOutline.style.display = "block";
}


menu.addEventListener("click", menuBar);
closeNav.addEventListener("click", closeMenu);
closeNavAnyWay.addEventListener("click", closeMenu);
docsMenuOutline.addEventListener("click", showDocsMenu);
docsCloseOutline.addEventListener("click", closeDocsMenu);
rightDocs.addEventListener("click", closeDocsMenu);