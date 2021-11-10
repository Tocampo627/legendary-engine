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

};
randomWord();

//diplaying text HTML 
const statustDisplay = () => {
  const gettingYesNo = document.getElementById("yes-no")
  gettingYesNo.textContent = `Guess a country name that has ${secretWord.length} letters!`;
};
statustDisplay();
const enterYourGuess = () => {
  const gettingEnterYourGuess = document.getElementById("enter-Your-Guess").textContent
  gettingEnterYourGuess = "Enter Your Guess!";
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

// setting max worng 
document.getElementById("max-wrong").innerText = maxWrong;
//displayin gletters guessed if right then show the letter if wrong show _
const guessedWord = () => {
  clickedLetter = secretWord
    .split("")
    .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");
  document.getElementById("the-words").innerText = clickedLetter;
  //console.log(clickedLetter);
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
    //updateHangManPic();
  }
};
// const resetManImage =()=>{
//   let manImage= document.getElementById("man-image");
// }
const changeImage = () => {
  let manImage= document.getElementById("man-image");
  //mistakes =the number of wrong guesses
  //console.log(mistakes)
  switch (mistakes){
    case 0:
      manImage.src="https://lh3.googleusercontent.com/Vl0m41JpanVyOcfU8mjKLgBxTqHny_w--eqqhB7Vb_SrTc1a08IdjP02h9a_G_S4-R7Y1TkeDycbPh4dzh1ZFuZ8HRp17BqGfEmNgVbHJtxmZ1qPna-QYSqP2O9jpb_hduyefsaMig=w2400";
      break;
    case 1:
      manImage.src = "https://lh3.googleusercontent.com/18M1X2SMVhHBag1_U0s0-Edvhd4AVL1bItxSS9cSlguW-1SN69aM7B4TvzsrGRBssQcB-MO3q6UuWdCcEiIFvrkikP46jyoQVS6TYg1EaJD1MZpx6Q-OPti6a5COIfvtttXSyE3epQ=w2400";
      break;
    case 2:
      manImage.src="https://lh3.googleusercontent.com/jBP8eXxcKQrUmeSSdEfIKcmvVwyujbJE9Pe6YjuV4ypRzmJ7q8k_-Vfv79wzlKOltBkGOhh-RvQX9HeF1K4QDk-0EWWIKuVfnSqnoZbVomST2m8jesdytqbQELOTmOfFUOL8QohB-Q=w2400";
      break;
    case 3:
      manImage.src="https://lh3.googleusercontent.com/0TsETC2bOiqo5Yfv-hu85RGZwfEpY0qUvNEcRmr3lG3gpt6oSYkQMgPC1j7SvAUtmiRXkI2ODWs9Booh-Mket6oF7H5yJO0lncrmUjE42Fe0JC1bfmxVGzNCrxSXsz4Sq8vbcTf-BQ=w2400";
      break;
    case 4:
      manImage.src="https://lh3.googleusercontent.com/9sIDRClrGo6NiQlbC_e2jX9wt9wOqdb5dfL1-h3fmgZpoqtOLw_NwgQ3j6kg2PEwTOxTIj2UJvVPjPZtA7YKUGmiPmsGHmfad3cvGvbIaXWaZpZWAlQI1ocE3HGSsThvthgzEb05Og=w2400";
      break;
    case 5:
      manImage.src="https://lh3.googleusercontent.com/f0snCimEVLJA6RXQEaxucZStAnRNhiybyESZd2AofDdwyhdg9y78ATEEWLzIFAgoKyPDvfeLrteRqVzKYt0iTG2Lwfd7uuOeHLoM2Uv0ylLBqLWGR67h2-jbmMTA1b4qxHeXSYWKqg=w2400";
      break;
    case 6:
      manImage.src="https://lh3.googleusercontent.com/Haw4Nwn9CxJ6B_qhxpvfY382qQqxe5-rVL-qaBLZ0_Txn0U1OBIRJLOfzRlXPf5jbgAO6Z_njU2eyuua_Tx1xQKqkBTnB4NcYcz3nprfCBuQK8_a7Dul5MRDrV73YHUmiEmE8Zp1zA=w2400";
      break;
    case 7:
      manImage.src="https://lh3.googleusercontent.com/q8vkO09g8_mscxSZ9w9HbWTQSXKFg4GaUhOiPH1paR7TWhXmj1BNIm4XDBo2ddzfEzeLH5eZot_ccCjA5WCKycFNgKW5OCrfjjko_yUgglbTSY6aR7THqexa8WVJL6s8dndFRm34cA=w2400";
      break; 
    default:
      null
  }
}
changeImage()

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
const hiddenKeyboard= ()=>{
  if (mistakes === maxWrong){
    document.getElementById('keyboard').style.visibility='hidden';
  }
}
const visibleKeyboard =() =>{
  if (mistakes === 0){
    document.getElementById('keyboard').style.visibility='visible';
  }
}
const updateMistakes = () => {
  document.getElementById("mistakes").innerHTML = mistakes;
};
const reset = () => {
  mistakes = 0;
  guessed = [];
  clickedLetter = null;
  visibleKeyboard();
  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
  statustDisplay();
  enterYourGuess();
  changeImage()
};
