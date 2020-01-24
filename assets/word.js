const Letter = require("./letter.js");

function Word(word) {
  let letterArray = [];
  let letterObjArray = [];
  let letterObj;
  letterArray = word.split("");
  letterArray.forEach(letter => {
    letterObj = new Letter("_", letter);
    letterObjArray.push(letterObj);
    this.letter = letterObjArray;
  });
}

Word.prototype.returnWord = function(word) {
  let playedWord = word;
  playedWord.correctGuess();
  playedWord.loopThroughArray();
};

module.exports = Word;

// console.log(letterArray);

// let pipe = new Letter("hello", "yaaaas", "whatsup?");
// console.log(pipe);
