function getComputerChoice() {
    let rand = Math.floor(Math.random()*3);
    return rand;
}
function getPlayerChoice() {
    let choice = toLowerCase(prompt("Rock, Paper or Scissors?"));
    if (choice === "rock"){
        return 0;
    }
    else if (choice === "paper"){
        return 1;
    }
    else if (choice === "scissors"){
        return 2;
    }
    else {
        console.log("invalid input");
        return getPlayerChoice();
    }
    
}
