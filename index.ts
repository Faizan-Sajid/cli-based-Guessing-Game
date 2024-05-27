import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 6 + 1);


const answer = await inquirer.prompt([
  {
    name: "randomNumber",
    type: "number",
    message: "Guess a number between 1/6",
  },
]);
if (answer.randomNumber === randomNumber) {
  console.log("Congrulation You Guess a Right Number");
} else {
  console.log("You Guess a Wrong Number");
}
