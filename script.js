let userName = prompt("Enter your name:");

let userDiv = document.getElementById("user-name");
userDiv.textContent = userName;

let playerLabel = document.getElementById("playerLabel");
playerLabel.textContent = userName;

let resultDiv = document.getElementById("result");

roundNumber = 1;
userWins = 0;
computerWins = 0;
gameOver = false;

choices = ["rock", "paper", "scissors"];
choiceImages = {"rock": "Dino", "paper": "Leaf", "scissors": "Claws"};

function displayImages(userChoice, computerChoice) {
    let userImageImg = document.getElementById("userImage");
    let computerImageImg = document.getElementById("computerImage");

    const userMap = {
        rock: "userDino.png",
        paper: "userLeaf.png",
        scissors: "userClaws.png"
    };

    const compMap = {
        rock: "computerDino.png",
        paper: "computerLeaf.png",
        scissors: "computerClaws.png"
    };

    if (userImageImg) {
        userImageImg.src = "userImages/" + (userMap[userChoice] || "");
        userImageImg.alt = userChoice;
    }

    if (computerImageImg) {
        computerImageImg.src = "computerImages/" + (compMap[computerChoice] || "");
        computerImageImg.alt = computerChoice;
    }
}

function btnRock() {
    if (gameOver) return;
    let userChoice = "rock";
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    displayImages(userChoice, computerChoice);
    
    if (computerChoice === "scissors") {
        console.log("User wins this round!");
        userWins += 1;
        resultDiv.textContent = userName + " wins this round!";
    } else if (computerChoice === "rock") {
        resultDiv.textContent = "It's a tie!";
    } else {
        console.log("Computer wins this round!");
        computerWins += 1;
        resultDiv.textContent = "Computer wins this round!";
    }
    updateScores();
    checkGameWinner();
}

function btnScissors() {
    if (gameOver) return;
    let userChoice = "scissors";
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    displayImages(userChoice, computerChoice);
    
    if (computerChoice === "paper") {
        console.log("User wins this round!");
        userWins += 1;
        resultDiv.textContent = userName + " wins this round!";
    } else if (computerChoice === "scissors") {
        resultDiv.textContent = "It's a tie!";
    } else {
        console.log("Computer wins this round!");
        computerWins += 1;
        resultDiv.textContent = "Computer wins this round!";
    }
    updateScores();
    checkGameWinner();
}

function btnPaper() {
    if (gameOver) return;
    let userChoice = "paper";
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    displayImages(userChoice, computerChoice);
    
    if (computerChoice === "rock") {
        console.log("User wins this round!");
        userWins += 1;
        resultDiv.textContent = userName + " wins this round!";
    } else if (computerChoice === "paper") {
        resultDiv.textContent = "It's a tie!";
    } else {
        console.log("Computer wins this round!");
        computerWins += 1;
        resultDiv.textContent = "Computer wins this round!";
    }
    updateScores();
    checkGameWinner();
}

function updateScores() {
    let userScoreDiv = document.getElementById("userScore");
    let computerScoreDiv = document.getElementById("computerScore");
    let roundDiv = document.getElementById("roundNumber");
    userScoreDiv.textContent = userWins;
    computerScoreDiv.textContent = computerWins;
    roundNumber += 1;
    roundDiv.textContent = "Round: " + roundNumber;
    updateWinTracker();
}
// AI WAS USED
function updateWinTracker() {
    // Update user wins
    for (let i = 1; i <= 3; i++) {
        let winElement = document.getElementById("userWin" + i);
        if (i <= userWins) {
            winElement.classList.add("filled");
        } else {
            winElement.classList.remove("filled");
        }
    }
    
    // Update computer wins
    for (let i = 1; i <= 3; i++) {
        let winElement = document.getElementById("computerWin" + i);
        if (i <= computerWins) {
            winElement.classList.add("filled");
        } else {
            winElement.classList.remove("filled");
        }
    }
}
// AI WAS USED

function checkGameWinner() {
    if (userWins === 3) {
        displayGameOver(userName + " WINS THE GAME!");
    } else if (computerWins === 3) {
        displayGameOver("COMPUTER WINS THE GAME!");
    }
}

function displayGameOver(message) {
    gameOver = true;
    const winnerDisplay = document.getElementById("winnerDisplay");
    winnerDisplay.innerHTML = `
        <div class="winnerMessage">${message}</div>
        <div class="resetButtonContainer">
            <button class="resetBtn" onclick="resetGame()">🦕 Play Again 🦕</button>
        </div>
    `;
    winnerDisplay.classList.add("show"); 
    // USED AI
}

function resetGame() {
    roundNumber = 1;
    userWins = 0;
    computerWins = 0;
    gameOver = false;
    resultDiv.innerHTML = "";
    
    let userScoreDiv = document.getElementById("userScore");
    let computerScoreDiv = document.getElementById("computerScore");
    let roundDiv = document.getElementById("roundNumber");
    userScoreDiv.textContent = "0";
    computerScoreDiv.textContent = "0";
    roundDiv.textContent = "Round: 1";
    
    let userImageImg = document.getElementById("userImage");
    let computerImageImg = document.getElementById("computerImage");
    if (userImageImg) userImageImg.src = "";
    if (computerImageImg) computerImageImg.src = "";
    
    const winnerDisplay = document.getElementById("winnerDisplay");
    winnerDisplay.classList.remove("show");
    winnerDisplay.innerHTML = "";
    
    updateWinTracker();
}