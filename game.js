let playerScore = 0;
let computerScore = 0;
console.log(game());

function getComputerChoice() { // theres probably an easier way to check the computer's choice than my method but OHHHHH WELLLLL
   let computerSelection = Math.floor(Math.random() * 3); 

   if (computerSelection == 0) 
    computerSelection = "rock";
   else if (computerSelection == 1) 
    computerSelection = "paper";
   else 
    computerSelection = "scissors";
   return computerSelection;
}

function playRound(playerSelection, computerSelection) { // again, probably a faster method that idk about :(... or maybe not :o
    if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")) {
        console.log("Computer wins!");
        computerScore = computerScore + 1; 
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        console.log("You win!");
        playerScore = playerScore + 1; 
    }
    else if ((playerSelection == "rock" && computerSelection == "rock") || (playerSelection == "paper" && computerSelection == "paper") || (playerSelection == 'scissors' && computerSelection == "scissors")) {
        console.log("TIE!");
    }
}

function game() {
    for (let k = 1; k <= 5; k++) 
    {
        let playerSelection = prompt("type rock, paper, or scissors");
        let computerSelection = getComputerChoice();
        console.log("Round " + k + "!");
        playRound(playerSelection, computerSelection);
    }
}

console.log("Computer's score = " + computerScore);
console.log("Your score = " + playerScore);

if (playerScore > computerScore) 
    console.log("You fucking champ, you won!");
else if (playerScore < computerScore)
    console.log("lol u lost to a computer u suck");
else
    console.log("IT'S A MUDDAFUGGIN TIE LOLOLOLOLOLOL");



