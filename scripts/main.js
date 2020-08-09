
function computerPlay(){
    let computerPick = Math.floor(Math.random()*3);

    switch (computerPick){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2: 
            return "Scissors";
            break;
    }
}

function playRound(computerSelection, playerSelection) {

    if (computerSelection === playerSelection) {
        return 0;

    } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
        return 1;

    } else if (computerSelection === "Scissors" && playerSelection === "Paper"){
        return 1;

    } else if (computerSelection === "Paper" && playerSelection === "Rock"){
        return 1;

    } else if (computerSelection === "Rock" && playerSelection === "Paper"){
        return 2;

    } else if (computerSelection === "Scissors" && playerSelection === "Rock"){
        return 2;

    } else if (computerSelection === "Paper" && playerSelection === "Scissors"){
        return 2;

    } else {
        return 3;
    }
}

function checkClick(e) {

    const playerChoice = document.querySelector(`p[id='${e.target.id}']`);
    
    if (playerChoice !== null) {
        let playerSelection = playerChoice.id;
        let computerSelection = computerPlay();
        console.log('Player chooses: ' + playerSelection);
        console.log('Computer chooses: ' + computerSelection);
        game(computerSelection, playerSelection); 
    } else {
        playerMessage.textContent = 'You did not make a choice.';
    }
}

function game(computerSelection, playerSelection) {

    let currentRound = playRound(computerSelection, playerSelection);

    playerTurn.textContent = playerSelection;
    computerTurn.textContent = computerSelection;

    if (currentRound === 0) {
        playerMessage.textContent = 'It\'s a draw.';

    } else if (currentRound === 1) {
        playerMessage.textContent = 'Computer wins. :(';
        computerScore++;

    } else if (currentRound === 2) {
        playerMessage.textContent = 'Player wins!';
        playerScore++;

    }

    playerScoreboard.textContent = playerScore;
    computerScoreboard.textContent = computerScore;

    if (playerScore == maxScore || computerScore == maxScore){
        gameOver();
    } else {
        return;
    }

}

function gameOver() {
    if (playerScore > computerScore){
            playerMessage.textContent = "YOU WON THE MATCH!";
        } else {
            playerMessage.textContent = `The computer won the match.`;
        }
    playerScore = 0;
    computerScore = 0;
}

let playerScore = 0;
let computerScore = 0;
// let maxScore = prompt('What score do you want to play to?'); 
let maxScore = 3;

const playerTurn = document.getElementById('player-play');
const computerTurn = document.getElementById('computer-play');

const playerScoreboard = document.getElementById('player-score');
const computerScoreboard = document.getElementById('computer-score');
const playTo = document.getElementById('play-to');
playTo.textContent = maxScore;

const playerMessage = document.getElementById('player-message');

document.addEventListener('click', checkClick);

