const menu = document.querySelector(".header__menu");
const nav = document.querySelector(".header__nav");
const buttonImage = document.querySelector(".header__hamburger");
const links = document.querySelectorAll(".header__link");
menu.addEventListener("click", () => {
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    buttonImage.src = "public/icon-close.svg";
  } else {
    buttonImage.src = "public/icon-hamburger.svg";
  }
});
Array.from(links).map((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    buttonImage.src = "public/icon-hamburger.svg";
  });
});
