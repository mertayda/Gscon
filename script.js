const nav_button = document.querySelector(".nav__menu__btn");
const nav_links = document.querySelector(".nav__links");


nav_button.addEventListener("click", () => {
    nav_links.classList.toggle("show");
    

})