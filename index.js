let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let result;

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

function getComputerChoice() {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  if (computerSelection === playerSelection) {
    result = "Tie";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      result = "Computer Won";
      computerScore++;
    } else {
      result = "Player Won";
      playerScore++;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      result = "Computer Won";
      computerScore++;
    } else {
      result = "Player Won";
      playerScore++;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      result = "Computer Won";
      computerScore++;
    } else {
      result = "Player Won";
      playerScore++;
    }
  }
  playerDiv.textContent = `Player chose ${playerSelection}`;
  computerDiv.textContent = `Computer chose ${computerSelection}`;
  roundWinnerDiv.textContent = result;
  return result;
}

function playGame() {
  let round = 1;
  while (round <= 5) {
    console.log(`Round: ${round}`);
    playRound();
    round++;
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }
  if (playerScore > computerScore) {
    console.log("Player Wins the Game!!!");
  } else if (computerScore > playerScore) {
    console.log("Computer Wins the Game!!!");
  } else {
    console.log("The Game is a Tie!!!");
  }
}

// console.log(playGame());
