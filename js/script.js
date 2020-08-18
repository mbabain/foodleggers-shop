let links = document.querySelectorAll('.section-header-anchor-link');
const wrapper = document.querySelector('.section-header-anchor-links-wrapper');
const hamburgerButton = document.querySelector('.section-header-main-hamburger');
const hamburgerBar1 = document.getElementById('bar1');
const hamburgerBar2 = document.getElementById('bar2');
const hamburgerBar3 = document.getElementById('bar3');
const hamburgerBackground = document.querySelector('.hamburger-background');
const menuTel = document.querySelector('.section-header-main-tel');
const menuMail = document.querySelector('.section-header-main-mail');
const helpLinksWrapper = document.querySelector('.section-header-help-links .section-inner');
const helpLinks = document.querySelector('.section-header-help-links');
const helpLinkMenu = document.querySelector('.section-header-help-link--menu');

wrapperMaxWidth();

function wrapperMaxWidth() {
    let allWidth = 0;
    for (i = 0; i < links.length; i++) {
        if (document.documentElement.clientWidth > 1239) {
            allWidth += parseInt(getComputedStyle(links[i]).width, 10) + 80;
        } else if (document.documentElement.clientWidth > 446) {
            allWidth += parseInt(getComputedStyle(links[i]).width, 10) + 60;
        } else if (document.documentElement.clientWidth <= 446) {
            allWidth += parseInt(getComputedStyle(links[i]).width, 10) + 40;
        }
    }
    wrapper.style.minWidth = allWidth + 'px';
};

function hamburgerToggle() {
    hamburgerBar1.classList.toggle('active-bar-1');
    hamburgerBar2.classList.toggle('active-bar-2');
    hamburgerBar3.classList.toggle('active-bar-3');
    hamburgerBackground.classList.toggle('background-active');
    menuTel.classList.toggle('active--tel-and-mail');
    menuMail.classList.toggle('active--tel-and-mail');
    helpLinksWrapper.classList.toggle('active--helper-links');
    helpLinks.classList.toggle('active--helper-links');
    helpLinkMenu.classList.toggle('active--helper-links');
}

function hamburgerRemove() {
    hamburgerBar1.classList.remove('active-bar-1');
    hamburgerBar2.classList.remove('active-bar-2');
    hamburgerBar3.classList.remove('active-bar-3');
    hamburgerBackground.classList.remove('background-active');
    menuTel.classList.remove('active--tel-and-mail');
    menuMail.classList.remove('active--tel-and-mail');
    helpLinksWrapper.classList.remove('active--helper-links');
    helpLinks.classList.remove('active--helper-links');
    helpLinkMenu.classList.remove('active--helper-links');
}

window.addEventListener('resize', wrapperMaxWidth);
window.addEventListener('orientationchange', wrapperMaxWidth);

hamburgerButton.addEventListener('click', hamburgerToggle);

window.addEventListener('scroll', hamburgerRemove);