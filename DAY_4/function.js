// 1. Write a javascript program using function to find maximum between two numbers.

// function maxBwTwoNo() {} // syntax

function maxBwTwoNo(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

let number1 = 7; // custom variable
let number2 = 9;
let answer = maxBwTwoNo(number1, number2);
console.log(`max bw ${number1} and ${number2} is :`, answer);

arrow function
function maxBwTwoNo() {} // syntax
let maxBwTwoNo = () => {};

let maxBwTwoNo = (num1, num2) => {};
let number1 = 7; // custom variable
let number2 = 9;
let answer = maxBwTwoNo(number1, number2);
console.log(`max bw ${number1} and ${number2} is :`, answer);
