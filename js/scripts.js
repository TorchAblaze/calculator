function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 + " - " + number2 + " = " + (number1 - number2);
}

const number3 = parseInt(prompt("Enter a number:"));
const number4 = parseInt(prompt("Enter another number:"));
const difference = subtract(number3, number4);

alert(difference);

function multiply(number3, number4) {
  return number3 + " * " + number4 + " = " + number3 * number4;
}

const number5 = parseInt(prompt("Enter a number:"));
const number6 = parseInt(prompt("Enter another number:"));
const product = multiply(number5, number6);

alert(product);

const result = add(number1, number2);

// Temp Conversion:

function tempConversion(temperature) {
  let fahTemp = (9 / 5) * temperature + 32;
  let celTemp = (9 / 5) * temperature - 32;
  alert(temperature + "  in fahrenheit: " + fahTemp);
  alert(temperature + " in celsius: " + celTemp);
}

tempConversion(45);

function tempConversion(temperature) {
  let fahTemp = (9 / 5) * temperature + 32;
  let celTemp = (9 / 5) * temperature - 32;
  alert(temperature + "  in fahrenheit: " + fahTemp);
  alert(temperature + " in celsius: " + celTemp);
}

tempConversion(45);

function volConversion(volume) {
  let liter = volume / 3.785;
  let gallon = volume * 3.785;
  alert(volume + " gallons in liters: " + liter);
  alert(volume + " liters in gallons: " + gallon);
}

volConversion(13);
