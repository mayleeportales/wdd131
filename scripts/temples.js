// Get the current year and last modified

// current year
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear

// last modified
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;

// menu
const menuButton = document.getElementById("menu-button");
const navList = document.querySelector("nav ul");

menuButton.addEventListener("click", function() {
    navList.classList.toggle("open");

    if (navList.classList.contains("open")) {
        menuButton.textContent = "X";        
        menuButton.setAttribute("aria-label", "Close menu");

    } else {
        menuButton.textContent = "\u2630" //menu symbol
        menuButton.setAttribute("aria-label", "Open menu")
    }
})