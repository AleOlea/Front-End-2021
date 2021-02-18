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
 */

// Define Global Variables
//get "ul"
const navBar = document.getElementById("navbar__list");
//get tag "section"
const sections = document.getElementsByTagName("section");
//create 4 sections.
let activeIndex = sections.length - 1;
// To get the links
let navLinks = [];

/**
 * End Global Variables
 * Start Helper Functions
*/

function addNavItems(sections) {
    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        let navItem = document.createElement("li");
        let navLink = document.createElement("a");
        navLink.innerText = `Section ${i + 1}`;
        navItem.appendChild(navLink);
        navBar.appendChild(navItem);
        navLinks.push(navLink);
    }
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav call the function

addNavItems(sections);

// Add class 'active' to section when near top of viewport

document.addEventListener("scroll", function (e) {
    e.preventDefault();
    activeIndex = sections.length - 1;
    while (activeIndex >= 0 && sections[activeIndex].offsetTop > window.scrollY - 100) {
        for (let i = 0; i < sections.length; i++) {
            sections[i].classList.remove("active");
        }
        sections[activeIndex].classList.add("active");

        activeIndex -= 1;//important! to avoid infinite loop
    }
})

for (let i = 0; i < sections.length; i++) {
    navLinks[i].addEventListener("click", function (e) {
        e.preventDefault();
        window.scroll({ left: 0, top: sections[i].offsetTop, behavior: "smooth" })
    });
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
