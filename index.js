function getComputerChoice (){
  const options = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * options.length);
  let choice = options[randomNumber];
  return choice;
}

let playerScore = 0;
let computerScore = 0;
const h1Container = document.querySelector('#h1Container');
const pContainer = document.querySelector('#pContainer');
const winStatement = document.createElement('h1');
const gameStatement = document.createElement('p');


const playerScoreTracker = document.getElementById("playerScore"); 
const computerScoreTracker = document.getElementById("computerScore"); 

const existingPlayerText = playerScoreTracker.textContent; 
const existingComputerText = computerScoreTracker.textContent; 



function playRound(playerSelection, computerSelection) {
  


  if (playerSelection === "rock" && computerSelection === "rock") {
    gameStatement.textContent = "You picked rock and the computer picked rock too. Tie this time! It's still player score: " + playerScore + " to computer score: " + computerScore; 
    pContainer.appendChild(gameStatement);
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    gameStatement.textContent = "You picked rock but computer picked paper! Computer wins this time. It's now player score: " + playerScore + " to computer score: " + computerScore; 
    pContainer.appendChild(gameStatement);
    const newPlayerText = existingPlayerText + " " + playerScore
    const newComputerText = existingComputerText + " " + computerScore
    playerScoreTracker.textContent = newPlayerText;
    computerScoreTracker.textContent = newComputerText;


  } else if (playerSelection === "rock" && computerSelection ==="scissors") {
    playerScore++;
    gameStatement.textContent = "You picked rock and computer picked scissors! You win this time! It's now player score:" + playerScore + " to computer score: " + computerScore; 
    pContainer.appendChild(gameStatement);
    const newPlayerText = existingPlayerText + " " + playerScore
    const newComputerText = existingComputerText + " " + computerScore
    playerScoreTracker.textContent = newPlayerText;
    computerScoreTracker.textContent = newComputerText;

  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    gameStatement.textContent = "You picked scissors but computer picked rock! Computer wins this time. It's now player score: " + playerScore + " to computer score: " + computerScore; 
    pContainer.appendChild(gameStatement);
    const newPlayerText = existingPlayerText + " " + playerScore
    const newComputerText = existingComputerText + " " + computerScore
    playerScoreTracker.textContent = newPlayerText;
    computerScoreTracker.textContent = newComputerText;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    gameStatement.textContent = "You picked scissors and computer picked paper! You wins this time! It's now player score: " + playerScore + " to computer score: " + computerScore;
    pContainer.appendChild(gameStatement);
    const newPlayerText = existingPlayerText + " " + playerScore
    const newComputerText = existingComputerText + " " + computerScore
    playerScoreTracker.textContent = newPlayerText;
    computerScoreTracker.textContent = newComputerText;
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    gameStatement.textContent = "You picked scissors AND computer picked scissors! Tie this time. It's still player score: " + playerScore + " to computer score: " + computerScore;
    pContainer.appendChild(gameStatement);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    gameStatement.textContent = "You picked paper and computer picked rock! You win this time! It's now player score: " + playerScore + " to computer score: " + computerScore;
    pContainer.appendChild(gameStatement);
    const newPlayerText = existingPlayerText + " " + playerScore
    const newComputerText = existingComputerText + " " + computerScore
    playerScoreTracker.textContent = newPlayerText;
    computerScoreTracker.textContent = newComputerText;
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    gameStatement.textContent = "You picked paper AND the computer picked paper too. Tie this time! It's still player score: " + playerScore + " to computer score: " + computerScore;
    pContainer.appendChild(gameStatement);
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    gameStatement.textContent = "You picked rock but the computer picked scissors! Computer wins this time! It's now player score: " + playerScore + " to computer score: " + computerScore;
    pContainer.appendChild(gameStatement);
    const newPlayerText = existingPlayerText + " " + playerScore
    const newComputerText = existingComputerText + " " + computerScore
    playerScoreTracker.textContent = newPlayerText;
    computerScoreTracker.textContent = newComputerText;
  } 
  setTimeout(function() {
    gameStatement.textContent = "";
  }, 4000);
}



const buttons = document.querySelectorAll('button');
for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (){
    let playerChoice = this.id;
    let computerSelects = getComputerChoice();
    playRound(playerChoice, computerSelects);
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
        setTimeout(function() {
          const newPlayerText = existingPlayerText + " " + playerScore
          const newComputerText = existingComputerText + " " + computerScore
          playerScoreTracker.textContent = newPlayerText;
          computerScoreTracker.textContent = newComputerText;
        }, 4000);
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

  setTimeout(function() {
    winStatement.innerText = "";
  }, 4000);
}

