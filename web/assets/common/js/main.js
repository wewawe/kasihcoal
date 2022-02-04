/* Navbar transparent */
var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 50) {
    nav.classList.add("bg-dark", "shadow");
  } else {
    nav.classList.remove("bg-dark", "shadow");
  }
});

/* AOS Animation*/
AOS.init({
  easing: "ease-out-back",
  duration: 1000,
});
