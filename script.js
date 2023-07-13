const buttonRock = document.querySelector(".btn1");
const buttonPaper = document.querySelector(".btn2");
const buttonScissor = document.querySelector(".btn3");
const resultLine = document.querySelector(".result");
const playerScores = document.querySelector(".playerScore");
const computerScores = document.querySelector(".computerScore");
const finalGameResult = document.querySelector(".finalResult");
const buttons = document.querySelectorAll("button");
function getComputerChoice() {
  // Generate a random number between 0 and 3   (3 is not included concept)
  const randomNumber = Math.floor(Math.random() * 3);

  // Use the random number to generate computer choice
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
  }
}

//console.log ( getComputerChoice() )

// Creating the  playround function where a game takes place

function playRound(playerSelection, computerSelection) {
  // converts both selections to lower case for Case Insensitive Comparison
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  //CHECK FOR A TIE
  if (playerSelection === computerSelection) {
    return " Its a Tie";
  }

  // CHECK FOR PLAYER WIN CONDITIONS
  else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    return `You Win !!! ${playerSelection} BEATS ${computerSelection}`;
  }

  // CHECK FOR COMPUTER WIN
  else {
    return `You Lose :( ${computerSelection} beats ${playerSelection} `;
  }
}

function disableButtons() {
  buttons.forEach((elem) => {
    elem.disabled = true;
  });
}

let playerScore = 0;
let computerScore = 0;
// Creating Individual DOM buttons
buttonRock.addEventListener("click", function () {
  result = playRound("rock", getComputerChoice());
  resultLine.textContent = result;
  if (result.startsWith(`You Win`)) {
    playerScore++;
  } else if (result.includes(`You Lose`)) {
    computerScore++;
  }
  playerScores.textContent = playerScore;
  computerScores.textContent = computerScore;
  if (playerScore === 5) {
    finalGameResult.textContent =
      "You won the game! Congratulations! Relod the game to try again.";
    disableButtons();
  } else if (computerScore === 5) {
    finalGameResult.textContent =
      "You lost the game! Better luck next time!Relod the game to try again";
    disableButtons();
  }
});
buttonPaper.addEventListener("click", function () {
  result = playRound("paper", getComputerChoice());
  resultLine.textContent = result;
  if (result.startsWith(`You Win`)) {
    playerScore++;
  } else if (result.includes(`You Lose`)) {
    computerScore++;
  }
  playerScores.textContent = playerScore;
  computerScores.textContent = computerScore;
  if (playerScore === 5) {
    finalGameResult.textContent =
      "You won the game! Congratulations! Relod the game to try again.";
    disableButtons();
  } else if (computerScore === 5) {
    finalGameResult.textContent =
      "You lost the game! Better luck next time! Relod the game to try again.";
    disableButtons();
  }
});
buttonScissor.addEventListener("click", function () {
  result = playRound("scissor", getComputerChoice());
  resultLine.textContent = result;
  if (result.startsWith(`You Win`)) {
    playerScore++;
  } else if (result.includes(`You Lose`)) {
    computerScore++;
  }
  playerScores.textContent = playerScore;
  computerScores.textContent = computerScore;
  if (playerScore === 5) {
    finalGameResult.textContent =
      "You won the game! Congratulations! Relod the game to try again.";
    disableButtons();
  } else if (computerScore === 5) {
    finalGameResult.textContent =
      "You lost the game! Better luck next time! Relod the game to try again.";
    disableButtons();
  }
});