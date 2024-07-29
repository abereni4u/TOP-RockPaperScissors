
const acceptableValues = new Set(["r", "s", "p"]);


const rounds = 5;

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
        return "c";
    }
    else if((humanChoice == "paper") && computerChoice == "rock"){
        console.log("You win! Paper beats Rock");
        return "h";
    }
    else if ((humanChoice == "scissors") && computerChoice == "rock"){
        console.log("You lose! Rock beats scissors");
        return "c";
    }
    else if ((humanChoice == "rock") && computerChoice == "scissors"){
        console.log("You win! Rock beats scissors");
        return "h";
    }
    else if((humanChoice == "paper") && computerChoice == "scissors"){
        console.log("You lose! Scissors beats paper");
        return "c";
    }
    else if((humanChoice == "scissors") && computerChoice == "paper"){
        console.log("You win! Scissors beats paper");
        return "h";
    }
    else{
        console.log("Draw!");
    }
}

function playGame(){
    alert ("Time to play \"Rock, Paper, Scissors!\"");
    let humanScore = 0;
    let computerScore = 0;
    for(let r = 1; r <= rounds; r++){
        console.log(`Round ${r}!`);
        const humanSelection = getHumanChoice();
        const cpuSelection = getComputerChoice();
        let result = playRound(humanSelection, cpuSelection);
        if (result == "h"){
            humanScore += 1;
        }
        else{
            computerScore += 1;
        }
    }
}

playGame();
