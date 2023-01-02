const rockbtn = document.getElementById('rock');
const scissorbtn = document.getElementById('scissor');
const paperbtn = document.getElementById('paper');

const results = document.getElementById('resultbox');

let computerScore = 0;
let playerScore = 0;

function playRound(userChoice){

    function random() {
        return Math.floor(Math.random() * 3);
    }

    function rockPaperScissors(num) {
        if (num === 0) {
            return "rock";
        }
        if (num === 1) {
            return "paper";
        }
        if (num === 2) {
            return "scissors";
        }
    }

    const computerChoice = rockPaperScissors(random());
    const br = document.createElement("br");
    results.innerHTML = "";

    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("Paper beats rock, you lose!");
            const text = document.createTextNode("Paper beats rock, you lose!\n");
            results.appendChild(text);
            results.appendChild(br);
            return "lose";
        } else if (computerChoice === "scissors") {
            console.log("Rock beats scissors, you win!");
            const text = document.createTextNode("Rock beats scissors, you win!\n");
            results.appendChild(text);
            results.appendChild(br);
            return "win";
        } else {
            console.log("Tie!");
            const text = document.createTextNode("Tie!\n");
            results.appendChild(text);
            results.appendChild(br);
            return "tie";
        }
    }

    if (userChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("Paper beats rock, you win!\n");
            const text = document.createTextNode("Paper beats rock, you win!");
            results.appendChild(text);
            results.appendChild(br);
            return "win";
        } else if (computerChoice === "scissors") {
            console.log("Scissors beats paper, you lose!\n");
            const text = document.createTextNode("Scissors beats paper, you lose!");
            results.appendChild(text);
            results.appendChild(br);
            return "lose";
        } else {
            console.log("Tie!");
            const text = document.createTextNode("Tie!\n");
            results.appendChild(text);
            results.appendChild(br);
            return "tie";
        }
    }

    if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log("Scissors beat paper, you win!\n");
            const text = document.createTextNode("Scissors beat paper, you win!");
            results.appendChild(text);
            results.appendChild(br);
            return "win";
        } else if (computerChoice === "rock") {
            console.log("Rock beats scissors, you lose!\n");
            const text = document.createTextNode("Rock beats scissors, you lose!");
            results.appendChild(text);
            results.appendChild(br);
            return "lose";
        } else {
            console.log("Tie!");
            const text = document.createTextNode("Tie!\n");
            results.appendChild(text);
            results.appendChild(br);
            return "tie";
        }
    }
}

function updateScore(result){
    let updatedScore = "";
    if (result === "win"){
        playerScore++;
        updatedScore = playerScore.toString();
        document.getElementById("player-score").innerHTML = updatedScore;
    }
    if (result === "lose"){
        computerScore++;
        updatedScore = computerScore.toString();
        document.getElementById("computer-score").innerHTML = updatedScore;
    }
}

function checkGameOver(choice){
    if (results.textContent.includes("Game over")){
        return;
    }
    results.innerHTML = "";
    if (playerScore === 5 || computerScore === 5){
        const text = document.createTextNode("Game over!\n");
        const br = document.createElement("br");
        results.appendChild(text);
        results.appendChild(br);
    }
    else {
        updateScore(playRound(choice));
    }
}

rockbtn.addEventListener('click', () => {
    checkGameOver('rock');
  });

scissorbtn.addEventListener('click', () => {
    checkGameOver('scissors');
  });

paperbtn.addEventListener('click', () => {
    checkGameOver('paper');
  });