const rockbtn = document.getElementById('rock');
const scissorbtn = document.getElementById('scissor');
const paperbtn = document.getElementById('paper');

const results = document.getElementById('resultbox');

function playRound(userChoice){

    function random() {
        return Math.floor(Math.random() * 3);
    }

    function rockPaperScissors(num) {
        if (num == 0) {
            return "rock";
        }
        if (num == 1) {
            return "paper";
        }
        if (num == 2) {
            return "scissors";
        }
    }

    const computerChoice = rockPaperScissors(random());
    const br = document.createElement("br");

    if (userChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("Paper beats rock, you lose!");
            const text = document.createTextNode("Paper beats rock, you lose!\n");
            results.appendChild(text);
            results.appendChild(br);
            return "lose";
        } else if (computerChoice == "scissors") {
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

    if (userChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("Paper beats rock, you win!\n");
            const text = document.createTextNode("Paper beats rock, you win!");
            results.appendChild(text);
            results.appendChild(br);
            return "win";
        } else if (computerChoice == "scissors") {
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

    if (userChoice == "scissors") {
        if (computerChoice == "paper") {
            console.log("Scissors beat paper, you win!\n");
            const text = document.createTextNode("Scissors beat paper, you win!");
            results.appendChild(text);
            results.appendChild(br);
            return "win";
        } else if (computerChoice == "rock") {
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

rockbtn.addEventListener('click', () => {
    playRound('rock');
  });

scissorbtn.addEventListener('click', () => {
    playRound('scissors');
  });

paperbtn.addEventListener('click', () => {
    playRound('paper');
  });