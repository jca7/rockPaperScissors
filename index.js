function getComputerChoice (){
  const options = ["rock", "paper", "scissors"]
  let randomNumber = Math.floor(Math.random() * options.length);
  let choice = options[randomNumber];
  return choice;
}



function playRound(playerSelection, computerSelection) {
  
  if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("Tie game this round");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("Computer wins this round")
    return  computerScore++;
  } else if (playerSelection === "rock" && computerSelection ==="scissors") {
    console.log("Player wins this round");
    return playerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("Computer wins this round")
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
    console.log("Computer wins this round")
    return  computerScore++;
  } else {
    return "Sorry, that's not a valid option"
  }
}

let playerScore = 0;
let computerScore = 0;

// function game() {
//   for (let i = 0; i < 5; i++) { 
//     let playerSelects = prompt("Pick between rock paper or scissors").toLowerCase();
//     let computerSelects = getComputerChoice();
//     playRound(playerSelects, computerSelects);
//   }
//   if (playerScore > computerScore) {
//     console.log("Player wins the game! By a score of " + playerScore + " to " + computerScore);
//   } else if (computerScore > playerScore) {
//     console.log("Computer wins the game! By a score of " + computerScore + " to " + playerScore);
//   } else if (computerScore === playerScore) {
//     console.log("No one wins this game, we ended up with a tie.");
//   }
// }

// game();

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.id);
  })
})

// const rock = document.querySelector('#rock'); 

// rock.addEventListener('click', (e) => {
//   console.log(e.target);
//   return rock.id;
// })



// const paper = document.querySelector('#paper'); 

// paper.addEventListener('click', (e) => {
//   console.log(e.target);
//   return paper.id;
// })

// const scissors = document.querySelector('#scissors'); 

// scissors.addEventListener('click', (e) => {
//   console.log(e.target);
//   return scissors.id;
// })
