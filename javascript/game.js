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
    console.log("player close: " + playerSelection + " computer chose: " + computerSelection + gameState);
    return(score);
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


let score = [0,0]
for (let i = 0;i < 5; i++){
    let computerSelection = computerPlay();
    let playerSelection = startGame();
    score = playRound(playerSelection, computerSelection, score);
    console.log("You: " + score[0] + " Computer: " + score[1]);
}
