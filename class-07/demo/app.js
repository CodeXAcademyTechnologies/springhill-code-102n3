"use strict";

function getUsername(){

  let username = prompt("Hi, what's your name");

  document.write(username)

}

function getFavFoodPlace(){

  let favFood = prompt("What is your favorite fast food restaurant?")
  return favFood

}
// document.write( getFavFoodPlace() )


function add2Numbers(num1, num2){
  let sum = num1 + num2
  
  return sum 
}

let fivePlusSeven = add2Numbers(5, 7)

console.log(fivePlusSeven)

