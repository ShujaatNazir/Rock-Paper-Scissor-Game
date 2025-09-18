const score = {
    wins : 0,
    losses : 0,
    ties : 0,
}


//* this function choses computer move
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

//! this function evals the result 
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
        return 'You Lost'
    }
}


//* get the userMove based on the userClick
    
    const rockImage = document.querySelector('#Rock');
    const paperImage = document.querySelector('#Paper');
    const scissorImage = document.querySelector('#Scissor');

    rockImage.addEventListener('click' , () => {
        const userMove = 'Rock';
        const moveOfComputer = computerMove();
        const gameResult = result(userMove , moveOfComputer);
        displayResult(userMove , moveOfComputer , gameResult);
    });

    paperImage.addEventListener('click' , () => {
        const userMove = 'Paper';
        const moveOfComputer = computerMove();
        const gameResult = result(userMove , moveOfComputer);
        displayResult(userMove , moveOfComputer , gameResult);
    });

    scissorImage.addEventListener('click' , () => {
        const userMove = 'Scissor';
        const moveOfComputer = computerMove();
        const gameResult = result(userMove , moveOfComputer);
        displayResult(userMove , moveOfComputer , gameResult);
    });

function displayResult(userMove , moveOfComputer , gameResult) {

    let displayMove = document.querySelector('#moves');
    displayMove.innerText = `You chose ${userMove}, Computer chose ${moveOfComputer}.`;

    let displayGameResult = document.querySelector('#gameResult');
    displayGameResult.innerText = `${gameResult}`;

    let displayScore = document.querySelector('#score');
    displayScore.innerText = `Wins : ${score.wins} , Losses : ${score.losses} , Ties : ${score.ties}`;
}

    //* resets the score of the game!!!
    const reset_Button = document.querySelector('#resetButton');
    reset_Button.addEventListener('click' , ()=> {
        let displayScore = document.querySelector('#score');
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        displayScore.innerHTML = `<h4>Wins : ${score.wins} , Losses : ${score.losses} , Ties : ${score.ties}</h4>`;
    });


    // add local storage----->><<





