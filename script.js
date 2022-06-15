function computerPlay() {
    selectionArr = ['rock', 'paper', 'scissors'];
    return selectionArr[Math.floor(Math.random()*3)];
}

function  playRound(computerSelection, playerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == 'paper') {
        if (computerSelection == 'paper') {
            return 'Draw';
        } else if (computerSelection == 'rock'){
            return 'Player wins';
        } else if (computerSelection == 'scissors') {
            return 'Computer wins';
        }
    }
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return 'Draw';
        } else if (computerSelection == 'paper') {
            return 'Computer wins';
        } else if (computerSelection == 'scissors') {
            return 'Player wins';
        }
    }
    if (playerSelection == 'scissors') {
        if (computerSelection == 'scissors') {
            return 'Draw';
        } else if (computerSelection == 'rock') {
            return 'Computer wins';
        } else if (computerSelection == 'paper') {
            return 'Player wins';
        }
    }
}               

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(computerPlay(), prompt()));
    }
}

game();