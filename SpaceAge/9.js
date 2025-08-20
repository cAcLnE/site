
let clickCount = 0;
const targetClicks = 9; 
const redirectPage = "9.html"; 

const externalButton = document.getElementById("externalButton");
const clickCount = document.getElementById("clickCount");

externalButton.addEventListener("click", () => {
    clickCount++;
    clickCount.textContent = clickCount;

    if (clickCount >= targetClicks) {
        window.location.href = 9.html;
    }
});
