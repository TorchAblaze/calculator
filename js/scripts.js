function add(number1, number2) {
  return number1 + " + " + number2 + " = " + (number1 + number2);
}

function subtract(number1, number2) {
  return number1 + " - " + number2 + " = " + (number1 - number2);
}

const number3 = parseInt(prompt("Enter a number:"));
const number4 = parseInt(prompt("Enter another number:"));
const difference = subtract(number3, number4);

alert(difference);

function multiply(number1, number2) {
  return number1 + " * " + number2 + " = " + number1 * number2;
}

function divide(number1, number2) {
  return number1 + " / " + number2 + " = " + number1 / number2;
}

const number5 = parseInt(prompt("Enter a number:"));
const number6 = parseInt(prompt("Enter another number:"));
const product = multiply(number5, number6);

alert(product);

const result = add(number1, number2);
