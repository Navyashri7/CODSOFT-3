let currentInput = '';
let operator = '';
let previousInput = '';
let resultDisplayed = false;

const display = document.getElementById('display');

function updateDisplay(value) {
  display.value = value;
}

function appendNumber(number) {
  if (resultDisplayed) {
    currentInput = '';
    resultDisplayed = false;
  }
  currentInput += number;
  updateDisplay(currentInput);
}

function appendOperator(op) {
  if (currentInput === '') return;
  if (operator !== '') calculate();
  previousInput = currentInput;
  operator = op;
  currentInput = '';
}

function appendDot() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay(currentInput);
  }
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay('');
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput);
}

function calculate() {
  if (previousInput === '' || currentInput === '' || operator === '') return;

  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);
  let result = 0;

  switch (operator) {
    case '+':
      result = num1 + num2; break;
    case '-':
      result = num1 - num2; break;
    case '*':
      result = num1 * num2; break;
    case '/':
      result = num2 !== 0 ? num1 / num2 : 'Error'; break;
  }

  updateDisplay(result);
  currentInput = result.toString();
  previousInput = '';
  operator = '';
  resultDisplayed = true;
}
