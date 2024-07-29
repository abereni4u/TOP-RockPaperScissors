
const acceptableValues = new Set(["r", "s", "p"]);

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

console.log(getHumanChoice());