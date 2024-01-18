// Rock paper scissors logic
// initialization
const choices = ['rock','paper','scissors'];
const computerDisplay = document.getElementById("div-comp-hand");
const playerDisplay = document.getElementById("div-player-hand");
const resultDisplay = document.getElementById("result-text");
const compScoreDisplay = document.getElementById("comp-score");
const playerScoreDisplay = document.getElementById("player-score");
let points = [0,0]; // index 0 is player, index 1 is computer

// run game when player makes a choice
function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    // get result and assign result variable
    if(playerChoice === computerChoice){
        result = "tie";
    } else {
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors");
                break;
            case "paper":
                result = (computerChoice === "rock");
                break;
            case "scissors":
                result = (computerChoice === "paper");
                break;
        }
    }

    // display results
    displayResults(result,playerChoice,computerChoice);
}

function displayResults(result,playerChoice,computerChoice){
    // set hand text to the hand each played and set class to played
    playerDisplay.children[0].textContent = getHand(playerChoice);
    computerDisplay.children[0].textContent = getHand(computerChoice);
    playerDisplay.children[0].className = "played";
    computerDisplay.children[0].className = "played";

    // clear css class then update display boxes to show winner and loser & update score values
    playerDisplay.className = "";
    computerDisplay.className = "";
    if (result == true){
        console.log("player won");
        playerDisplay.classList.add("hand-won");
        computerDisplay.classList.add("hand-lost");
        resultDisplay.textContent = "YOU WIN!";
        points[0] += 1;
    } else if (result == false) {
        console.log("player lost");
        playerDisplay.classList.add("hand-lost");
        computerDisplay.classList.add("hand-won");
        resultDisplay.textContent = "YOU LOSE!";
        points[1] += 1;
    } else {
        console.log("tied");
        resultDisplay.textContent = "TIE!";
    }
    // update score displays
    playerScoreDisplay.textContent = points[0];
    compScoreDisplay.textContent = points[1];
}

function getHand(choice){
    switch(choice){
        case "rock":
            return "👊";
        case "paper":
            return "✋";
        case "scissors":
            return "✌";
    }
}

function resetGame(){
    // reset strings and vars, and clear css classes
    playerDisplay.children[0].textContent = "Waiting for input...";
    computerDisplay.children[0].textContent = "Waiting for player...";
    playerDisplay.children[0].className = "";
    computerDisplay.children[0].className = "";
    points[0] = 0;
    points[1] = 0;
    playerScoreDisplay.textContent = "0";
    compScoreDisplay.textContent = "0";
    playerDisplay.className = "";
    computerDisplay.className = "";
    resultDisplay.textContent = "VS";
}