"use strict";
const secretWordArray = [
  "MEXICO",
  "UNITED STATES",
  "FRANCE",
  "JAPAN",
  "GHANA",
  "CHINA",
  "COLOMBIA",
  "CANADA",
  "EGYPT",
  "CHILE",
  "GREECE",
  "SPAIN",
  "MADAGASCAR",
  "VENEZUELA",
];
// set the computers pick to the secret word
let secretWord = "";
let maxWrong = 7;
let mistakes = 0;
let guessed = [];
let clickedLetter = null;
//selecting random word
const randomWord = () => {
  secretWord =
    secretWordArray[Math.floor(Math.random() * secretWordArray.length)];
  console.log(secretWord);
};
randomWord();
// generate the functions for the keyboard
const generateButtons = () => {
  let buttonsHtml = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    .split("")
    .map(
      (letter) =>
        `
      <button class="btn btn-lg btn-primary m-2"
      id='` +
        letter +
        `'
      onClick ="handleGuess('` +
        letter +
        `')">
      ` +
        letter +
        `
      </button>
    `
    )

    .join("");
  document.getElementById("keyboard").innerHTML = buttonsHtml;
};
generateButtons();

// working with the max wrong
document.getElementById("max-wrong").innerHTML = maxWrong;
// working with word status
const handleGuess = (chosenLetter) => {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute("disabled", true);
  //alert(secretWord);
  if (secretWord.indexOf(chosenLetter) >= 0) {
    guessedWord();
  } else if (secretWord.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
  }
};

// TODO have clicked buttons darken when clicked
//TODO make the reset button refresh the page
//Checking if the guessed letter is in the secret word
const guessedWord = () => {
  let clickedLetter = secretWord
    .split("")
    .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");
  document.getElementById("the-words").innerHTML = clickedLetter;
  console.log(clickedLetter);
};
guessedWord();
// Updating the counter/ mistakes
const updateMistakes = () => {
  document.getElementById("mistakes").innerHTML = mistakes;
};

// TODO Display yes if letter is found display no if not
document.querySelector(
  ".lettercount"
).textContent = `Your secret word has: ${secretWord.length} letters!`;