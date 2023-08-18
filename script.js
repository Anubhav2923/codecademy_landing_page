// Get a reference to the navbar element
const navbar = document.querySelector('.navbar');

// Function to toggle the "scrolled class on the navbar"
function toggleNavbarColor(){
    if(window.scrollY>0){
        navbar.classList.add('scrolled');
    }
    else{
        navbar.classList.remove('scrolled');
    }
}

//Attach the scroll event listener
window.addEventListener('scroll',toggleNavbarColor);