
let clickCount = 0;
const targetClicks = 9; 
const redirectPage = "9.html"; 

const externalButton = document.getElementById('externalButton');
const clickCountSpan = document.getElementById('clickCount');

externalButton.addEventListener('click', () => {
    count++; 
    clickCountSpan.textContent = count;

    if (count >= targetClicks) {
        window.location.href = 9.html;
    }
});
