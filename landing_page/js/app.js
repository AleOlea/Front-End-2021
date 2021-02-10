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

const sections= document.getElementById("navbar__list");
let myList= document.createElement("li");
myList.id= "mylistOne";
const myList2= document.createElement("li");
myList2.id= "mylistTwo";
const myList3= document.createElement("li");
myList3.id= "mylistThree";
const myList4= document.createElement("li");
myList4.id= "mylistFour";

const link= document.createElement ("a");

myList.textContent = "Section One";
myList2.textContent= "Section Two"
myList3.textContent= "Section Three"
myList4.textContent= "About"

navbar__list.append(myList, myList2, myList3, myList4);


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 





//ejemplo: mainHeading.appendChild(newSpanElement); clase add new page content//


// Scroll to section on link click

// Set sections as active
