function computerPlay() {
    let computerSelection = Math.floor(Math.random()*3)+1;;
    if (computerSelection == 1) {
        computerSelection = "rock";
    } else if (computerSelection == 2){
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
    return(computerSelection);
}

function playRound(playerSelection, computerSelection) {
    let gameState = "";
    if (playerSelection == computerSelection) {
        gameState = " Draw!";
    } else if (playerSelection == "rock"){
        if (computerSelection == "paper") {
            gameState = " You Lose!";
        } else if (computerSelection == "scissors"){
            gameState = " You Win!"
        }
    }  else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            gameState = " You Win!";
        } else if (computerSelection == "scissors"){
            gameState = " You Lose!"
        }
    } else {
        if (computerSelection == "paper") {
            gameState = " You Win!";
        } else if (computerSelection == "rock"){
            gameState = " You Lose!"
        }
    }
    console.log("player close: " + playerSelection + " computer chose: " + computerSelection + gameState);
}

function startGame() {
    let playerSelection = prompt("Rock, Paper or Scissors?");
    playerSelection = playerSelection.toString().toLowerCase();
    const validSelection = ['rock','paper','scissors'];
    if (validSelection.includes(playerSelection) == false) {
        startGame();
    } else {
        return(playerSelection)
    }
}


let computerSelection = computerPlay();
let playerSelection = startGame();
playRound(playerSelection, computerSelection);