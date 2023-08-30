let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function playRound() {
  let computerSelection = getComputerChoice();
  let playerSelection = prompt("Rock, Paper, or Scissors").toLowerCase();
  let result;
  if (computerSelection === playerSelection) {
    result = "Tie";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      result = "Computer Won";
    } else {
      result = "Player Won";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      result = "Computer Won";
    } else {
      result = "Player Won";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      result = "Computer Won";
    } else {
      result = "Player Won";
    }
  }
  console.log(`Computer chose ${computerSelection}`);
  console.log(`Player chose ${playerSelection}`);
  return result;
}

console.log(playRound());
