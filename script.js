function getComputerChoice(){
    let randomValue = Math.random() * 100;

    if(randomValue > 0 && randomValue < 33){
        return "Rock";
    }
    else if (randomValue > 33 && randomValue < 66){
        return "Scissors";
    }
    else{
        return "Paper";
    }
}
