let choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let result;

function getComputerChoice() {
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function playRound() {
  let computerSelection = getComputerChoice();
  let playerSelection = prompt("Rock, Paper, or Scissors").toLowerCase();
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
  console.log(`Computer chose ${computerSelection}`);
  console.log(`Player chose ${playerSelection}`);
  console.log(result);
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

console.log(playGame());
