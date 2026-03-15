// 0 = ROCK, 1 = SCISSORS, 2 = PAPER

function getComputerChoice() {
  const choices = ["ROCK", "SCISSORS", "PAPER"];
  const cmptChoice = Math.floor(Math.random() * 3);
  console.log(`COMPUTER chooses ${choices[cmptChoice]}`);
  return cmptChoice;
}

function getPlayerChoice() {
  let input = prompt("PLEASE ENTER YOUR ANSWER: ROCK, PAPER OR SCISSORS")
    .trim()
    .toLowerCase();

  if (input === "rock") return 0;
  if (input === "scissors") return 1;
  if (input === "paper") return 2;

  alert("YOUR ANSWER IS WRONG");
  return getPlayerChoice(); // ask again
}

// scores live outside so they persist across rounds
let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice) {
  // draw
  if (playerChoice === computerChoice) {
    console.log("THE ROUND IS A DRAW");
  }
  // player wins
  else if (
    (playerChoice === 0 && computerChoice === 1) || // rock beats scissors
    (playerChoice === 1 && computerChoice === 2) || // scissors beats paper
    (playerChoice === 2 && computerChoice === 0)    // paper beats rock
  ) {
    console.log("You WIN this round!");
    playerScore++;
  }
  // computer wins
  else {
    console.log("You LOSE this round!");
    computerScore++;
  }

  console.log(
    `SCORE NOW - PLAYER: ${playerScore} | COMPUTER: ${computerScore}`,
  );
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log(`\nROUND ${i + 1}`);
    const player = getPlayerChoice();
    const computer = getComputerChoice();
    playRound(player, computer);
  }

  console.log("\nGAME OVER");
  if (playerScore > computerScore) {
    console.log("FINAL RESULT: You WIN the game!");
  } else if (playerScore < computerScore) {
    console.log("FINAL RESULT: You LOSE the game!");
  } else {
    console.log("FINAL RESULT: The game is a DRAW!");
  }
}

playGame();