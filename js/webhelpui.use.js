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
    leftDocs.style.display = "flex";
}

const closeDocsMenu = () => {
    leftDocs.style.left = "-350px"
    docsCloseOutline.style.display = "none";
    docsMenuOutline.style.display = "block";
}


menu.addEventListener("click", menuBar);
closeNav.addEventListener("click", closeMenu);
closeNavAnyWay.addEventListener("click", closeMenu);
docsMenuOutline.addEventListener("click", showDocsMenu);
docsCloseOutline.addEventListener("click", closeDocsMenu);
rightDocs.addEventListener("click", closeDocsMenu);


let left_menu = document.getElementById("left-header-menu");
let li = left_menu.getElementsByTagName("li");
let docsComponent = document.querySelectorAll(".right-docs .docs-component");


const docsVisibility = (val) => {
    if (val < 6) {
        let current = document.querySelector(".right-docs .visible");
        current.className = current.className.replace("visible", "invisible");
        docsComponent[val].className = docsComponent[val].className.replace("invisible", "visible");
        rightDocs.scroll(0, 0)
    }
}

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function () {
        let current = left_menu.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += "active";
        closeDocsMenu();
        let val = i;
        docsVisibility(val)
    });
}