let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNoUpdate = document.getElementById("inputBox");
let audio2 = new Audio("./audio/right.wav")
let audio1 = new Audio("./audio/wrong.wav")
let audio3 = new Audio("./audio/intro.wav")

const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    //console.log(computerGuess);
    document.getElementById("newgamebutton").style.display = "none";
    document.getElementById("gamearea").style.display = "none";
};

const startGame = () => {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("gamearea").style.display = "block";
    audio3.play();
};


const reload = () => {
    window.location.reload();
    audio3.play();
};

const startNewGame = () => {
    document.getElementById("newgamebutton").style.display = "inline";
    userNoUpdate.setAttribute('disabled', true);
};


const compareGuess = () => {
    const userNo = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNo];
    document.getElementById("guesses").innerHTML = userGuess;


    if (userGuess.length < maxGuess) {
        if (userNo > computerGuess) {
            userGuessUpdate.innerHTML = "Your Guess is High";
            userNoUpdate.value = "";
            audio1.play();
        } else if (userNo < computerGuess) {
            userGuessUpdate.innerHTML = "Your Guess is Low";
            userNoUpdate.value = "";
            audio1.play();
        } else {
            userGuessUpdate.innerHTML = "It's Correct";
            userNoUpdate.value = "";
            audio2.play();
            startNewGame();
        }
    } else {
        if (userNo > computerGuess) {
            userGuessUpdate.innerHTML = `You Lose!! Number is ${computerGuess}`;
            userNoUpdate.value = "";
            audio1.play();
            startNewGame();
        } else if (userNo < computerGuess) {
            userGuessUpdate.innerHTML = `You Lose!! Number is ${computerGuess}`;
            userNoUpdate.value = "";
            audio1.play();
            startNewGame();
        } else {
            userGuessUpdate.innerHTML = "It's Correct";
            userNoUpdate.value = "";
            audio2.play();
            startNewGame();
        }
    }

    document.getElementById('attempts').innerHTML = userGuess.length;
};


const easyMode = () => {
    maxGuess = 10;
    audio3.play();
    startGame();
};
const hardMode = () => {
    maxGuess = 5;
    audio3.play();
    startGame();
};