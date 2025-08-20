let count = 0;
const targetClicks = 10; 
const redirectPage = 'https://caclne.github.io/site/SpaceAge/1972.html'; 

const externalButton = document.getElementById('externalButton');
const clickCountSpan = document.getElementById('clickCount');

externalButton.addEventListener('click', () => {
    count++;
    clickCountSpan.textContent = count;

    if (count >= targetClicks) {
        window.location.href = redirectPage;
    }
});
