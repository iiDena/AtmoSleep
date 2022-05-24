// Bevægelse på baggrunds billede

let stjerner = document.getElementById('stjerner');
let sol = document.getElementById('sol');
let land = document.getElementById( 'land');


window.addEventListener('scroll', function(){
  let value = window.scrollY;
  stjerner.style.left = value * 0.25 + 'px';
  sol.style.top = value * 1.05 + 'px';
 
 
})

// Burger menu og dropdown
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

 


