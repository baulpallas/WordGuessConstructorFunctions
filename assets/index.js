const Word = require("./word.js");
const Letter = require("./letter.js");
const inquirer = require("inquirer");
const wordArray = ["filter", "split", "pop", "append", "foreach", "slice"];

let num = Math.floor(Math.random() * 5);
let randomWord = wordArray[num];
console.log(randomWord);
let playedWord = new Word(randomWord);
console.log(playedWord);
let guessesArray = [];
let lives = 5;

let gameLogic = () => {
  if (lives => 0) {
    questions();
    // Letter.questions();
  } else {
  }
};

// gameLogic();

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

function questions() {
  inquirer
    .prompt([
      {
        name: "guess",
        type: "input",
        message: "Please guess a letter"
      }
    ])
    .then(answers => {
      let guessedLetter = new Letter(answers.guess);
      guessedLetter.printInfo();
      if (answers.guess === this.correctLetter) {
        console.log("that is correct!");
        return this.correctLetter;
        // Letter(answers.guess);
      } else {
        lives--;
        return "_";
      }
    });
}
