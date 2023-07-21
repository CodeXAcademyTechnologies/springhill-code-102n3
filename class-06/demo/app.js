"use strict";
// this is a comment. comments are used
// to explain code and such

// data types

// string
let greeting = "Hello world!";
greeting = "Hello universe!";

// number
let someNumber = 4999;
let someOtherNumber = "4999";

// boolean
// truth or false
let trueBoolean = true;
let falseBoolean = false;

console.log(greeting);

let username = prompt("Hi, what's your name");
console.log(username);

// if(this equals true){then do this}
if (username == "Thomas") {
  alert("Hey teacher!");
} else if (username == "Dwight") {
  alert("What's up TA!");
} else {
  alert("Hello, " + username);
}

// string concatenation
// combine strings together
greeting = "hello, " + username;

document.write(greeting);
