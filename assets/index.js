let Word = require("./word.js");
const wordArray = ["filter", "split", "pop", "append", "foreach", "slice"];
let num = Math.floor(Math.random() * 5);
let randomWord = wordArray[num];

let playedWord = new Word(randomWord);
console.log(playedWord);
