const btnDropDown = document.querySelector(".js-btn-dropdown");
const dropDown = document.querySelector(".js-dropdown");

function openDropdown(event) {
  event.preventDefault();
  dropDown.classList.toggle("active");
}
btnDropDown.addEventListener("click", openDropdown);
dropDown.addEventListener("mouseleave", openDropdown);

const header = document.getElementById("js-header");
const menuIcon = document.querySelector(".js-icon-mobile");
function fixedMenu() {
  if (scrollY > 80) {
    header.classList.add("fixed-menu");
    menuIcon.src = "../img/btn-mobile-color.svg";
  } else {
    header.classList.remove("fixed-menu");
    menuIcon.src = "../img/btn-mobile.svg";
  }
}

document.addEventListener("scroll", fixedMenu);

const btnMenu = document.getElementById("js-btn-menu-mobile");
const overlayMenu = document.querySelector(".js-overlay");

function openMenuMobile() {
  document.documentElement.classList.toggle("menu-opened");
}

btnMenu.addEventListener("click", openMenuMobile);
overlayMenu.addEventListener("click", openMenuMobile);
