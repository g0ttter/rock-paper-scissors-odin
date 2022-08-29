const buttonRock = document.querySelector(".btn-rock");
const buttonPaper = document.querySelector(".btn-paper");
const buttonScissors = document.querySelector(".btn-scissors");
const result = document.querySelector(".result");
const finalResult = document.querySelector(".final-result");
let playerScoreDisplay = document.querySelector(".player-score");
let computerScoreDisplay = document.querySelector(".computer-score");

buttonRock.addEventListener("click", function(){game("rock")});
buttonPaper.addEventListener("click", function(){game("paper")});
buttonScissors.addEventListener("click", function(){game ("scissors")});


function computerPlay() {
    possibleResults = ['rock', 'paper', 'scissors'];
    return possibleResults[Math.floor(Math.random()*3)];
}
let playerScore = 0;
let computerScore = 0;
playerScoreDisplay.textContent = playerScore;
computerScoreDisplay.textContent = computerScore;

function playRound(computerSelection, playerSelection) {

    playerSelection = playerSelection.toLowerCase();
    console.log(computerSelection);
    console.log(playerSelection);
    if (playerSelection == 'paper') {
        if (computerSelection == 'paper') {
            result.textContent = 'Draw';
        } else if (computerSelection == 'rock'){
            result.textContent = 'Player wins';
            playerScore++;
        } else if (computerSelection == 'scissors') {
            result.textContent = 'Computer wins';
            computerScore++;
        }
    }
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            result.textContent = 'Draw';
        } else if (computerSelection == 'paper') {
            result.textContent = 'Computer wins';
            computerScore++;
        } else if (computerSelection == 'scissors') {
            result.textContent = 'Player wins';
            playerScore++;
        }
    }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'scissors') {
            result.textContent = 'Draw';
        } else if (computerSelection == 'rock') {
            result.textContent = 'Computer wins';
            computerScore++;
        } else if (computerSelection == 'paper') {
            result.textContent = 'Player wins';
            playerScore++;
        }
    }
  
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    if (playerScore >= 5) {
        finalResult.textContent = 'Player destroyed stoopid computer';
        playerScore = 0;
    } else if (computerScore >= 5) {
        finalResult.textContent = 'Computer destroyed stoopid player';
        playerScore, computerScore = 0;
    }
}               

function game(playerSelection) {
    

    playRound(computerPlay(), playerSelection);
}