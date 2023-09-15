// 1) Create an array to store "Rock" , "Paper" and "Scissors"
const options = ["rock", "paper", "scissors"]
// 2) create a function that randomly generates a number then use that to randomly select an item from the array above
function getComputerChoice (){
  let randomNumber = Math.floor(Math.random() * 3);

  let choice = options[randomNumber];
  return choice;
}

// 3) write a function that takes 2 parameters: playerSelection & computerSelection 
// create logic on what beats what (Rock beat scissors, scissors beats paper, paper beats rock, if same = tie)
// compare playerSelection vs. computerSelection to see who wins or if there is a tie
// return a string that declares the winner of the round or tie 

function playRound(playerSelection, computerSelection) {

  if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("Tie game");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("Computer wins, sorry");
  } else if (playerSelection === "rock" && computerSelection ==="scissors") {
    console.log("Player wins!");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("Computer wins, sorry");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("Player wins!");
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    console.log("Tie game");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("Player wins!");
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("Tie game");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("Computer wins, sorry");
  } else {
    console.log("Sorry, that's not a valid option")
  }
}

 
let playerSelection = prompt("Pick between rock paper or scissors").toLowerCase();

const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));




// 4) write a function called game() put the previous function in here
// this function should keep score and reports a winner or loser at the end. 