let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() {
    let guessnumber = parseInt(userInput.value);
    if (guessnumber > randomNumber) {
        gameResult.textContent = "Too High Try again bro!!!!!!!"
    } else if (guessnumber === randomNumber) {
        gameResult.textContent = "Congrats You are brilliant eeee"
    } else if (guessnumber < randomNumber) {
        gameResult.textContent = "Too low"
    } else {

        gameResult.textContent = "please enter a valid number"
        gameResult.style.backgroundColor = "red"
    }
}