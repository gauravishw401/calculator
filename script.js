const display = document.querySelector(".calculator-display");

function add(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

function subtract(num1, num2) {
  let subtraction = num1 - num2;
  return subtraction;
}

function multiply(num1, num2) {
  let multiplication = num1 * num2;
  return multiplication;
}

function divide(num1, num2) {
  let dividing = num1 / num2;
  return dividing;
}

function operator(op, number1, number2) {
  switch (op) {
    case "+":
      add();
      break;

    case "-":
      subtract();
      break;
    case "*":
      multiply();
      break;
    case "/":
      divide();
      break;
  }
}

const para = document.createElement("p");
para.textContent = "3.3.33.";

display.appendChild(para);

const nodeList = document.querySelectorAll(".seven");
console.log(nodeList);

function populateDisplay() {
  let term1;
  let operation;
  let term2;
}
