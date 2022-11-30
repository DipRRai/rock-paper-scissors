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

function playRound(playerSelection, computerSelection, score) {
    let gameState = "";
    if (playerSelection == computerSelection) {
        gameState = " Draw!";
    } else if (playerSelection == "rock"){
        if (computerSelection == "paper") {
            gameState = " You Lose!";
            score[1] = score[1]+1;
        } else if (computerSelection == "scissors"){
            gameState = " You Win!";
            score[0] = score[0]+1;
        }
    }  else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            gameState = " You Win!";
            score[0] = score[0]+1;
        } else if (computerSelection == "scissors"){
            gameState = " You Lose!";
            score[1] = score[1]+1;
        }
    } else {
        if (computerSelection == "paper") {
            gameState = " You Win!";
            score[0] = score[0]+1;
        } else if (computerSelection == "rock"){
            gameState = " You Lose!";
            score[1] = score[1]+1;
        }
    }
    if (score[0] == 5){
        status.textContent = "Player wins";
    } else if (score[1] == 5){
        status.textContent = "Computer wins"
    }
    else {
        let temp = document.createElement('p');
        temp.textContent = "player close: " + playerSelection + " computer chose: " + computerSelection + gameState
        output.insertBefore(temp,output.firstChild);
        return(score);
    }
    
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

function playing(e){
    let computerSelection = computerPlay();
    let playerSelection = this.textContent;
    score = playRound(playerSelection, computerSelection, score);
    status.textContent=("You: " + score[0] + " Computer: " + score[1]);
    
}


let score = [0,0]
const output = document.querySelector('.output');
const status = document.querySelector('.scoreboard');
const plays = document.querySelectorAll('.gamechoice', );
plays.forEach(play => play.addEventListener('click', playing));
