/*
let guessInputField = document.querySelector("#guessField")
let guessOneBox = document.querySelector(".guessOne")
let guessTwoBox = document.querySelector(".guessTwo")
let guessthreBox = document.querySelector(".guessThree")
let guessFourBox = document.querySelector(".guessFour")
let guessFiveBox = document.querySelector(".guessFive")

let userGuessInput = guessInputField.value


let guessBtn = document.querySelector("#guessBtn")
guessBtn.addEventListener("click", function() {
    console.log("you clicked me");
    //userGuessInput.append(guessOneBox)
    guessOneBox.textContent = userGuessInput
    guessOneBox.append(document.createTextNode(userGuessInput.value))
    userGuessInput.value = ""


})

*/

let winner;

function congratsYouWin() {
  if (Number(guessInputField.value) === winningNum) {
    winner = true
    hintPara.textContent = "Congrats you are a winner!"
  } else {
    winner = false
    hintPara.textContent = "guess again"
  }
}

let guessInputField = document.querySelector("#guessField");
let reset = document.querySelector("#reset");
let hintPara = document.querySelector("#hintPara");

//CREATES WINNING NUMBER
let winningNum = Math.floor(Math.random() * 100);
console.log(winningNum);

//GETS BOXS
let guessBtn = document.querySelector("#guessBtn");
let guessOne = document.querySelector(".guessOne");
let guessTwo = document.querySelector(".guessTwo");
let guessThree = document.querySelector(".guessThree");
let guessFour = document.querySelector(".guessFour");
let guessFive = document.querySelector(".guessFive");

// USED TO LOCK GUESSING IN THAT BOX
let executedOne = true;
let executedTwo = true;
let executedThree = true;
let executedFour = true;
let executedFive = true;

//ON CLICK CHECKS BOX IS NOT LOCKED THEN LOGS NEW BOX
guessBtn.addEventListener("click", function () {
  console.log("you guessed");
  congratsYouWin()
  if (executedOne && !winner) {
    guessOne.innerHTML = guessInputField.value;
    executedOne = false; 
  } else if (executedTwo && !winner) {
    guessTwo.innerHTML = guessInputField.value;
    executedTwo = false;
  } else if (executedThree && !winner) {
    guessThree.innerHTML = guessInputField.value;
    executedThree = false;
  } else if (executedFour && !winner) {
    guessFour.innerHTML = guessInputField.value;
    executedFour = false;
  } else if (executedFive && !winner) {
    guessFive.innerHTML = guessInputField.value;
    executedFive = false;
  }
  if (executedFive === false && !winner) {
    hintPara.textContent = `YOU LOSE THE WINNING NUMBER WAS ${winningNum}`;
  }

});

// RESETS THE GAME ON CLICK
reset.addEventListener("click", function () {
  console.log("you reset me");
  //CHANGES TOP TITLE BACK
  hintPara.textContent = "START GUESSING...";
  //MAKES NEW NUMBER
  winningNum = Math.floor(Math.random() * 100);
  //MAKES THE GUESS BOXS BACK TO NOTHING
  guessOne.textContent = "-";
  guessTwo.textContent = "-";
  guessThree.textContent = "-";
  guessFour.textContent = "-";
  guessFive.textContent = "-";
  // UNLOCKS THE GUESSES
  executedOne = true;
  executedTwo = true;
  executedThree = true;
  executedFour = true;
  executedFive = true;
});


