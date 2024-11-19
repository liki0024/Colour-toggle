// script.js
const button = document.getElementById('toggleButton');

// Initialize variable to track the current color
let isPink = true;

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Toggle the background color
    document.body.style.backgroundColor = isPink ? 'blue' : 'pink';
    isPink = !isPink; // Flip the state
});

