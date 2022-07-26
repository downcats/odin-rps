function playRound(){

    let userInput = prompt("Make your choice: ");
    userInput = userInput.toLowerCase();

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

    if (userInput == "rock") {
        if (computerChoice == "paper") {
            console.log("Paper beats rock, you lose!");
            return "lose";
        } else if (computerChoice == "scissors") {
            console.log("Rock beats scissors, you win!");
            return "win";
        } else {
            console.log("Tie!");
            return "tie";
        }
    }

    if (userInput == "paper") {
        if (computerChoice == "rock") {
            console.log("Paper beats rock, you win!");
            return "win";
        } else if (computerChoice == "scissors") {
            console.log("Scissors beats paper, you lose!");
            return "lose";
        } else {
            console.log("Tie!");
            return "tie";
        }
    }

    if (userInput == "scissors") {
        if (computerChoice == "paper") {
            console.log("Scissors beat paper, you win!");
            return "win";
        } else if (computerChoice == "rock") {
            console.log("Rock beats scissors, you lose!");
            return "lose";
        } else {
            console.log("Tie!");
            return "tie";
        }
    }
}

function game(){
    let userScore = 0;
    let computerScore = 0;
    let winner = false;

    while (!winner){
        let result = playRound();
        if (result == "win"){
            userScore++;
        }
        if (result == "lose"){
            computerScore++;
        }
        console.log("Score is " + userScore + "-" + computerScore);
        if (userScore == 3){
            console.log("You win! Best 3 out of 5!");
            winner = true;
        }
        if (computerScore == 3){
            console.log("You lose! Best 3 out of 5!");
            winner = true;
        }
    }    
}

game();