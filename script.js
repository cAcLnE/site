let count = 0; // Initialize the counter variable

// Get references to the HTML elements
const externalButton = document.getElementById('.externalButton');
const clickCountSpan = document.getElementById('clickCount');

// Add an event listener to the button
externalButton.addEventListener('click', () => {
    count++; // Increment the counter
    clickCountSpan.textContent = count; // Update the displayed count
});
