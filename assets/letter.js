// Constructor function for building letter
function Letter(userGuess, correctLetter) {
  this.userGuess = userGuess;
  this.correctLetter = correctLetter;
  this.guessCorrectly = false;
  this.wrongLetter = "_";
}

// function to see if you guess right?
Letter.prototype.correctGuess = function() {
  if (this.userGuess === this.correctLetter) {
    this.guessCorrectly = true;
  }
};

Letter.prototype.loopThroughArray = function(answers) {
  if (answers === this.correctLetter) {
    console.log("that is correct!");
    console.log(this.correctLetter);
  } else {
    console.log(this.wrongLetter);
  }
};

// Letter.guessRight();
// Letter.isCorrect();

Letter.prototype.printInfo = function() {
  console.log(
    "User Guess: " +
      this.userGuess +
      "\n Correct Letter: " +
      this.correctLetter +
      "\nguess Correctly: " +
      this.guessCorrectly +
      "\nWrong Letter: " +
      this.wrongLetter
  );
};

module.exports = Letter;
