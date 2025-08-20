let count = 9;
const targetClicks = 37; 
const redirectPage = 'https://caclne.github.io/site/SpaceAge/37.html'; 

const externalButton = document.getElementById('externalButton');
const clickCountSpan = document.getElementById('clickCount');

externalButton.addEventListener('click', () => {
    count++;
    clickCountSpan.textContent = count;

    if (count >= targetClicks) {
        window.location.href = redirectPage;
    }
});
