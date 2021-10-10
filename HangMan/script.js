"use strict";
// console.log(document.querySelector(".message-header").textContent);
// document.querySelector(".message-header").textContent = "Bonjour";
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

document.querySelector(".ok").addEventListener("click", function () {
  const guessInput = document.querySelector(".guess").value;
  console.log(typeof guessInput);
  if (!guessInput) {
    document.querySelector(".message-header").textContent =
      "👎 Not a valid letter!";
  }
});
