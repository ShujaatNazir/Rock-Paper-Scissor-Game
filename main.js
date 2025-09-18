
let finalScore = localStorage.getItem('score');

const score = JSON.parse(finalScore) || {
    wins : 0,
    losses : 0,
    ties : 0,
};

let displayScore = document.querySelector('#score');

displayScore.innerText = `Wins : ${score.wins} , Losses : ${score.losses} , Ties : ${score.ties}`;

//* this function chooses computer's move
function computerMove() {
    let computerMove = '';
    const randomNumber = Math.ceil(Math.random() * 3);
    switch(randomNumber) {
        case 1 : 
        computerMove = 'Rock';
        break;
        case 2 : 
        computerMove = 'Paper';
        break;
        case 3 : 
        computerMove = 'Scissor';
        break;
        default :
        console.log('Something went wrong');
    }
    return computerMove;
}   


function result(userMove , computerMove) {

    if(userMove === computerMove) {
        score.ties = score.ties + 1;
        return 'Tie';
    } else if (
        (userMove === 'Rock' && computerMove === 'Scissor') ||
        (userMove === 'Paper' && computerMove === 'Rock') ||
        (userMove === 'Scissor' && computerMove === 'Paper')
    ) {
        score.wins = score.wins + 1;
        return 'You Won';
    } else {
        score.losses = score.losses + 1;
        return 'You Lost';
    }
}


function playGame(userMove) {
    const moveOfComputer = computerMove();
    const gameResult = result(userMove , moveOfComputer);

    localStorage.setItem('score', JSON.stringify(score));

    displayResult(userMove , moveOfComputer , gameResult);
}


function displayResult(userMove , moveOfComputer , gameResult) {

    let displayMove = document.querySelector('#moves');
    displayMove.innerText = `You chose ${userMove}, Computer chose ${moveOfComputer}.`;

    let displayGameResult = document.querySelector('#gameResult');
    displayGameResult.innerText = `${gameResult}`;


    let displayScore = document.querySelector('#score');
    displayScore.innerText = `Wins : ${score.wins} , Losses : ${score.losses} , Ties : ${score.ties}`;
}

//* Event listeners for the game buttons
document.querySelector('#Rock').addEventListener('click' , () => {
    playGame('Rock');
});

document.querySelector('#Paper').addEventListener('click' , () => {
    playGame('Paper');
});

document.querySelector('#Scissor').addEventListener('click' , () => {
    playGame('Scissor');
});

//* Resets the score of the game
const reset_Button = document.querySelector('#resetButton');
reset_Button.addEventListener('click' , () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.setItem('score' , JSON.stringify(score));
    

    displayScore.innerText = `Wins : ${score.wins} , Losses : ${score.losses} , Ties : ${score.ties}`;
});