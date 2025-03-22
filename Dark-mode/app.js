// Select the body element of the document
const body = document.body;

// Select the button element by its ID (modeBtn) to toggle themes
const modeBtn = document.getElementById("modeBtn");

// Initialize the theme variable, setting it to "day" by default
let theme = "day";

// Add an event listener to the mode button that listens for click events
modeBtn.addEventListener("click", () => {
    // If the current theme is "day", switch to "night" theme
    if(theme === "day") {
        body.style.backgroundColor = "var(--night)";  // Change background color to night color
        modeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';  // Change the button icon to a moon (night mode)
        modeBtn.style.color = "var(--moon)";  // Change button text color to a moon-related color
        theme = "night";  // Set theme to "night"
    }
    // If the current theme is "night", switch to "day" theme
    else if (theme === "night") {
        body.style.backgroundColor = "var(--day)";  // Change background color to day color
        modeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';  // Change the button icon to a sun (day mode)
        modeBtn.style.color = "var(--sun)";  // Change button text color to a sun-related color
        theme = "day";  // Set theme to "day"
    }
});
