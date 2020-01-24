var inquirer = require("inquirer");

// Constructor function for building letter
function Letter(userGuess, correctLetter, wrongLetter) {
  this.userGuess = userGuess;
  this.correctLetter = correctLetter;
  this.wrongLetter = wrongLetter;

  this.guessRight = () => {
    if (this.userGuess === this.correctLetter) {
      console.log(this.correctLetter);
    } else {
      console.log(this.wrongLetter);
    }
  };
}

Letter.prototype.printInfo = function() {
  console.log(
    "User Guess: " +
      this.userGuess +
      "\n Correct Letter: " +
      this.correctLetter +
      "\nWrong Letter: " +
      this.wrongLetter
  );
};

let askQuestions = () => {
  inquirer
    .prompt([
      {
        name: "guess",
        type: "input",
        message: "What is your guess????"
      },
      {
        name: "right",
        type: "input",
        message: "insert correct answer"
      },
      {
        name: "wrong",
        type: "input",
        message: "other?"
      }
    ])
    .then(answers => {
      console.log(answers.guess, answers.right, answers.wrong);
      let guessedLetter = new Letter(
        answers.guess,
        answers.right,
        answers.wrong
      );
      guessedLetter.printInfo();
      if (answers.guess === answers.right) {
        // Letter(answers.guess);
        console.log("hello!");
      }
    });
};

askQuestions();
module.exports = Letter;
