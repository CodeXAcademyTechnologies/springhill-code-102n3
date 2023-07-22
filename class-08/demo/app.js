"use strict";

function getUsername(){
  let name = prompt("Hi, what's your name");
  document.write("Hello, " + name)
  return name
}

function getFavFoodPlace(){

  let favFood = prompt("What is your favorite fast food restaurant?")
  return favFood

}

function setRating(){
  let starAmount = prompt("How many stars would you like to rate that store?")
  let parsedNumber = parseInt(starAmount)  
  let starRating = ''
  

  // for (initialization; condition; afterthought){ 
  //   code to be executed
  // }
  for (let i = 0; i < parsedNumber; i = i + 1){
    starRating += "⭐️"
  }

  console.log(starRating)
  document.write(starRating)
}


let userGuess = prompt("Guess a Number between 1 and 10")
let attempts = 3
let correctAnswer = 8

// while (condition is true){execute this code}
while (attempts > 0){
  if(userGuess == correctAnswer){
    alert("You got it! The correct answer is " + correctAnswer)
    break;
  } else {
    userGuess = prompt("Guess Again!")
    attempts--
  }
}


// very basic while loop example
let x = 0

while(x < 1000000){
  console.log(x)
  x++
}
