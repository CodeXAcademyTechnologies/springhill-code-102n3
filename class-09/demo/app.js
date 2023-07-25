"use strict";

function getUsername() {
  let name = prompt("Hi, what's your name");

  while (name == "" || name == null) {
    name = prompt("Hey!! Please enter a name!");
  }

  document.write("Hello, " + name);
  return name;
}

function getFavFoodPlace() {
  let favFood = prompt("What is your favorite fast food restaurant?");
  return favFood;
}

function setRating() {
  let starAmount = prompt("How many stars would you like to rate that store?");
  let parsedNumber = parseInt(starAmount);
  let starRating = "";

  for (let i = 0; i < parsedNumber; i = i + 1) {
    starRating += "⭐️";
  }

  console.log(starRating);
  document.write(starRating);
}

function guessingGame() {
  let userGuess = "";
  let correctAnswer = 8;

  // while (condition is true){execute this code}
  while (userGuess != correctAnswer) {
    userGuess = prompt("Guess a number between 1 and 10");

    if (userGuess == correctAnswer) {
      alert("You got it! The correct answer is " + correctAnswer);
    } else {
      alert("Guess Again!");
    }
  }
}

function guessCapital() {
  let userGuess;
  let correctAnswer = "Olympia";

  while (userGuess != correctAnswer) {
    userGuess = prompt("What is the capital of Washington state?");

    if (userGuess == correctAnswer) {
      alert("You got it! The correct answer is " + correctAnswer);
    } else {
      alert("Try again!");
    }
  }
}
