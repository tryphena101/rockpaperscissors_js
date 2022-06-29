
//Let computer choose from random for the game and hook it up to UI
  function computerPlay() {
    const container = document.querySelectorAll('.computer-class')
    let x = container[Math.floor(Math.random() * container.length)]
    x.classList.add('selected')
    setTimeout(function() {
       x.classList.remove('selected');
    },500)
    return x.id
  }

let computerWinAmount = 0;
let playerWinAmount = 0;


function playRound(playerSelection, computerSelection) {
    // computerSelection = computerPlay().toLowerCase();
    // playerSelection = playerSelection().toLowerCase();
    if (playerSelection === computerSelection) {
      document.querySelector('.player-human').innerText = 'Tie!'
      document.querySelector('.player-computer').innerText = 'Tie!'
      setTimeout(function() {
        document.querySelector('.player-computer').innerText = 'Computer';
        document.querySelector('.player-human').innerText = 'Human';
      }, 500)

    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        computerWin();
        const winnerComputer = document.querySelector(`.player-computer`);
        winnerComputer.innerText = "Winner!";
        // if document.getElementById
        document.querySelector('#computer.container').classList.add('winner');
        setTimeout(function() {
          document.querySelector(`#computer.container`).classList.remove('winner');
          document.querySelector('.player-computer').innerText = 'Computer';
        }, 500)
        console.log('Computer scored a point! Computer wins!')
    } else if (
        (computerSelection == "scissors" && playerSelection == "rock") ||
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "rock" && playerSelection == "paper")
    ) {
        playerWin();
        const winnerHuman = document.querySelector(`.player-human`);
        winnerHuman.innerText = "Winner!";
        document.querySelector('#human.container').classList.add('winner');
        setTimeout(function() {
          document.querySelector(`#human.container`).classList.remove('winner');
          document.querySelector('.player-human').innerText = 'Human';
        }, 500)
        console.log('Player scored a point! Player wins!')
    }

}



//creating a function that accesses all the button ids at once
const buttons = document.querySelectorAll('.human-container');

buttons.forEach((button) => {
  button.addEventListener('click', function(e) {

    const computerSelection = computerPlay()
    // .toLowerCase();
    const playerSelection = e.target.id
    e.target.classList.add('selected')
    setTimeout(function() {
       e.target.classList.remove('selected');
    },500)
    // button.classList.add('selected')
    playRound(playerSelection, computerSelection)
    if (playerWinAmount === 5 || computerWinAmount === 5) {
      winnerUpdate(playerWinAmount)
      reset()
    }



  });

});

const playerScore = document.querySelector(".humanScore");
const computerScore = document.querySelector(".computerScore");
const tieGame = document.getElementById("tieGame");

//update score
function playerWin() {
  ++playerWinAmount
    playerScore.innerHTML = playerWinAmount + "/5";
}

function computerWin() {
  ++computerWinAmount
    computerScore.innerHTML = computerWinAmount + "/5";

}

//announce winnerHuman
function winnerUpdate(playerWinAmount) {

    const announcement = document.querySelector('.announcement');
    announcement.classList.add('visible');

    let win = document.querySelector('.win');
    if (playerWinAmount === 5) {
        win.innerText = "You won!"
    } else {
        win.innerText = "You lost!"
    }


    setTimeout(function() {
        announcement.classList.remove('visible');
        location.reload();
    }, 1500);

}

//reset the game/score after user/computer wins
function reset() {
  computerWinAmount = 0;
  playerWinAmount = 0;
  playerScore.innerHTML = "0/5";
  computerScore.innerHTML = "0/5";
}
