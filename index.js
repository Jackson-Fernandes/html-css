const botaoMenu = document.querySelector(".header-button__menu");
const sideMenu = document.querySelector('.side-menu');

botaoMenu.addEventListener("click", () => {

    sideMenu.classList.toggle("side-menu--actived");
})