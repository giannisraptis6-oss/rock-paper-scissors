// FIRST I WILL WRITE THE PSEDOCODE!
// WE WANT THE GETCOMPUTERCHOICE FUNCTION TO MAKE THE MATH.RANDOM USE AND GET A RANDOM NUMBER THAT WILL DECLARE THE CHOICE IT WILL GET FORM -ROCK-PAPER-SCISSOERS-
// function getComputerChoice (   Math.random()  )   {
//  if choice 1 then computer choice id rock
//  else if choice 2 the computer choice is paper
//  else choice 3 the computer choice is scissors
//  return computer choice ()   }
// WHITH MATH FLOOR WE CHOOP THE .00 AND KEEP THE FIRST ONE
// NOW WILL ONLY GET 0-1-2 AND MUCH THE NUMBERS TI THE ROCK-PAPER-SCISSORS
// console.log(Math.floor( Math.random()*3))

function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}
for (let i = 0; i <= 4; i++) {
  console.log(getComputerChoice());
}
