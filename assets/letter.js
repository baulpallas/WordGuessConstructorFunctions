// Constructor function for building letter
function Letter(userGuess, correctLetter) {
  this.userGuess = userGuess;
  this.correctLetter = correctLetter;

  this.guessCorrectly = false;
  this.wrongLetter = "_";

  // function to see if you guess right?
  this.guessRight = () => {
    if (this.userGuess === this.correctLetter) {
      this.guessCorrectly = true;
    }
  };

  this.isCorrect = answers => {
    if (answers.guess === this.correctLetter) {
      console.log("that is correct!");
      return this.correctLetter;
      // Letter(answers.guess);
    } else {
      return "_";
    }
  };
}

module.exports = Letter;
