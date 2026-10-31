
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("(Enter inputs consecutively, at most 9 times, until the pop up message disappears) Choose rock, paper, or scissors:").toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("It's a draw!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        }
    }

    for (let i = 0; i < 9; i++) {
        if(humanScore===5||computerScore===5) break;
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    console.log("Final scores:");
    console.log(`Human: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);

    if (humanScore ===5) {
        console.log("You win the game!");
    } else if (computerScore ===5) {
        console.log("Computer wins the game!");
}
}
playGame();