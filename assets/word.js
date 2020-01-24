const Letter = require("./letter.js");
const wrong = "_";

function Word(word) {
  let letterArray = [];
  let letterObjArray = [];
  let letterObj;
  letterArray = word.split("");
  letterArray.forEach(letter => {
    letterObj = new Letter("a", letter, wrong);
    letterObjArray.push(letterObj);
  });

  console.log(JSON.stringify(letterObjArray) + "line 14");
}

module.exports = Word;

// console.log(letterArray);

// let pipe = new Letter("hello", "yaaaas", "whatsup?");
// console.log(pipe);
