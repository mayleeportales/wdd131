// Select the elements needed
const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");

// Define a function that toggles the menu
function toggleMenu() {
    navMenu.classList.toggle("open");
}

// Listen for clicks on the button and react
menuButton.addEventListener("click", toggleMenu);