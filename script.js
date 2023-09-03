let [operand0, operand1, operator] = ['', '', ''];
let user_input = document.querySelector('.user-input');
let result = document.querySelector('.result');
const DIGITS_TO_ROUND = 5

function add(x, y) {
    return (isNaN(y)) ? 'ERROR' : (x + y).toFixed(toFixed(DIGITS_TO_ROUND));
}

function subtract(x, y) {
    return (isNaN(y)) ? 'ERROR' : (x - y).toFixed(DIGITS_TO_ROUND);
}

function multiply(x, y) {
    return (isNaN(y)) ? 'ERROR' : (x * y).toFixed(DIGITS_TO_ROUND);
}

function divide(x, y) {
    return (isNaN(y)) ? 'ERROR' : (y ? (x / y).toFixed(DIGITS_TO_ROUND) : 'UNDEFINED');
}

function modulus(x, y) {
    return (isNaN(y)) ? 'ERROR' : (y ? (x % y).toFixed(DIGITS_TO_ROUND) : 'UNDEFINED');
}

function operate(operator, x, y) {
    switch (operator) {
        case '+':
            return add(x, y);
        case '-':
            return subtract(x, y);
        case '×':
            return multiply(x, y);
        case '÷':
            return divide(x, y);
        case '%':
            return modulus(x, y);
        default:
            return x;
    }
}

function initializeDigits() {
    let buttons = Array.from(document.querySelectorAll('.digit'));
    buttons.forEach(button => {
        button.addEventListener('click', event => { // pass in a ref to a fn
            if (!operand0 || !operator) {
                if (event.target.textContent === '.' && operand0.includes('.')) return;
                operand0 += event.target.textContent;
                updateDisplay();
            } else {
                if (event.target.textContent === '.' && operand1.includes('.')) return;
                operand1 += event.target.textContent;
                updateDisplay();    
            }
        });
    });
}

function updateDisplay() {
    if (operand0 || operator || operand1) {
        user_input.textContent = `${operand0} ${operator} ${operand1}`;
    } else {
        user_input.textContent = '\u00A0';
    }

}

function initializeOperators() { // add operate functionality
    let buttons = Array.from(document.querySelectorAll('.operator'));    
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            if (operand0) {
                operator = event.target.textContent;
                updateDisplay();
            }
        });
    });
}

function initializeEquals() {
    let equalsButton = Array.from(document.querySelectorAll('.equals'));    
    equalsButton.forEach(button => {
        button.addEventListener('click', event => {
            if (operand1) {
                result.textContent = operate(operator, +operand0, +operand1);
                updateDisplay();
            }
        });
    });
}

function initializeClears() {
    let buttonClear = document.querySelector('.clear');
    let buttonAllClear = document.querySelector('.all-clear');

    buttonClear.addEventListener('click', event => {
        if (operand1) {
            operand1 = operand1.slice(0, operand1.length - 1);
            updateDisplay();
        } else if (operator) {
            operator = operator.slice(0, operator.length - 1);
            updateDisplay();  
        } else if (operand0) {
            operand0 = operand0.slice(0, operand0.length - 1);
            updateDisplay();
        }
    });

    buttonAllClear.addEventListener('click', event => {
        [operand0, operand1, operator] = ['', '', ''];
        result.textContent = '';
        updateDisplay();
    });
}

initializeDigits();
initializeOperators();
initializeClears();
initializeEquals();
