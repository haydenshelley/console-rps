let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let round = 1;
let result;

function resetGame() {
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  playerDiv.textContent = "";
  computerDiv.textContent = "";
  roundWinnerDiv.textContent = "";
  playerScore = 0;
  computerScore = 0;
  playerScoreDiv.textContent = `Player Score: ${playerScore}`;
  computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
  winnerDiv.textContent = "";
}

const winnerDiv = document.querySelector("#winner");

const resetBtn = document.querySelector("#reset");
resetBtn.onclick = resetGame;

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", function (e) {
  playRound(this.id);
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", function (e) {
  playRound(this.id);
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", function (e) {
  playRound(this.id);
});

const playerDiv = document.querySelector("#playerChoice");
const computerDiv = document.querySelector("#computerChoice");
const roundWinnerDiv = document.querySelector("#roundWinner");

const playerScoreDiv = document.querySelector("#playerScore");
const computerScoreDiv = document.querySelector("#computerScore");

function getComputerChoice() {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  if (computerSelection === playerSelection) {
    result = "Tie";
    checkWinner();
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      result = "Computer won the round";
      computerScore++;
      checkWinner();
    } else {
      result = "Player won the round";
      playerScore++;
      checkWinner();
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      result = "Computer won the round";
      computerScore++;
      checkWinner();
    } else {
      result = "Player won the round";
      playerScore++;
      checkWinner();
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      result = "Computer won the round";
      computerScore++;
      checkWinner();
    } else {
      result = "Player won the round";
      playerScore++;
      checkWinner();
    }
  }
  playerDiv.textContent = `Player chose ${playerSelection}`;
  computerDiv.textContent = `Computer chose ${computerSelection}`;
  roundWinnerDiv.textContent = result;
  playerScoreDiv.textContent = `Player Score: ${playerScore}`;
  computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
  return result;
}

function checkWinner() {
  if (playerScore === 5) {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    winnerDiv.textContent = `Player wins the Game!`;
  } else if (computerScore === 5) {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    winnerDiv.textContent = `Computer wins the Game!`;
  }
}
