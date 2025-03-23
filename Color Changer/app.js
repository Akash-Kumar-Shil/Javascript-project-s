document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const colorPicker = document.getElementById("color-picker");
  
    // Ensure the color picker exists before continuing
    if (colorPicker) {
      // Set the initial color value and apply it to the background
      const initialColor = colorPicker.value;
      body.style.backgroundColor = initialColor;
  
      // Update background color whenever the user selects a color
      colorPicker.addEventListener("input", (event) => {
        body.style.backgroundColor = event.target.value;
      });
    } else {
      console.error('Color picker element not found!');
    }
  });
  