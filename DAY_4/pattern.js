function checkMaxBwTwoNo(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

let number1 = 5;
let number2 = 6;

let answer = checkMaxBwTwoNo(5, 6);
console.log(`Max between ${number1} and ${number2} is : `, answer);
