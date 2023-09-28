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

    const displayContainer = document.querySelector('#displayContainer');
    const p = document.createElement('p');


  function game () { 
    let count = 0 
    for(let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function (){

      count++;

      if (count >= 5) {


        if (playerScore > computerScore) {
          p.textContent = "Player wins the game! By a score of " + playerScore + " to " + computerScore;
          displayContainer.appendChild(p);
     

        } else if (computerScore > playerScore) {
          p.textContent = "Computer wins the game! By a score of " + computerScore + " to " + playerScore;
          displayContainer.appendChild(p);


        } else if (computerScore === playerScore) {
          p.textContent = "No one wins this game. It's a tie " + computerScore + ":" + playerScore;
          displayContainer.appendChild(p);
          

        }

        playerScore = 0; 
        computerScore = 0; 
        count = 0; 
        

      }

      })
    }
    
  }

  game(); 




