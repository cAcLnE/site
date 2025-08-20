let count = 0; // Initialize the counter variable

// Get references to the HTML elements
const clickButton = document.getElementById('clickButton');
const clickCountSpan = document.getElementById('clickCount');

// Add an event listener to the button
clickButton.addEventListener('click', () => {
    count++; // Increment the counter
    clickCountSpan.textContent = count; // Update the displayed count
});
