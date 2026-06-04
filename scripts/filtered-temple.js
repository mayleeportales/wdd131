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

// Filtered temples 
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: 
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg",
  },
  {
    templeName: "St. George Utah",
    location: "St. George, Utah, United States",
    dedicated: "1877, April, 6",
    area: 110000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40435-main.jpg",
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 53997,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
  }
];

// cards containers
const templesContainer = document.querySelector("#temples");

function createTempleCard(filteredTemples) {
    templesContainer.innerHTML = "";
    filteredTemples.forEach((temple) => {
        const card = document.createElement("section");
        const name = document.createElement("h3");
        const location = document.createElement("p");
        const dedication = document.createElement("p");
        const area = document.createElement("p");
        const img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400");
        img.setAttribute("height", "250");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        templesContainer.appendChild(card);
    });
}

function getYear(temple) {
    return Number(temple.dedicated.split(",")[0]);
}

// menu filters
document.querySelector("#home").addEventListener("click", () => createTempleCard(temples));
document.querySelector("#old").addEventListener("click", () => 
    createTempleCard(temples.filter((t) => getYear(t) < 1900))
);

document.querySelector("#new").addEventListener("click", () => 
    createTempleCard(temples.filter((t) => getYear(t) > 2000))
);

document.querySelector("#large").addEventListener("click", () => 
    createTempleCard(temples.filter((t) => t.area > 90000))
);

document.querySelector("#small").addEventListener("click", () => 
    createTempleCard(temples.filter((t) => t.area < 10000))
);

createTempleCard(temples);