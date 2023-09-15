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
    return "Tie game";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Computer wins, sorry";
  } else if (playerSelection === "rock" && computerSelection ==="scissors") {
    return "Player wins!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "Computer wins, sorry";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "Player wins!";
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    return "Tie game";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "Player wins!";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "Tie game";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return"Computer wins, sorry";
  } else {
    return"Sorry, that's not a valid option"
  }
}
// 4) write a function called game() put the previous function in here
// this function should keep score and reports a winner or loser at the end. 
function game() {

  
  for (let i = 0; i < 5; i++) { 

    let playerSelects = prompt("Pick between rock paper or scissors").toLowerCase();
    const computerSelects = getComputerChoice();

    playRound(playerSelects, computerSelects);

    

  }
}

game();


// have to find a way to keep score for both player and computer
// need to create a container to hold the score for both  

let playerScore = 0;
let computerScore = 0;

// if player wins, then increment playerScore by 1
// if computer wins, then increment computerScore by 1
// if tie, then no one wins 
// after 5 rounds of the game, announce a winner.
// the winner should be the greater of playerScore vs. Computer 
// if playerScore > than computerScore then print out player wins
// if computerScore > than playerScore then print out computer wins. 
