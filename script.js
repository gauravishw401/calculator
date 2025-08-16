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
  let dividing = num2 == 0 ? "ERROR" : num1 / num2;

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
let arrOfDigits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

let numOfOperators = 0;

const digitsNodeList = document.querySelectorAll(".calc");
function populateDisplay() {
  digitsNodeList.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (isCalcFinished) {
        let btnPressed = e.target.textContent;
        afterCalculation(btnPressed);
      }

      const para = document.createElement("p");
      const text = item.textContent;
      para.textContent = text;
      display.appendChild(para);

      if (arrOfOperators.includes(text)) {
        if (str != "") {
          userInput.push(str);
        }
        userInput.push(text);
        str = "";
        console.log(userInput);
        numOfOperators++;
        // console.log(numOfOperators);s
        if (numOfOperators >= 2) {
          calcTwoOperators();
        }
        // console.log(numOfOperators);
      } else {
        str += text;
      }
    });
  });
}

function displayText(input) {
  const para = document.createElement("p");
  para.textContent = input;
  display.appendChild(para);
}

function afterCalculation(button) {
  if (arrOfOperators.includes(button)) {
    str = output;
    isCalcFinished = false;
  }

  if (arrOfDigits.includes(button)) {
    let child = display.firstElementChild;
    if (display.hasChildNodes()) {
      display.removeChild(child);
    }

    isCalcFinished = false;
  }
}

function calcTwoOperators() {
  let operation2 = userInput[3];
  let all = doCalculation(userInput);
  userInput = [];
  userInput.push(all);
  userInput.push(operation2);

  displayText(operation2);
  console.log(userInput);
}

function doCalculation(arr) {
  let term1 = arr[0];
  let operation = arr[1];
  let term2 = arr[2];
  let value = operator(operation, term1, term2);
  clearDisplay();
  displayText(value);
  return value;
}

let isCalcFinished = false;
let output;

const equalSign = document.querySelector(".equal");

equalSign.addEventListener("click", () => {
  userInput.push(str);

  output = doCalculation(userInput);
  clearUserData();
  isCalcFinished = true;
});

const clear = document.querySelector(".clear");

function clearDisplay() {
  let child = display.lastElementChild;

  while (child) {
    display.removeChild(child);
    child = display.lastElementChild;
  }

  isCalcFinished = false;
}

function clearUserData() {
  userInput = [];
  str = "";
  numOfOperators = 0;
}

clear.addEventListener("click", () => {
  clearDisplay();
  clearUserData();
  isCalcFinished = false;
});

populateDisplay();

const del = document.querySelector(".backspace");
del.addEventListener("click", () => {
  let child = display.lastElementChild;
  if (arrOfDigits.includes(child.textContent)) {
    let array = Array.from(str);
    let lastElementPopped = array.pop();
    str = array.toString().replaceAll(",", "");
  }

  if (arrOfOperators.includes(child.textContent)) {
    userInput.pop();
    numOfOperators--;
    console.log(userInput);
  }
  display.removeChild(child);
});
