// RESPONSIV  NAVBAR
function toggleNavbar() {
  document.getElementById("navbar-responsive").classList.toggle("open");
}

document.getElementById("menu-btn").addEventListener("click", toggleNavbar);

// HEADER FIXED
// Get the element by its ID
var myElement = document.getElementById("myDiv");

// Add the 'fixed' class when the user scrolls beyond 45.6px
window.addEventListener("scroll", function () {
  if (window.scrollY > 45.6) {
    myElement.classList.add("fixed");
  } else {
    myElement.classList.remove("fixed");
  }
});
window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}
