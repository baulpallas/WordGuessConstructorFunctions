const Letter = require("./letter.js");
const wordArray = ["filter", "split", "pop", "append", "foreach", "slice"];

let num = Math.floor(Math.random() * 5);
let chosenWord = wordArray[num];
let wrong = "_";
// letterArray = chosenWord.split("");

function Word(word) {
  let letterArray = [];
  let letterObjArray = [];
  let letterObj;
  letterArray = word.split("");
  letterArray.forEach(letter => {
    letterObj = new Letter("a", letter);
    letterObjArray.push(letterObj);
  });
  console.log(JSON.stringify(letterObjArray) + "line 14");
}
Word(chosenWord);

// console.log(letterArray);

// let pipe = new Letter("hello", "yaaaas", "whatsup?");
// console.log(pipe);
