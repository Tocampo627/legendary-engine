"use strict";
const secretWordArray = [
  "MEXICO",
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

const randomWord = () => {
  secretWord =
    secretWordArray[Math.floor(Math.random() * secretWordArray.length)];
  console.log(secretWord);
};
randomWord();

//functions that  control the HTML text
const statustDisplay = () => {
  document.getElementById(
    "yes-no"
  ).innerHTML = `Your Word Has: ${secretWord.length} letters!`;
};
statustDisplay();
const enterYourGuess = () => {
  document.getElementById("enter-Your-Guess").innerHTML = "Enter Your Guess!";
};
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
      onClick ="handleGuess ('` +
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
const guessedWord = () => {
  clickedLetter = secretWord
    .split("")
    .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");
  document.getElementById("the-words").innerHTML = clickedLetter;
  console.log(clickedLetter);
};
guessedWord();
// working with word status
const handleGuess = (chosenLetter) => {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute("disabled", "disabled");

  //alert(secretWord);
  if (secretWord.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (secretWord.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangManPic();
  }
};
// const changeImage = () => {
//   let manImage = document.getElementById('man-image');
//   if(manImage.scroll.match(https://lh3.googleusercontent.com/Vl0m41JpanVyOcfU8mjKLgBxTqHny_w--eqqhB7Vb_SrTc1a08IdjP02h9a_G_S4-R7Y1TkeDycbPh4dzh1ZFuZ8HRp17BqGfEmNgVbHJtxmZ1qPna-QYSqP2O9jpb_hduyefsaMig=w2400));

// };

const checkIfGameWon = () => {
  if (clickedLetter === secretWord) {
    document.getElementById("yes-no").innerHTML = "YOU WON 🥇";
  }
};
const checkIfGameLost = () => {
  if (mistakes === maxWrong) {
    document.getElementById(
      "the-words"
    ).innerHTML = `The answer was ${secretWord}!`;
    //disappear the keyboard
    document.getElementById("keyboard").setAttribute("disabled", true);
    document.getElementById("yes-no").innerHTML = "YOU LOST 👎";
    document.getElementById("enter-Your-Guess").innerHTML = "NICE TRY ";
  }
};

const updateMistakes = () => {
  document.getElementById("mistakes").innerHTML = mistakes;
};
const reset = () => {
  mistakes = 0;
  guessed = [];
  clickedLetter = null;
  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
  statustDisplay();
  enterYourGuess();
};
