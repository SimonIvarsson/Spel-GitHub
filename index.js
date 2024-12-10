// Hämtar texten för poängen för spelare 1 | Simon I
const currentText = document.getElementById("current-1");

// När knappen trycks så slumpas ett tal mellan 1-6  och ändrar poängen | Simon I
const roll_dice = document.getElementById("roll-dice");
let totalPoints = 1;
roll_dice.addEventListener("click", function(){
    var points = (Math.floor(Math.random() * 6) + 1);
    if (points === 1) {
        totalPoints = 0;
    } 
    else {
        totalPoints += points; 
    }
    currentText.textContent = "Current: " + totalPoints;
});

//Reset knappen för spelet som nollställer allt från början
let reset = document.getElementById("reset");

//functionen till reset
reset.addEventListener("click", () => {
    location.reload();
});

let hold = document.getElementById("hold");
const score1 = document.getElementById("score-1");
let totalscore1 = 0;

hold.addEventListener("click", function(){
    totalscore1 += totalPoints;
    score1.textContent = totalscore1;
    currentText = "Current: " + 0;
    
})