console.log("Hello World!");

const computerChoice = ['rock', 'paper', 'scissors'];
let playerSelection = prompt("Choose between rock,paper or scissors");
playerSelection = playerSelection.toLowerCase();
console.log (computerChoice.length);

let computerSelection = getComputerChoice(computerChoice);

function getComputerChoice(computerChoice){
   return (computerChoice[(Math.floor(Math.random() * computerChoice.length))]);
}


console.log(computerSelection);


function playRound(playerSelection, computerSelection) {
    if ((computerSelection == "scissors") && (playerSelection == "rock")){
    console.log("you lose rock beats scissors");
    }
    else if ((computerSelection == "rock") && (playerSelection == "scissors")) { 
    console.log("you win");
    }
    else if ((computerSelection == "rock") && (playerSelection == "rock")){
    console.log('its a draw');
    }
  } 


//const playerSelection = "rock";
//console.log(playRound(playerSelection, computerSelection));

function game(){
return console.log(playRound(playerSelection, computerSelection));
}

game();





/*console.log(playerSelection);
if (playerSelection === "rock" && computerSelection === "scissors"){
    console.log("you win");
    }
    else {
        console.log("you lose");
    }

    else if ((computerSelection == "rock") && (playerSelection == "scissors")) { 
        console.log("you win");
        }
        else if ((computerSelection == "rock") && (playerSelection == "rock")){
        console.log('its a draw');
        }*/
