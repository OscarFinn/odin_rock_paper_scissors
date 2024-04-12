let playerScore = 0;
let computerScore = 0;
let actions = ["rock","paper","scissors"];

function getComputerChoice() {
    let rand = Math.floor(Math.random()*3);
    return actions[rand];
}
function getPlayerChoice() {
    let choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (choice === "rock"){
        return actions[0];
    }
    else if (choice === "paper"){
        return actions[1];
    }
    else if (choice === "scissors"){
        return actions[2];
    }
    else {
        console.log("invalid input");
        return getPlayerChoice();
    }
}
function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Draw, no points.");
    } else if (playerSelection === "rock"){
        if (computerSelection === "scissors") {
            console.log("Rock beats Scissors, player wins");
            playerScore++;
        } else {
            console.log("Paper beats Rock, computer wins");
            computerScore++;
        }
    } else if (playerSelection==="paper") {
        if (computerSelection === "rock") {
            console.log("Paper beats Rock, player wins");
            playerScore++;
        } else {
            console.log("Scissors beat Paper, computer wins");
            computerScore++;
        }
    } else if (playerSelection==="scissors") {
        if (computerSelection==="paper") {
            console.log("Scissors beats Paper, player wins");
            playerScore++;
        } else {
            console.log("Rock beats Scissors, computer wins");
            computerScore++;
        }
    } else {
        console.log("we shouldnt reach here");
    }
    console.log(`The current score is: ${playerScore}-${computerScore}`);
}
function playGame() {
    for(let i=0;i<5;i++){
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        playRound(playerChoice,computerChoice);
    }
    if (playerScore===computerScore) {
        console.log("Draw");
    } else if (playerScore>computerScore) {
        console.log("Player Wins");
    } else {
        console.log("Computer Wins");
    }
}
playGame();