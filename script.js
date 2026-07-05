let maxNum = 50;
let attempts = 10;
let tries = 0;

let secretNumber = Math.floor(Math.random() * maxNum) + 1;

document.getElementById("info").innerText =
    `I picked a number between 1 and ${maxNum}`;

document.getElementById("attempts").innerText =
    `Attempts left: ${attempts}`;

function checkGuess() {
    let guess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");

    if (!guess) {
        message.innerText = "Enter a valid number!";
        return;
    }

    tries++;
    let left = attempts - tries;

    if (guess < 1 || guess > maxNum) {
        message.innerText = `Guess between 1 and ${maxNum}`;
        return;
    }

    if (guess === secretNumber) {
        message.innerText = `🎉 Correct! You won in ${tries} tries!`;
        return;
    } else if (guess < secretNumber) {
        message.innerText = "Too low!";
    } else {
        message.innerText = "Too high!";
    }

    if (Math.abs(guess - secretNumber) <= 5) {
        message.innerText += " 🔥 You're very close!";
    }

    document.getElementById("attempts").innerText =
        `Attempts left: ${left}`;

    if (left <= 0) {
        message.innerText = `Game Over! Number was ${secretNumber}`;
    }
}
