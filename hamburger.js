const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const main = document.querySelector("main");

const closeMenu = () => {
  if (hamburger.classList.contains("is-active")) {
    hamburger.classList.remove("is-active");
    navLinks.classList.remove("show-nav");
  }
};

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navLinks.classList.toggle("show-nav");
});

main.addEventListener("click", closeMenu);
