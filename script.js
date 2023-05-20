let userScore = 0;
let computerScore = 0;

const userRock = document.getElementById('rock');
const userPaper = document.getElementById('paper');
const userScissors = document.getElementById('scissors');

userRock.addEventListener('click', function() { playGame("rock") } );
userPaper.addEventListener('click', function() { playGame("paper") } );
userScissors.addEventListener('click', function() { playGame("scissors") } );


function playGame(playerSelection) {

    let computerSelection = getComputerChoice();

    if (playerSelection == "rock" && computerSelection == "scissors") {
        userScore++;
        let result = "user";
        const resultDiv = document.getElementById("result");
        resultDiv.innerText = `You chose ${playerSelection} and the Computer chose ${computerSelection}. The Winner is: ${result}`;
        updateScore();

    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        let result = "computer";
        const resultDiv = document.getElementById("result");
        resultDiv.innerText = `You chose ${playerSelection} and the Computer chose ${computerSelection}. The Winner is: ${result}`;
        updateScore();

    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        userScore++;
        let result = "user";
        const resultDiv = document.getElementById("result");
        resultDiv.innerText = `You chose ${playerSelection} and the Computer chose ${computerSelection}. The Winner is: ${result}`;
        updateScore();

    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        let result = "computer";
        const resultDiv = document.getElementById("result");
        resultDiv.innerText = `You chose ${playerSelection} and the Computer chose ${computerSelection}. The Winner is: ${result}`;
        updateScore();

    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        userScore++;
        let result = "user";
        const resultDiv = document.getElementById("result");
        resultDiv.innerText = `You chose ${playerSelection} and the Computer chose ${computerSelection}. The Winner is: ${result}`;
        updateScore();

    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        let result = "computer";
        const resultDiv = document.getElementById("result");
        resultDiv.innerText = `You chose ${playerSelection} and the Computer chose ${computerSelection}. The Winner is: ${result}`;
        updateScore();
    }
    else if (playerSelection == "rock" && computerSelection == "rock") {
        let result = "draw";
        const resultDiv = document.getElementById("result");
        resultDiv.innerText = `You chose ${playerSelection} and the Computer chose ${computerSelection}. The Winner is: ${result}`;
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        let result = "draw";
        const resultDiv = document.getElementById("result");
        resultDiv.innerText = `You chose ${playerSelection} and the Computer chose ${computerSelection}. The Winner is: ${result}`;
        }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        let result = "draw";
        const resultDiv = document.getElementById("result");
        resultDiv.innerText = `USER: ${playerSelection} and PROGRAM: ${computerSelection}. The Winner is: ${result}`;
        }
};

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let selection = options[Math.floor(Math.random() * options.length)];
    return (selection);
};

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

function updateScore() {
    userScore_span.innerText = userScore;
    computerScore_span.innerText = computerScore;
}

const resetButton = document.getElementById("reset-score");
resetButton.addEventListener("click", function() {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerText = userScore;
    computerScore_span.innerText = computerScore;
});
