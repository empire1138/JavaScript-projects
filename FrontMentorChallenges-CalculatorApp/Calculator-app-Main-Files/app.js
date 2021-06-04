class Calculator {
    constructor(previousOperand, currentOperand) {
        this.previousOperand = previousOperand
        this.currentOperand = currentOperand;
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

    updateDisplayNumber() {
        this.currentOperand.innerText = this.currentOperand;
    }

}


const numbersButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const restButton = document.querySelector('[data-rest]')
const currentOperand = document.querySelector('[data-current-operand]');
const previousOperand = document.querySelector('[data-previous-operand]');

const calculator = new Calculator(previousOperand,currentOperand); 

numbersButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplayNumber()
    })
  })
  

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.mathOperation(button.innerHTML);
        calculator.updateDisplayNumber();
    })
})