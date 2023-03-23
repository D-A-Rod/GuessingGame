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

function hotCold() {
  let difference = winningNum - guessInputField.value;

  //for positive numbers
  if (difference >= 0 && difference <= 5) {
    hintPara.textContent = "You're super hot!";
  } else if (difference >= 0 && difference <= 10) {
    hintPara.textContent = "You're warming up!";
  } else if (difference >= 0 && difference <= 15) {
    hintPara.textContent = "Youre Luke Warm";
  } else if (difference >= 0 && difference <= 15) {
    hintPara.textContent = "You are getting cooler";
  } else if (difference >= 0 && difference <= 21) {
    hintPara.textContent = "You're Cold";
  }


  //for negative numbers
  if (difference <= 0 && difference >= -5) {
    hintPara.textContent = "You're super hot!";
  } else if (difference <= 0 && difference >= -10) {
    hintPara.textContent = "You're warming up!";
  } else if (difference <= 0 && difference >= -15) {
    hintPara.textContent = "Youre Luke Warm";
  } else if (difference <= 0 && difference >= -16) {
    hintPara.textContent = "You are getting cooler";
  } else if (difference <= 0 && difference <= -21) {
    hintPara.textContent = "You're Cold";
  }



}

function congratsYouWin() {
  if (Number(guessInputField.value) === winningNum) {
    winner = true;
    hintPara.textContent = "Congrats you are a winner!";
    document.querySelector(".container").style.backgroundColor = "#5CF35C";
  } else {
    winner = false;
    hotCold();
  }
}

let guessInputField = document.querySelector("#guessField");
let reset = document.querySelector("#reset");
let hintPara = document.querySelector("#hintPara");

let hint = document.querySelector("#hint");

//CREATES WINNING NUMBER
let winningNum = Math.floor(Math.random() * 100);
let hintNum = Math.floor(Math.random() * winningNum);
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

//hot/Cold text

//ON CLICK CHECKS BOX IS NOT LOCKED THEN LOGS NEW BOX
guessBtn.addEventListener("click", function () {
  console.log("you guessed");
  congratsYouWin();
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
  document.querySelector(".container").style.backgroundColor = "#EC85AD";
});

guessInputField.addEventListener("keypress", function (event) {
  if (guessInputField.value.length > 0 && event.keyCode === 13) {
    console.log("you guessed");
    congratsYouWin();
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
    guessInputField.value = ""
  }

});

hint.addEventListener("click", function () {
  console.log("you hinted");
  hintPara.textContent = `HINT: ${Math.floor(
    Math.random() * 100
  )} ${winningNum} ${Math.floor(Math.random() * 100)} ${Math.floor(
    Math.random() * 100
  )}`;
});
