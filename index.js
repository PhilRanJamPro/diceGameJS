// Create variables for the game state
let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const ryuWins = document.getElementById("ryuWins");
const kenWins = document.getElementById("kenWins");
const ken = document.getElementById("ken");
const ryu = document.getElementById("ryu");

function showResetButton() {
  ken.style.display = "none";
  ryu.style.display = "none";
  rollBtn.style.display = "none";
  resetBtn.style.display = "block";
}

/* Hook up a click event listener to the Roll Dice Button. */
rollBtn.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  if (player1Turn) {
    player1Score += randomNumber;
    player1Scoreboard.textContent = player1Score;
    player1Dice.textContent = randomNumber;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player 2 Turn";
  } else {
    player2Score += randomNumber;
    player2Scoreboard.textContent = player2Score;
    player2Dice.textContent = randomNumber;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = "Player 1 Turn";
  }

  if (player1Score >= 20) {
    message.textContent = "Player 1 Won!";
    showResetButton();
    kenWins.style.display = "block";
  } else if (player2Score >= 20) {
    message.textContent = "Player 2 Won!";
    showResetButton();
    ryuWins.style.display = "block";
  }

  if (player2Score > 3) {
    player1Dice.classList.add("small");
  }
  if (player2Score > 7) {
    player1Dice.classList.remove("small");
    player1Dice.classList.add("medium");
  }
  if (player2Score > 11) {
    player1Dice.classList.remove("small");
    player1Dice.classList.remove("medium");
    player1Dice.classList.add("large");
  }
  if (player2Score > 15) {
    player1Dice.classList.remove("small");
    player1Dice.classList.remove("medium");
    player1Dice.classList.remove("large");
    player1Dice.classList.add("x-large");
  }
  if (player2Score > 19) {
    player1Dice.classList.remove("small");
    player1Dice.classList.remove("medium");
    player1Dice.classList.remove("large");
    player1Dice.classList.remove("x-large");
    player1Dice.classList.add("xx-large");
  }

  if (player1Score > 3) {
    player2Dice.classList.add("small");
  }
  if (player1Score > 7) {
    player2Dice.classList.remove("small");
    player2Dice.classList.add("medium");
  }
  if (player1Score > 11) {
    player2Dice.classList.remove("small");
    player2Dice.classList.remove("medium");
    player2Dice.classList.add("large");
  }
  if (player1Score > 15) {
    player2Dice.classList.remove("small");
    player2Dice.classList.remove("medium");
    player2Dice.classList.remove("large");
    player2Dice.classList.add("x-large");
  }
  if (player1Score > 19) {
    player2Dice.classList.remove("small");
    player2Dice.classList.remove("medium");
    player2Dice.classList.remove("large");
    player2Dice.classList.remove("x-large");
    player2Dice.classList.add("xx-large");
  }

  player1Turn = !player1Turn;
});

resetBtn.addEventListener("click", function () {
  reset();
});

function reset() {
  player1Score = 0;
  player2Score = 0;
  player1Turn = true;
  player1Scoreboard.textContent = 0;
  player2Scoreboard.textContent = 0;
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  message.textContent = "Player 1 Turn";
  rollBtn.style.display = "inline-block";
  ken.style.display = "block";
  ryu.style.display = "block";
  ryuWins.style.display = "none";
  kenWins.style.display = "none";
  resetBtn.style.display = "none";

  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
  player2Dice.classList.remove("xx-large");
  player1Dice.classList.remove("xx-large");
  player2Dice.classList.remove("x-large");
  player1Dice.classList.remove("x-large");
  player2Dice.classList.remove("large");
  player1Dice.classList.remove("large");
  player2Dice.classList.remove("medium");
  player1Dice.classList.remove("medium");
  player2Dice.classList.remove("small");
  player1Dice.classList.remove("small");
}
