function getComputerChoice (){
  const options = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * options.length);
  let choice = options[randomNumber];
  return choice;
}
const h1Container = document.querySelector('#h1Container');
const pContainer = document.querySelector('#pContainer');
const winStatement = document.createElement('h1');
const gameStatement = document.createElement('p');

function playRound(playerSelection, computerSelection) {
  
  if (playerSelection === "rock" && computerSelection === "rock") {
    gameStatement.textContent = "It's " + playerScore + " to " + computerScore + " Tie Game this round"; 
    pContainer.appendChild(gameStatement);

  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    gameStatement.textContent = "It's " + playerScore + " to " + computerScore + " Computer wins this round"; 
    pContainer.appendChild(gameStatement);

  } else if (playerSelection === "rock" && computerSelection ==="scissors") {
    playerScore++;
    gameStatement.textContent = "It's " + playerScore + " to " + computerScore + " Player wins this round"; 
    pContainer.appendChild(gameStatement);
    console.log("Player wins this round");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    gameStatement.textContent = "It's " + playerScore + " to " + computerScore + " Computer wins this round"; 
    pContainer.appendChild(gameStatement);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    gameStatement.textContent = "It's " + playerScore + " to " + computerScore + " Player wins this round"; 
    pContainer.appendChild(gameStatement);
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    gameStatement.textContent = "It's " + playerScore + " to " + computerScore + " Tie Game this round"; 
    pContainer.appendChild(gameStatement);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    gameStatement.textContent = "It's " + playerScore + " to " + computerScore + " Player wins this round"; 
    pContainer.appendChild(gameStatement);
    console.log("Player wins this round");
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    gameStatement.textContent = "It's " + playerScore + " to " + computerScore + " Tie game this round"; 
    pContainer.appendChild(gameStatement);
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    gameStatement.textContent = "It's " + playerScore + " to " + computerScore + " Computer wins this round"; 
    pContainer.appendChild(gameStatement);
  } else {
    return "Sorry, that's not a valid option";
  }

  setTimeout(function() {
    gameStatement.textContent = "";
  }, 3000);
}

let playerScore = 0;
let computerScore = 0;


const buttons = document.querySelectorAll('button');


for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (){


    let playerChoice = this.id;
    let computerSelects = getComputerChoice();

    playRound(playerChoice, computerSelects);
    console.log(playerScore);
    console.log(computerScore);
  })

}


function game () { 
  let count = 0 

  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (){

    count++;

    if (count >= 5) {


      showWinForAMoment();

      playerScore = 0; 
      computerScore = 0; 
      count = 0; 
      

    }

    })
  }
  
}

  game(); 




  function showWinForAMoment() {

    winStatement.innerText = "This text will disappear in a moment.";
        if (playerScore > computerScore) {
        winStatement.innerText = "Player wins the game! By a score of " + playerScore + " to " + computerScore;
        h1Container.appendChild(winStatement);
    

      } else if (computerScore > playerScore) {
        winStatement.innerText = "Computer wins the game! By a score of " + computerScore + " to " + playerScore;
        h1Container.appendChild(winStatement);


      } else if (computerScore === playerScore) {
        winStatement.innerText = "No one wins this game. It's a tie " + computerScore + ":" + playerScore;
        h1Container.appendChild(winStatement);
      }

    // Set a timeout to remove the text after 2 seconds (2000 milliseconds)
    setTimeout(function() {
      winStatement.innerText = "";
    }, 3000);
  }
  
