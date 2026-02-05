let userName = prompt("Enter your name:");

let userDiv = document.getElementById("user-name");
userDiv.textContent = userName;

let resultDiv = document.getElementById("result");

roundNumber = 1;
userWins = 0;
computerWins = 0;

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
}

function btnScissors() {
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
}

function btnPaper() {
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
}

function updateScores() {
    let userScoreDiv = document.getElementById("userScore");
    let computerScoreDiv = document.getElementById("computerScore");
    let roundDiv = document.getElementById("roundNumber");
    userScoreDiv.textContent = "User Score: " + userWins;
    computerScoreDiv.textContent = "Computer Score: " + computerWins;
    roundNumber += 1;
    roundDiv.textContent = "Round: " + roundNumber;
}

