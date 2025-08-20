let count = 0; 


const externalButton = document.getElementById('externalButton');
const clickCountSpan = document.getElementById('clickCount');


externalButton.addEventListener('click', () => {
    count++; 
    clickCountSpan.textContent = count; 
});
