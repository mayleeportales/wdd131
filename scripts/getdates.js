// Get the current year 
const currentYear = new Date().getFullYear();

// Put current Year inside <span id="currentyear">
document.getElementById("currentyear").textContent = currentYear;

// Put lastModified inside <p id="lastModified">
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;