const startButton = document.querySelector(".start-game-btn");
const resetButton = document.querySelector(".reset-game-btn");
const gameButtonsDiv = document.querySelector(".game-buttons");
const buttons = document.querySelectorAll(".game-btn");
const resultDiv = document.querySelector(".result");

function startGame() {
  startButton.classList.add("hidden");
  resetButton.classList.remove("hidden");
  gameButtonsDiv.classList.remove("hidden");

  resultDiv.textContent = "";
}

function GameStart(playerChoice) {
  const choices = ["Rock", "Paper", "Scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute("disabled", true);
  }

  if (playerChoice === computerChoice) {
    result = "It's a Draw!";
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    result = "You Win! 🎉";
  } else {
    result = "You Lose! 😢";
  }

  const fullResult = `
    You picked: ${playerChoice}\n
    Computer picked: ${computerChoice}\n
    ${result}
  `;

  typeResult(fullResult);
}

function typeResult(text) {
  resultDiv.innerHTML = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      resultDiv.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }

  type();
}

function resetGame() {
  startButton.classList.remove("hidden");
  resetButton.classList.add("hidden");
  gameButtonsDiv.classList.add("hidden");

  resultDiv.textContent = "";
}
