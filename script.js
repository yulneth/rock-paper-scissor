const computerChoice = ['rock', 'paper', 'scissors'];
let playerSelection='';
let computerSelection;
let playerWins = 0;
let computerWins = 0;

const rock = document.getElementById("rock");
rock.addEventListener('click',() =>{
    playerSelection = rock.id;
    computerSelection = getComputerChoice(computerChoice);
    playRound(playerSelection,computerSelection);
    determineWinner();
    
});
const paper = document.getElementById("paper");
paper.addEventListener('click',() =>{
    playerSelection = paper.id;
    computerSelection = getComputerChoice(computerChoice);
    playRound(playerSelection,computerSelection);
    determineWinner();
});
const scissors = document.getElementById("scissors");
scissors.addEventListener('click',() =>{
    playerSelection = scissors.id;
    computerSelection = getComputerChoice(computerChoice);
    playRound(playerSelection,computerSelection);
    determineWinner();
});

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock") && (computerSelection === "scissors")){
        playerWins +=1;
        displayResult();
    
    }
    else if ((playerSelection === "rock") && (computerSelection === "paper")) { 
        computerWins +=1;
        displayResult();
    }
    else if ((playerSelection === "rock") && (computerSelection === "rock")){
    document.getElementById("result").innerHTML = "Draw";
    }
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) { 
        playerWins +=1;
        displayResult();
    }
    else if ((playerSelection === "scissors") && (computerSelection === "scissors")){
    document.getElementById("result").innerHTML = "Draw";
    }
    else if ((playerSelection === "scissors") && (computerSelection === "rock")) { 
        computerWins +=1;
        displayResult();
    }
    else if ((playerSelection === "paper") && (computerSelection === "rock")) { 
        playerWins +=1;
        displayResult();
    }
    else if ((playerSelection === "paper") && (computerSelection === "paper")){
    document.getElementById("result").innerHTML = "Draw";
    }
    else if ((playerSelection === "paper") && (computerSelection === "scissors")) { 
        computerWins +=1;
        displayResult();
    }
    else{
        document.getElementById("standing").innerHTML = "Invalid input";
    }
  } 


function displayResult(){
    document.getElementById("standing").innerHTML = `Player: ${playerWins} , Computer: ${computerWins}`;
    document.getElementById('result').innerHTML = `Player wins; Computer chose ${computerSelection}`;
}

function determineWinner(){
    if(playerWins ===5){
        alert('Player Wins');
        playerWins = 0;
        computerWins =0;
        document.getElementById("standing").innerHTML = `Player: ${playerWins} , Computer: ${computerWins}`;
        document.getElementById("result").innerHTML = "";
    }
    else if (computerWins ===5){
        alert('Computer Wins');
        playerWins = 0;
        computerWins =0;
        document.getElementById("standing").innerHTML = `Player: ${playerWins} , Computer: ${computerWins}`;
        document.getElementById("result").innerHTML = "";

    }
}
function getComputerChoice(computerChoice){
    return (computerChoice[(Math.floor(Math.random() * computerChoice.length))]);
 }
 



