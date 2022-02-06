function computerPlay() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

//console.log('Computer chose' + ' ' + computerPlay());

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        alert('Tie game!');
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        computerScore++;
        alert('Computer scored a point!')
    } else if (
        (computerSelection == "scissors" && playerSelection == "rock") ||
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "rock" && playerSelection == "paper")
    ) {
        playerScore++;
        alert('Player scored a point!')
    }
}

    function game() {
        while (playerScore < 5 && computerScore < 5) {
            let playerSelection = prompt("Pick rock, paper or scissors");
            const computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
              let score = `The score is ${playerScore} to ${computerScore}`;
              if (playerScore === 5) {
                alert('You won!');
              }
              else if (computerScore === 5) {
                alert('Computer won! You lost!');
              }
              else {alert(score)}




        }

    }

game();
