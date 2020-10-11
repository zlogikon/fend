/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
//Create list of sections
let newTarget = "";
let navItems = "";
const sections = document.querySelectorAll("section");
const navbarList = document.querySelector("#navbar__list");
const topButton = document.querySelector("#topButton");
const navMenu = document.querySelector("#navMenu");





/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *


*/



// build the nav
buildNav = () => {
  for (section of sections){
    let id = section.id;
    let dataName = section.dataset.name;
    navItems += `<li><a class="menu__link" data-target="${id}" href="#${id}">${dataName}</a></li>`;
  }
  return buildNav;
};
buildNav();

navbarList.insertAdjacentHTML('beforeend', navItems);


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

navBarClick = (ev) => {
  event.preventDefault();
  newTarget = document.querySelector(`#${ev.target.dataset.target}`);;
  scrollingTo(newTarget);
};




navbarList.addEventListener("click", navBarClick);


scrollingTo = (target) => {
  //let scrollTarget = document.getElementById(target);
  //console.log(target.offsetTop);
  target.scrollIntoView({behavior: 'smooth'});
};




topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop < 435) {
    topButton.style.display = "none";
  }
  else {
    topButton.style.display = "block";
  }
});


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click



// Set sections as active
