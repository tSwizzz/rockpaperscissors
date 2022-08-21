let playerScore = 0;
let computerScore = 0;
let computerSelection;

const rock = document.querySelector("#rock");
    rock.addEventListener('click', alertRock);
const paper = document.querySelector("#paper");
    paper.addEventListener('click', alertPaper);
const scissors = document.querySelector("#scissors");
    scissors.addEventListener('click', alertScissors);

const playerContainer = document.querySelector("#playerContainer");
    const player = document.createElement("div");
    const computer = document.createElement("div");
    const gameFinished = document.createElement("div");
    player.classList.add("player");
    computer.classList.add("computer");
    gameFinished.classList.add("gameFinished");
    player.textContent = "Player Score: " + playerScore;
    computer.textContent = "Computer Score: " + computerScore;
    gameFinished.textContent = "Waiting for winner...";
    playerContainer.appendChild(player);
    playerContainer.appendChild(computer);
    playerContainer.appendChild(gameFinished);

function getComputerChoice() { // theres probably an easier way to check the computer's choice than my method but OHHHHH WELLLLL
   computerSelection = Math.floor(Math.random() * 3); 

   if (computerSelection == 0) 
    computerSelection = "rock";
   else if (computerSelection == 1) 
    computerSelection = "paper";
   else
    computerSelection = "scissors";
   return computerSelection;
}

function playRound(playerSelection, computerSelection) { // again, probably a faster method that idk about :(... or maybe not :o
    if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        alert("Computer wins this round!");
        computerScore = computerScore + 1; 
        computer.textContent = "Computer Score: " + computerScore;
        if(computerScore == 5) 
            gameFinished.textContent = "COMPUTER WINS, YOU SUCK!!!!";
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        alert("You won this round!");
        playerScore = playerScore + 1; 
        player.textContent = "Player Score: " + playerScore;
        if(playerScore == 5) 
            gameFinished.textContent = "YOU WON MY GUY LESSS GOOOOOOO!!!";
    }
    else
        alert("TIE! Go again!");
}

function alertRock() {
    computerSelection = getComputerChoice();
    let playerSelection = "rock";
    playRound(playerSelection, computerSelection);
}

function alertPaper() {
    computerSelection = getComputerChoice();
    let playerSelection = "paper";
    playRound(playerSelection, computerSelection);
}

function alertScissors() {
    computerSelection = getComputerChoice();
    let playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
}