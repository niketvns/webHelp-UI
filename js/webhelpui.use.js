let menu = document.querySelector(".mobile .nav-right > img");
let closeNav = document.querySelector(".close-nav .close-icon");
let closeNavAnyWay = document.querySelector(".left-nav-content");
let slideBar = document.querySelector(".nav-content");
let loader = document.querySelector(".loader");
let leftDocs = document.querySelector(".left-docs");
let docsCloseOutline = document.querySelector(".docs-close-outline");
let docsMenuOutline = document.querySelector(".docs-menu-outline");
let rightDocs = document.querySelector(".right-docs");

if (loader) {
    setTimeout(() => {
        loader.style.display = "none"
    }, 3000)
}


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


if (menu) {
    menu.addEventListener("click", menuBar);
    closeNav.addEventListener("click", closeMenu);
    closeNavAnyWay.addEventListener("click", closeMenu);
}
if (docsMenuOutline) {
    docsMenuOutline.addEventListener("click", showDocsMenu);
    docsCloseOutline.addEventListener("click", closeDocsMenu);
    rightDocs.addEventListener("click", closeDocsMenu);
}


let left_menu = document.getElementById("left-header-menu");
let li;
if (left_menu) {
    li = left_menu.getElementsByTagName("li");
}
let docsComponent = document.querySelectorAll(".right-docs .docs-component");


const docsVisibility = (val) => {
    let current = document.querySelector(".right-docs .visible");
    current.className = current.className.replace("visible", "invisible");
    docsComponent[val].className = docsComponent[val].className.replace("invisible", "visible");
    rightDocs.scroll(0, 0)
}


if (li) {
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
}


// Alert Component 


let alertComponent = document.querySelectorAll("div.alert");
let alertComponentClose = document.querySelectorAll("div.alert span");

const closeAlert = (ind) => {
    alertComponent[ind].style.display = "none";
}

if (alertComponentClose) {
    for (let i = 0; i < alertComponentClose.length; i++) {
        alertComponentClose[i].addEventListener("click", () => {
            let val = i;
            closeAlert(val);
        });
    }
}

// Showing Alert on button click 

let showAlertBtn = document.querySelector(".show-alert-btn")
if (showAlertBtn) {
    showAlertBtn.addEventListener("click", showAlert);
}

function showAlert() {
    let alertPreview = document.querySelector(".alert-invisible");
    alertPreview.style.display = "flex";
}


// Accordian

let accordianQue = document.querySelectorAll(".accordian-que");
let accordianAns = document.querySelectorAll(".accordian-ans");
let arrowAccordian = document.querySelectorAll(".accordian-que span");

const showAns = (ind) => {
    accordianAns[ind].style.display = "block";
    arrowAccordian[ind].style.transform = "rotate(180deg)";
    accordianQue[ind].style.backgroundColor = "#6488ff";
    accordianQue[ind].style.color = "white";
    return 1;
}
const closeAns = (ind) => {
    arrowAccordian[ind].style.transform = "rotate(0deg)";
    accordianAns[ind].style.display = "none";
    accordianQue[ind].style.backgroundColor = "white";
    accordianQue[ind].style.color = "#000000cc";
    return 0;
}

if (accordianQue) {
    for (let i = 0; i < accordianQue.length; i++) {
        let statusAcc = 0;
        accordianQue[i].addEventListener("click", () => {
            let val = i;
            if (statusAcc === 0) {
                statusAcc = showAns(val);
            } else {
                statusAcc = closeAns(val);
            }
        });
    }
}



// Login form 

let loginUserName = document.querySelector(".login-container #userName")
let loginPassword = document.querySelector(".login-container #password")
let loginBtn = document.querySelector(".login-container input[type='submit']")
let result = document.querySelector(".login-container .result")
let p = document.querySelector(".login-container p")


if (loginBtn) {
    loginBtn.addEventListener("click", checkPassword)
}

function checkPassword() {
    if (loginUserName.value.length != 0 && loginPassword.value.length != 0) {
        if (loginPassword.value.length < 8) {
            result.innerHTML = "Not Valid Password"
            result.style.color = "red"
            loginPassword.style.outline = "3px solid red"
            loginUserName.style.outline = "3px solid red"
            p.innerHTML = "❌ Length of Password Should be atleast 8"
            p.style.color = "red"
        } else {
            result.innerHTML = "<p><i><b>Success 👍</b></i></p>"
            result.style.color = "green"
            loginPassword.style.outline = "3px solid green"
            loginUserName.style.outline = "3px solid green"
            p.innerHTML = "✔️ Length of Password Should be atleast 8"
            p.style.color = "green"
        }
    }
}


// Navbar Component

let menuNavWHUI = document.querySelector(".mobile-nav .nav-right > img");
let navContents = document.querySelector("nav.mobile-nav .nav-content");
let navContentsAll = document.querySelector("nav.mobile-nav .nav-contents-all");
let closeNavIcon = document.querySelector(".mobile-nav .close-nav > img");

const showNavContents = () => {
    navContentsAll.style.display = "block";
}

if (menuNavWHUI) {
    menuNavWHUI.addEventListener('click', showNavContents);
}

if (closeNavIcon) {
    closeNavIcon.addEventListener('click', () => {
        navContentsAll.style.display = "none";
    })
}


// Loader Component

let WHILoader = document.querySelector(".whi-loader");

if (WHILoader) {
    setTimeout(() => {
        WHILoader.style.display = "none"
    }, 3000)
}

// Snackbar Component 

let successSnackbarWarning = document.querySelector('.success-snackbar-warning');
let errorSnackbarWarning = document.querySelector('.error-snackbar-warning');
let warnSnackbarWarning = document.querySelector('.warning-snackbar-warning');
let successWarnBtn = document.querySelector('.success-warn-btn');
let errorWarnBtn = document.querySelector('.error-warn-btn');
let warningWarnBtn = document.querySelector('.warning-warn-btn');

const showSnackbarWarning = (event) => {

    if (successWarnBtn === event.target) {
        successSnackbarWarning.style.display = "block";
        setTimeout(() => {
            successSnackbarWarning.style.display = 'none';
        }, 3000)
    } else if (errorWarnBtn === event.target) {
        errorSnackbarWarning.style.display = "block";
        setTimeout(() => {
            errorSnackbarWarning.style.display = 'none';
        }, 3000)
    } else if (warningWarnBtn === event.target) {
        warnSnackbarWarning.style.display = "block";
        setTimeout(() => {
            warnSnackbarWarning.style.display = 'none';
        }, 1000)
    }
}

if (successWarnBtn || errorWarnBtn || warningWarnBtn) {
    successWarnBtn.addEventListener('click', showSnackbarWarning)
    errorWarnBtn.addEventListener('click', showSnackbarWarning)
    warningWarnBtn.addEventListener('click', showSnackbarWarning)
}