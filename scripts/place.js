const temperature = 29;
const windSpeed = 12;

function calculateWindChill(t, v) {
    return 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);
}

const windChillElement = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    const result = calculateWindChill(temperature, windSpeed).toFixed(1);
    windChillElement.textContent = `${result} °C`;
} else {
    windChillElement.textContent = "N/A";
}

// footer
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;