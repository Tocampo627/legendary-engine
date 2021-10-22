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
let secretWord =
  secretWordArray[Math.floor(Math.random() * secretWordArray.length)];
console.log(secretWord);
//TODO: Change random word to lower case
//TODO: this is the section that needs to display as dashes for the user
document.querySelector(".theword").textContent = secretWord;
//displays the count of the leters in the word
document.querySelector(
  ".lettercount"
).textContent = `Your secret word has: ${secretWord.length} letters!`;



const letterChecker = (selectedWord) => {
  let moves = 0;
  for (let i = 0; i < selectedWord.length; i++) {
    let currentLetter = selectedWord[i];
    if (currentLetter === loweruserInputLetter) {
      console.log("YES!");
      moves++;
      moves <= 1
        ? console.log(`You have ${moves} correct letter!`)
        : console.log(`You have ${moves} correct letters!`);
    }
  }
};
console.log(letterChecker(secretWord));
// for every time that the user clicks, we will run letterChecker until user is out of clicks/letter buttns. Using recursion ?

// we then plan on using that vairiable to define the fowllowing:

// the letter exist in the word

// Letter does not exist in the word

// the letter has been used
