const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const main = document.querySelector("main");



hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navLinks.classList.toggle("show-nav");
});

