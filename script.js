// FIRST I WILL WRITE THE PSEDOCODE!
// WE WANT THE GETCOMPUTERCHOICE FUNCTION TO MAKE THE MATH.RANDOM USE AND GET A RANDOM NUMBER THAT WILL DECLARE THE CHOICE IT WILL GET FORM -ROCK-PAPER-SCISSOERS-
// function getComputerChoice ( Math.floor(  Math.random() ) )   {
//  if choice 1 then computer choice is rock
//  else if choice 2 the computer choice is paper
//  else choice 3 the computer choice is scissors
//  return computer choice ()   }
// WHITH MATH FLOOR WE CHOOP THE .00 AND KEEP THE FIRST ONE
// NOW WILL ONLY GET 0-1-2 AND MUCH THE NUMBERS TI THE ROCK-PAPER-SCISSORS
// console.log(Math.floor( Math.random()*3))

function getComputerChoice() {
  const choices = ["ROCK", "SCISSORS", "PAPER"];
  const cmptChoice = Math.floor(Math.random() * 3);
  console.log(`COMPUTER chooses ${choices[cmptChoice]}`);
  return cmptChoice;
}
// NOW I HAVE TO WRITE THE FUNCTION THAT GET THE HUMAN CHOICE LIKE THE SAME WAY BUT
// THE HUMAN HAS TO WRITE THE ANSWER AND PUT IT IN A CONST LIKE TO COMPUTERS ONE
// THE STRUCTURE WILL BE LIKE THIS :
function getPlayerChoice() {
  let plChoice;
  let choices = ["rock", "scissors", "paper"];
  let input = prompt(
    "PLEASE ENTER YOUR ANSWER: ROCK,PAPER OR SCISSORS",
  ).toLowerCase();
  if (input === "rock") {
    plChoice = 0;
  } else if (input === "scissors") {
    plChoice = 1;
  } else if (input === "paper") {
    plChoice = 2;
  } else {
    prompt("YOUR ANSWER IS WRONG");
  }
  return plChoice;
}


// NOW WE HAVE TO KEEP TRACK OF THE SCORE BETWEEN THE HUMAN AND THE COMPUTER
// WE HAVE TO USE THOSE TWO VARIABLES THE FIRST ONE BEENING humanScore AND THE OTHER ONE IS computerScore
// WE HAVE TO CREATE ONE MORE FUNCTION NAMES playRound WE HAVE TO DIFINE TWO PARAMETERS FOR playRound:humanChoice& computerChoice
// THE FUNCTION playRound will compare the two results and announce the winner evry time
// "You lose!Raper beats Rock"
let playerScore = 0;
let computerScore = 0;
function playRound(cmptChoice, plChoice) {
  if (cmptChoice === plChoice) {
    console.log("THE ROUND IS A DRAW");
    playerScore++;
    computerScore++;
  } else if (plChoice === 2 && cmptChoice === 0) {
    console.log("You Win,paper wins rock");
    playerScore++;
  } else if (plChoice === 0 && cmptChoice === 1) {
    console.log("You Win,rock wins scissors");
    playerScore++;
  } else if (plChoice === 1 && cmptChoice === 2) {
    console.log("You Win,scissors wins paper");
    playerScore++;
  } else if (plChoice === 1 && cmptChoice === 0) {
    console.log("You Lose,rock wins scissors");
    computerScore++;
  } else if (plChoice === 0 && cmptChoice === 2) {
    console.log("You Lose,paper wins rock");
    computerScore++;
  } else {
    console.log("You Lose,scissors wins paper");
    computerScore++;
  }
  console.log(
    `THE SCORE IS ,PLAYER: ${playerScore} - COMPUTER:${computerScore}`,
  );
}
// NOW I HAVE TO MIX IT TOGETHER AND IN THE END FIND THE WINER OF THE GAME WITH A SIMPLE IF PLAYRSCORE>COMPUTERSCORE THE WINER IS THE PLAYER
// ELSE IF PLAYERSCORE===COMPUTERSCORE THE FINAL SCORE IS A DRAW
// ELSE THE GAME WINER IS THE COMPUTER

function playGame() {
  for (let i = 0; i <= 4; i++) {
    console.log(`ROUND ${i + 1}`);
    const computer = getComputerChoice();
    const player = getPlayerChoice();
    playRound(computer, player);
  }
  console.log("GAME OVER");

  if (playerScore > computerScore) {
    console.log("FINAL RESULT: You WIN the game!");
  } else if (playerScore < computerScore) {
    console.log("FINAL RESULT: You LOSE the game!");
  } else {
    console.log("FINAL RESULT: The game is a DRAW!");
  }
}
playGame()

