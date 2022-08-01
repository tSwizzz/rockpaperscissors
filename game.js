let playerScore = 0;
let computerScore = 0;
console.log(game());

function getComputerChoice() {
   let computerSelection = Math.floor(Math.random() * 3);
   if (computerSelection == 0){
    computerSelection = "rock";
   }
   if (computerSelection == 1) {
    computerSelection = "paper";
   }
   else {
    computerSelection = "scissors";
   }
   return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper"){
        console.log("Computer wins!");
        computerScore = computerScore + 1; 
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You win!");
        playerScore = playerScore + 1; 
    }
    
}

function game() {
    for (let k = 1; k <= 5; k++) 
    {
        if (k <= 5)
        {
            let playerSelection = prompt("type rock, paper, or scissors");
            let computerSelection = getComputerChoice();
            console.log("Round " + k + "!");
            playRound(playerSelection, computerSelection);
        }
    }
    console.log("Computer's score = " + computerScore);
    console.log("Your score = " + playerScore);

    if (playerScore > computerScore) {
        console.log("You fucking champ, you won!");
    }
    else if(playerScore < computerScore){
        console.log("lol u lost to a computer u suck");
    }
    else {
        console.log("IT'S A MUDDAFUGGIN TIE!!!!!!!!");
    }
}


