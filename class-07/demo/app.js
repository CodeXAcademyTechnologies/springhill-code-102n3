"use strict";

function getUsername(){

  let username = prompt("Hi, what's your name");
  
  while(username == ""){
    username = prompt("Please enter a name.")
  }

  document.write(username)

}

function getFavFoodPlace(){

  let favFood = prompt("What is your favorite fast food restaurant?")
  return favFood

}
// document.write( getFavFoodPlace() )



// // if(this equals true){then do this}

// if (username == "Thomas") {
//   alert("Hey teacher!");
// } else if (username == "Dwight") {
//   alert("What's up TA!");
// } else {
//   alert("Hello, " + username);
// }

// // string concatenation
// // combine strings together
// let greeting = "hello, " + username;

// document.write(greeting);


function add2Numbers(num1, num2){
  let sum = num1 + num2
  
  return sum 
}

let fivePlusSeven = add2Numbers(5, 7)

console.log(fivePlusSeven)

