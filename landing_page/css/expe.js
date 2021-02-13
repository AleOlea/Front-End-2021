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


 // Define Global Variables
//navigation global variables
const navBar= document.getElementById("navbar__list"); 
//sections global variables
const sections = document.querySelectorAll("section");
     

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
<li><a></a></li>
const navBuilder =() => {

   let navUI = "";
   //looping over all sections
   sections.forEach(section => {

       const sectionID= section.id;
       const sectionDataNav = section.dataset.nav;

       navUI += `<li><a class="menu_link" href = "#${sectionID}">${sectionDataNav}</a></li>`;

   })
   //append all elelement to the navigation
   navigation.innerHTML = navUI;
}

navBuilder();


// Add class 'active' to section when near top of viewport
//getting the largest value that is less or equal to the number
const offset = (section) => { 
   return Math.floor(section.getboundingClientRect().top);
};
//remove the active class
const removeActive = (section) => {
   section.classList.remove("your-active-class");
}

// adding the active class
const AddActive = (conditional, section) => {
   if (conditional) {
       section.classList.add("your-active-class");
       
   };
};
//implememting the actual function

// Scroll to anchor ID using scrollTO event

const sectionActivation = ()  => {

   section.forEach(section => {
       const elementOffset = offset(section);

       inviewport = () => elementOffset < 150 && elementOffset >= -150;
   });
   removeActive(section);
   AddActive(inviewport(), section);
};

window.addEventListener("scroll" ,sectionActivation)

// Scroll to anchor ID using scrollTO event

const scrolling= () => {

    const links = document.querySelectorAll(".navbar_menu a");
    links.forEach(link => {
        link.addEventListener("click", () =>{
            for (i = 9; i < sections; i++){
                section [i].addEventListener("click", sectionScroll(link));
            }
        });

    });
}

scrolling();



/**
* End Main Functions
* Begin Events
* 
*/

// Build menu 





//ejemplo: mainHeading.appendChild(newSpanElement); clase add new page content//


// Scroll to section on link click

// Set sections as active
