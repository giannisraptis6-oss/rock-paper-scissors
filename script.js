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
// for (let i = 0; i <= 4; i++) {
//   console.log(getComputerChoice());
// }

// NOW I HAVE TO WRITE THE FUNCTION THAT GET THE HUMAN CHOICE LIKE THE SAME WAY BUT
// THE HUMAN HAS TO WRITE THE ANSWER AND PUT IT IN A CONST LIKE TO COMPUTERS ONE
// THE STRUCTURE WILL BE LIKE THIS :
function getPlayerChoice() {
  let plCHoice;
  let choices = ["rock", "scissors", "paper"];
  let input = prompt(
    "PLEASE ENTER YOUR ANSWER: ROCK,PAPER OR SCISSORS",
  ).toLowerCase();
  if (input === "rock") {
    plCHoice = 0;
  } else if (input === "scissors") {
    plCHoice = 1;
  } else if (input === "paper") {
    plCHoice = 2;
  } else {
    prompt("YOUR ANSWER IS WRONG");
  }
//   return choices[plCHoice];
}
// console.log(getPlayerChoice());
