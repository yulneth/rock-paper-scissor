const computerChoice = ['rock', 'paper', 'scissors'];
let playerSelection='';
let computerSelection;
let playerWins = 0;
let computerWins = 0;

const rock = document.getElementById("rock");
rock.addEventListener('click',() =>{
    playerSelection = 'rock';
    computerSelection = getComputerChoice(computerChoice);
    console.log(playerSelection);
    console.log(computerSelection);
    playRound(playerSelection,computerSelection);
    if(playerWins ==5){
        alert('Player Wins');
    }
    else if (computerWins ==5){
        alert('Computer Wins')
    };
    
});
const paper = document.getElementById("paper");
paper.addEventListener('click',() =>{
    playerSelection = 'paper';
    computerSelection = getComputerChoice(computerChoice);
    console.log(playerSelection);
    console.log(computerSelection);
    playRound(playerSelection,computerSelection);
    if(playerWins ==5){
        alert('Player Wins');
    }
    else if (computerWins ==5){
        alert('Computer Wins')
    };
    
});
const scissors = document.getElementById("scissors");
scissors.addEventListener('click',() =>{
    playerSelection = 'scissors';
    computerSelection = getComputerChoice(computerChoice);
    console.log(playerSelection);
    console.log(computerSelection);
    playRound(playerSelection,computerSelection);
    if(playerWins ==5){
        alert('Player Wins');
    }
    else if (computerWins ==5){
        alert('Computer Wins')
    };
    
})






function getComputerChoice(computerChoice){
   return (computerChoice[(Math.floor(Math.random() * computerChoice.length))]);
}


function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock") && (computerSelection == "scissors")){
    playerWins +=1;
    document.getElementById("result").innerHTML = `Player: ${playerWins} , Computer: ${computerWins}`;
    
    }
    else if ((playerSelection == "rock") && (computerSelection == "paper")) { 
        computerWins +=1;
        document.getElementById("result").innerHTML = `Player: ${playerWins} , Computer: ${computerWins}`;
    }
    else if ((playerSelection == "rock") && (computerSelection == "rock")){
    document.getElementById("result").innerHTML = "Draw";
    }
    else if ((playerSelection == "scissors") && (computerSelection == "paper")) { 
        playerWins +=1;
        document.getElementById("result").innerHTML = `Player: ${playerWins} , Computer: ${computerWins}`;
    }
    else if ((playerSelection == "scissors") && (computerSelection == "scissors")){
    document.getElementById("result").innerHTML = "Draw";
    }
    else if ((playerSelection == "scissors") && (computerSelection == "rock")) { 
        computerWins +=1;
        document.getElementById("result").innerHTML = `Player: ${playerWins} , Computer: ${computerWins}`;
    }
    else if ((playerSelection == "paper") && (computerSelection == "rock")) { 
        playerWins +=1;
        document.getElementById("result").innerHTML = `Player: ${playerWins} , Computer: ${computerWins}`;
    }
    else if ((playerSelection == "paper") && (computerSelection == "paper")){
    document.getElementById("result").innerHTML = "Draw";
    }
    else if ((playerSelection == "paper") && (computerSelection == "scissors")) { 
        computerWins +=1;
        document.getElementById("result").innerHTML = `Player: ${playerWins} , Computer: ${computerWins}`;
    }
    else{
        document.getElementById("result").innerHTML = "Invalid input";
    }
  } 


function game(){
console.log(playRound(playerSelection, computerSelection));
}




/*for (let i = 1; i<=5;i++){
    console.log('game '+ i);
    playerSelection = prompt("Choose between rock,paper or scissors");
    playerSelection = playerSelection.toLowerCase();
    console.log('Player chooses ' + playerSelection);
    console.log('Machine chooses ' + computerSelection);
    
    game();
}
console.log('game over');*/





