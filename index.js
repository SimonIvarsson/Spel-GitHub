// Start värden | Simon I
let currentScor = 0;
let activePlayer = 1;
let scores = [0, 0];

// Hämtar elementen från HTML | Simon I
const rollDiceButton = document.getElementById("roll-dice");
const holdButton = document.getElementById("hold");
const resetButton = document.getElementById("reset");
const diceElement = document.getElementById("dice");
const currentElements = [
  document.getElementById("current-1"),
  document.getElementById("current-2"),
];
const scoreElements = [
  document.getElementById("score-1"),
  document.getElementById("score-2"),
];


function updateCurrentScor() {
  currentElements[activePlayer - 1].textContent = `Current: ${currentScor}`;
}

// Byter spelare | Veljko
function swichPlayer() {
  currentScor = 0;
  updateCurrentScor();
  activePlayer = activePlayer === 1 ? 2 : 1;
}

// Slår tärningen mellan 1-6 om spelaren slår 1 så går turen över | Simon I
rollDiceButton.addEventListener("click", function () {
  const dice = Math.floor(Math.random() * 6) + 1;
  diceElement.textContent = "${dice}";

  if (dice === 1) {
    swichPlayer();
  } else {
    currentScor += dice;
    updateCurrentScor();
  }
});

// Hold knappen | Veljko
holdButton.addEventListener("click", function () {
  scores[activePlayer - 1] += currentScor;
  scoreElements[activePlayer - 1].textContent = scores[activePlayer - 1];

  if (scores[activePlayer - 1] >= 50) {
    alert("Player ${activePlayer} winns!");
  } else {
    swichPlayer();
  }
});

// Functionen till reset | Veljko
resetButton.addEventListener("click", function () {
  location.reload();
});