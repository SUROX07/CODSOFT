const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';
let result = '';
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value >= '0' && value <= '9') {
            currentInput += value;
            updateDisplay(currentInput);
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            if (currentInput !== '') {
                if (firstOperand === '') {
                    firstOperand = currentInput;
                    operator = value;
                    currentInput = '';
                } else {
                    secondOperand = currentInput;
                    calculate();
                    operator = value;
                    currentInput = '';
                }
            }
        } else if (value === '=') {
            if (currentInput !== '') {
                secondOperand = currentInput;
                calculate();
                operator = '';
                currentInput = result;
            }
        } else if (value === 'C') {
            clear();
        }
    });
});
function updateDisplay(value) {
    display.textContent = value;
}
function clear() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    secondOperand = '';
    result = '';
    updateDisplay('0');
}
function calculate() {
    switch (operator) {
        case '+':
            result = (parseFloat(firstOperand) + parseFloat(secondOperand)).toString();
            break;
        case '-':
            result = (parseFloat(firstOperand) - parseFloat(secondOperand)).toString();
            break;
        case '*':
            result = (parseFloat(firstOperand) * parseFloat(secondOperand)).toString();
            break;
        case '/':
            if (parseFloat(secondOperand) === 0) {
                result = 'Error';
            } else {
                result = (parseFloat(firstOperand) / parseFloat(secondOperand)).toString();
            }
            break;
    }
    firstOperand = result;
    updateDisplay(result);
}



var typed = new Typed(".auto-type", {
    strings: ["WELCOME TO THE CALCULATOR!"],
    typeSpeed: 25,
    backSpeed: 25,
    backDelay: 1000,
    loop:true
})
