console.log("Hello World!");

const computerChoice = ['rock', 'paper', 'scissors'];
let playerSelection;
let computerSelection;

function getComputerChoice(computerChoice){
   return (computerChoice[(Math.floor(Math.random() * computerChoice.length))]);
}



function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock") && (computerSelection == "scissors")){
    console.log("Player wins");
    }
    else if ((playerSelection == "rock") && (computerSelection == "paper")) { 
    console.log("Player lose");
    }
    else if ((playerSelection == "rock") && (computerSelection == "rock")){
    console.log('its a draw');
    }
    else if ((playerSelection == "scissors") && (computerSelection == "paper")) { 
        console.log("Player wins");
    }
    else if ((playerSelection == "scissors") && (computerSelection == "scissors")){
        console.log('its a draw');
    }
    else if ((playerSelection == "scissors") && (computerSelection == "rock")) { 
         console.log("Player lose");
    }
    else if ((playerSelection == "paper") && (computerSelection == "rock")) { 
        console.log("Player wins");
    }
    else if ((playerSelection == "paper") && (computerSelection == "paper")){
        console.log('its a draw');
    }
    else if ((playerSelection == "paper") && (computerSelection == "scissors")) { 
         console.log("Player lose");
    }
    else{
        console.log('invalid input');
    }
  } 


function game(){
console.log(playRound(playerSelection, computerSelection));

}

for (let i = 1; i<=5;i++){
    console.log('game '+ i);
    computerSelection = getComputerChoice(computerChoice);
    playerSelection = prompt("Choose between rock,paper or scissors");
    playerSelection = playerSelection.toLowerCase();
    console.log('Player chooses ' + playerSelection);
    console.log('Machine chooses ' + computerSelection);
    
    game();
}
console.log('game over');





