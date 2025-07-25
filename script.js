const display = document.querySelector(".calculator-display");

function add(num1, num2) {
  let sum = Number(num1) + Number(num2);
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
  let result;
  switch (op) {
    case "+":
      result = add(number1, number2);
      break;

    case "-":
      result = subtract(number1, number2);
      break;
    case "*":
      result = multiply(number1, number2);
      break;
    case "/":
      result = divide(number1, number2);
      break;
  }

  return result;
}

let str = "";

let userInput = [];
const arrOfOperators = ["+", "-", "*", "/"];
let numOfOperators = 0;
function populateDisplay() {
  const digitsNodeList = document.querySelectorAll(".calc");

  digitsNodeList.forEach((item) => {
    item.addEventListener("click", () => {
      const para = document.createElement("p");
      const text = item.textContent;
      para.textContent = text;
      display.appendChild(para);
      if (arrOfOperators.includes(text)) {
        userInput.push(str);
        userInput.push(text);
        str = "";
        calculate();
      } else {
        str += text;
      }
    });
  });
}

function calculate() {
  for (element of arrOfOperators) {
    for (i = 0; i < userInput.length; i++) {
      if (element === userInput[i]) {
        numOfOperators++;
      }
    }
  }

  return numOfOperators;
}

// let result = "";
function doCalculation(arr) {
  let term1 = arr[0];
  let operation = arr[1];
  let term2 = arr[2];

  let result = operator(operation, term1, term2);
  let child = display.lastElementChild;

  while (child) {
    display.removeChild(child);
    child = display.lastElementChild;
  }

  const paragraph = document.createElement("p");
  paragraph.textContent = result;
  display.appendChild(paragraph);
}

const equalSign = document.querySelector(".equal");
equalSign.addEventListener("click", doCalculation(userInput));

populateDisplay();

function createName(index) {
  let display = "gaurav";
  console.log(display);
}
