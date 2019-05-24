const header = document.querySelector('header');
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const main = document.querySelector("main");
const sticky = header.offsetTop;



hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navLinks.classList.toggle("show-nav");
});

function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

window.addEventListener('scroll', myFunction);