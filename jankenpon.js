let playerScore = 0;
let computerScore = 0;
let actions = ["rock","paper","scissors"];

const btns = document.querySelectorAll(".rps");
 btns.forEach((button) => {
    button.addEventListener("click",() => {
        playRound(button.id,getComputerChoice());
    });
 });
const result = document.querySelector("#result");
const score = document.querySelector(`#score`);
const choice = document.querySelector(`#choice`);

function getComputerChoice() {
    let rand = Math.floor(Math.random()*3);
    return actions[rand];
}
function playRound(playerSelection,computerSelection) {
    choice.textContent = `Player picks ${playerSelection}, computer picks ${computerSelection}.`;
    if (playerSelection === computerSelection) {
        result.textContent = "Draw, no points.";
        //result.textContent ="Draw, no points.");
    } else if (playerSelection === "rock"){
        if (computerSelection === "scissors") {

            result.textContent ="Rock beats Scissors, player wins";
            playerScore++;
        } else {

            result.textContent ="Paper beats Rock, computer wins";
            computerScore++;
        }
    } else if (playerSelection==="paper") {
        if (computerSelection === "rock") {
            result.textContent ="Paper beats Rock, player wins";
            playerScore++;
        } else {
            result.textContent ="Scissors beat Paper, computer wins";
            computerScore++;
        }
    } else if (playerSelection==="scissors") {
        if (computerSelection==="paper") {
            
            result.textContent ="Scissors beats Paper, player wins";
            playerScore++;
        } else {
            
            result.textContent ="Rock beats Scissors, computer wins";
            computerScore++;
        }
    } else {
        
        result.textContent ="we shouldnt reach here";
    }
    score.textContent =`The current score is: ${playerScore}-${computerScore}`;
    if (playerScore >= 5) {
        alert("Player wins!");
        computerScore = 0;
        playerScore = 0;
    } else if (computerScore >= 5) {
        alert("Computer Wins!");
        computerScore = 0;
        playerScore = 0;
    }
}
function playGame() {
    for(let i=0;i<5;i++){
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        playRound(playerChoice,computerChoice);
    }
    if (playerScore===computerScore) {
        result.textContent ="Draw";
    } else if (playerScore>computerScore) {
        
        result.textContent ="Player Wins";
    } else {
        
        result.textContent ="Computer Wins";
    }
}
//playGame();