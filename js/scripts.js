function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

$(document).ready(function () {
  $("form#math").submit(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#math1").val());
    const number2 = parseInt($("#math2").val());
    $("button#add").click(function () {
      $("div#output").text(add(number1, number2));
    });
    $("button#subtract").click(function () {
      $("div#output").text(subtract(number1, number2));
    });
    $("button#multiply").click(function () {
      $("div#output").text(multiply(number1, number2));
    });
    $("button#divide").click(function () {
      $("div#output").text(divide(number1, number2));
    });
  });
});
