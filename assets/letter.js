var inquirer = require("inquirer");
let Letter = guess => {
  this.userGuess = guess;
  this.correctLetter = "a";
  this.wrongLetter = "_";

  this.guessRight = () => {
    if (this.userGuess === this.correctLetter) {
      console.log(this.correctLetter);
    } else {
      console.log(this.wrongLetter);
    }
  };
};

let questions = () => {
  inquirer
    .prompt([
      {
        name: "guess",
        type: "input",
        message: "What is your guess????"
      }
    ])
    .then(answers => {
      if (answers.guess === "a") {
        Letter(answers.guess);
        console.log("hello!");
      }
    });
};

questions();
