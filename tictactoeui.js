//letting the computer choose from random for the game
function computerPlay() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

//console.log('Computer chose' + ' ' + computerPlay());
//

let computerWinAmount = 0;
let playerWinAmount = 0;
let tieCount = 0;

function playRound(playerSelection, computerSelection) {
    // computerSelection = computerPlay().toLowerCase();
    // playerSelection = playerSelection().toLowerCase();
    if (playerSelection === computerSelection) {
        console.log('Tie game!');
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        computerWin();
        console.log('Computer scored a point! Computer wins!')
    } else if (
        (computerSelection == "scissors" && playerSelection == "rock") ||
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "rock" && playerSelection == "paper")
    ) {
        playerWin();
        console.log('Player scored a point! Player wins!')
    }

    if(computerWinAmount === 5) {
        alert("You lost! Better luck next time :(");
    } else if (playerWinAmount === 5) {
        alert("You won! Congratulations! :)")

    }
}

//creating a function that accesses all the button ids at once
function clickbutton(event) {
  const computerSelection = computerPlay().toLowerCase();
  const playerSelection = event.target.id
  playRound(playerSelection, computerSelection)
}
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', clickbutton);

});

const content = document.createElement('div');
// content.id = "numbers"
// const playerdiv = document.createElement('div');
// content.appendChild(playerdiv);
// playerdiv.id = "playerRound"
// content.textContent = 'The score is' + playerScore + 'to' + computerScore
document.body.appendChild(content);

let scorediv = "";
const scoreboard = ['playerRound', 'computerRound', 'tieGame'];
scoreboard.forEach(exampleFunction);

content.innerHTML = scorediv

//for each item in scoreboard I want to append a div id
function exampleFunction(item){
  scorediv += "<div id =" + "'" + item + "'" + '>' + '</div>';
}

const playerRound = document.getElementById("playerRound");
const computerRound = document.getElementById("computerRound");
const tieGame = document.getElementById("tieGame");

function playerWin() {
  ++playerWinAmount
    playerRound.innerHTML = "Your score is: " + playerWinAmount;
}

function computerWin() {
  ++computerWinAmount
    computerRound.innerHTML = "Your score is: " + computerWinAmount;

}


// function scoreCount(a, e){
//   // let scoreBox = document.getElementById(a)
//   a++;
//   console.log(a++)
//   e.textContent = "Your score is: " + a;
// }
// "<div id =" + "'" item + "'" + '</div>';

// const buttons = document.querySelectorAll('button');
// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     alert(button.id);
//   });
//
// });



// let playerSelection = prompt("Pick rock, paper or scissors");
// const computerSelection = computerPlay();
// playRound(playerSelection, computerSelection);
//               let score = `The score is ${playerScore} to ${computerScore}`;
//               if (playerScore === 5) {
//                 alert('You won!');
//               }
//               else if (computerScore === 5) {
//                 alert('Computer won! You lost!');
//               }
//               else {alert(score)}




// const btn2 = document.querySelector('#scissors');
// btn2.onclick = () => alert("Player chose scissors");
// const btn3 = document.querySelector('#paper');
// btn3.onclick = () => alert("Player chose paper");




// game();
