
const acceptableValues = new Set(["r", "s", "p"]);
let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const cpuSelection = getComputerChoice();

function getComputerChoice(){
    let randomValue = Math.random() * 100;

    if(randomValue > 0 && randomValue < 33){
        return "rock";
    }
    else if (randomValue > 33 && randomValue < 66){
        return "scissors";
    }
    else{
        return "paper";
    }
}

function getHumanChoice(){

    let humanChoice = prompt("Please enter your move (r for Rock | s for Scissors | p for Paper) :");
    humanChoice.toLowerCase();

    // while input not in valid choices
    while(!acceptableValues.has(humanChoice)){
        alert("Invalid input!");
        humanChoice = prompt("Please enter your move (r for Rock | s for Scissors | p for Paper) :")
    }

    if(humanChoice === "r"){
        humanChoice = "rock";
    }
    else if (humanChoice === "s"){
        humanChoice = "scissors";
    }
    else if (humanChoice === "p"){
        humanChoice = "paper";
    }
   

    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    if((humanChoice == "rock") && computerChoice == "paper"){
        console.log("You lose! Paper beats Rock");
        computerScore += 1;
    }
    else if((humanChoice == "paper") && computerChoice == "rock"){
        console.log("You win! Paper beats Rock");
        humanScore += 1;
    }
    else if ((humanChoice == "scissors") && computerChoice == "rock"){
        console.log("You lose! Rock beats scissors");
        computerScore += 1;
    }
    else if ((humanChoice == "rock") && computerChoice == "scissors"){
        console.log("You win! Rock beats scissors");
        humanScore += 1;
    }
    else if((humanChoice == "paper") && computerChoice == "scissors"){
        console.log("You lose! Scissors beats paper");
        computerScore += 1;
    }
    else if((humanChoice == "scissors") && computerChoice == "paper"){
        console.log("You win! Scissors beats paper");
        humanScore += 1;
    }
    else{
        console.log("Draw!");
    }
}

playRound(humanSelection, cpuSelection);