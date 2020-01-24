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

module.exports = Letter;
