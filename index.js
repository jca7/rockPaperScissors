function getComputerChoice (){
  const options = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * options.length);
  let choice = options[randomNumber];
  return choice;
}


function playRound(playerSelection, computerSelection) {
  
  if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("Tie game this round");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("Computer wins this round");
    return  computerScore++;
  } else if (playerSelection === "rock" && computerSelection ==="scissors") {
    console.log("Player wins this round");
    return playerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("Computer wins this round");
    return  computerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("Player wins this round");
    return playerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    console.log("Tie game this round");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("Player wins this round");
    return playerScore++;
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("Tie game this round");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("Computer wins this round");
    return  computerScore++;
  } else {
    return "Sorry, that's not a valid option";
  }
}

let playerScore = 0;
let computerScore = 0;

function game() {
  for (let i = 0; i < 5; i++) { 
    let playerSelects = prompt("Pick between rock paper or scissors").toLowerCase();
    let computerSelects = getComputerChoice();
    playRound(playerSelects, computerSelects);
  }
  if (playerScore > computerScore) {
    console.log("Player wins the game! By a score of " + playerScore + " to " + computerScore);
  } else if (computerScore > playerScore) {
    console.log("Computer wins the game! By a score of " + computerScore + " to " + playerScore);
  } else if (computerScore === playerScore) {
    console.log("No one wins this game, we ended up with a tie.");
  }
}

game();

const buttons = document.querySelectorAll('button');

let playerChoice = []
for(let i = 0; i < buttons.length; i++) 

console.log(buttons);
console.log(buttons[0].id);

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if(button.id === 'rock') {
      console.log("nice you picked rock!")
      let playerSelects = 'rock'
      console.log(playerSelects)
    } else if (button.id === 'paper') {
      console.log("nice you picked paper!")
      let playerSelects = 'paper'
      console.log(playerSelects)
    } else if (button.id === 'scissors') {
      console.log("nice you picked scissors!")
      let playerSelects = 'scissors'
      console.log(playerSelects)
    }
  })
})


//GOAL OF PROJECT

// allow user to select between rock, paper or scissors with a mouse click
// once an item is selected, we want to put that selection somewhere in the game that we can use
// once its in a place where we can use it we then need to compare it with the computer's choice. 
// that way we can actually play the game again. 
// After 1 single loop is done, then we ask the user to input a second selection. 

