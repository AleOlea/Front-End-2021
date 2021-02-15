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

 const navBar = document.getElementById("navbar__list");
 const sections = document.getElementsByTagName("section");
 let activeIndex = sections.length-1;
 let navLinks  = [];

      

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function addNavItems (sections){
    for(let i=0; i< sections.length; i++){
        let section= sections[i]
        let navItem = document.createElement("li");
        let navLink = document.createElement("a");
        navLink.innerText = `Section ${i+1}`;
        /*navLink.innerText = section.getElementsByTagName("h2")[0].innerText;*/
       /* navLink.href = `#${section.id}`;*/
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

// build the nav

addNavItems(sections)
// Add class 'active' to section when near top of viewport
document.addEventListener("scroll", function() {
activeIndex=sections.length-1;
 while (activeIndex >= 0 && sections[activeIndex].offsetTop > window.scrollY -100){
     for(let i=0; i < sections.length; i++){
         sections[i].style= "";  
    }
sections[activeIndex].style= "background-color: pink"
activeIndex -= 1;
 }

   
})

// Scroll to anchor ID using scrollTO event
for(let i= 0; i < sections.length; i++ ){
    navLinks[i].addEventListener("click", function(){
        window.scrollTo({left: 0, top: sections[i].offsetTop, behavior: "smooth"})
    });

}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 


//ejemplo: mainHeading.appendChild(newSpanElement); clase add new page content//


// Scroll to section on link click

// Set sections as active
