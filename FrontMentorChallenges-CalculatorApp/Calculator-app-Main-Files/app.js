class Calculator {
    constructor(previousOperandElement, currentOperandElement) {
        this.previousOperandElement = previousOperandElement
        this.currentOperandElement = currentOperandElement;
        this.restNumber();
    }

    restNumber() {
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = undefined;
    }

    appendNumber(number) {
        this.currentOperand = number;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }


    mathOperation(operation) {

    }

    compute() {

    }

    displayNumber(number) {

    }

    updateDisplay() {
        this.currentOperandElement.innerText = this.currentOperand;
    }

}


const numbersButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const restButton = document.querySelector('[data-rest]')
const deleteButton = document.querySelector('[data-delete]')
const currentOperandElement = document.querySelector('[data-current-operand]');
const previousOperandElement = document.querySelector('[data-previous-operand]');

const calculator = new Calculator(previousOperandElement,currentOperandElement); 

numbersButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })
  

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.mathOperation(button.innerHTML);
        calculator.updateDisplay();
    })
})