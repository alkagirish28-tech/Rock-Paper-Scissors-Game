let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

updateScoreElement();

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    // 1. Removed all inconsistent periods from the result strings
    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose';
        } else if (computerMove === 'paper') {
            result = 'You win';
        } else if (computerMove === 'scissors') {
            result = 'Tie';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win';
        } else if (computerMove === 'paper') {
            result = 'Tie';
        } else if (computerMove === 'scissors') {
            result = 'You lose';
        }
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie';
        } else if (computerMove === 'paper') {
            result = 'You lose';
        } else if (computerMove === 'scissors') {
            result = 'You win';
        }
    }

    // 2. Conditions updated to check for clean strings (no periods)
    // 3. Changed + 1 to += 1 so the scores actually save and update
    if (result === 'You win') {
        score.wins += 1;
    } else if (result === 'You lose') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result')
        .innerHTML = result;


    document.querySelector('.js-moves')
        .innerHTML = `You
        <img src="Rock Paper Scissors_files/${playerMove}-emoji.png" class="move-icon">
        <img src="Rock Paper Scissors_files/${computerMove}-emoji.png" class="move-icon">
        Computer`;



}
function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}



function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}