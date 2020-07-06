let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessLeft = 3;

const gmae = document.getElementById('game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

//reload if mousedown at play again
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-game'){
        window.location.reload();
    }
});

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    //check guess value is valid
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    //check win or lose
    if(guess == winningNum){
        gameOver(true, `${winningNum} is correct, YOU WIN!!`)
    } else {
        //wrong answer
        guessLeft -= 1;

        if(guessLeft === 0){
            //game over
            gameOver(false, `Game over, you lost. The correct number was ${winningNum}`);
        } else {
            //game continue - wrong answer
            guessInput.value = '';
            guessInput.style.borderColor = 'red';
            setMessage(`${guess} is not correct, ${guessLeft} guesses left`, 'red');
        }
    }
});

function gameOver(won, msg){
    let color;
    won === true ? color = 'green': color = 'red';

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg, color);

    //play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-game';
}

//get random number between min and max
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}