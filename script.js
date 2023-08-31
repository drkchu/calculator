let [operand0, operand1, operator] = ['', '', ''];
let user_input = document.querySelector('.user-input');

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return y ? x / y : 'UNDEFINED';
}

function operate(operator, x, y) {
    switch (operator) {
        case 'add':
            return add(x, y);
        case 'subtract':
            return subtract(x, y);
        case 'multiply':
            return multiply(x, y);
        case 'divide':
            return divide(x, y);
    }
}

function initializeDigits() {
    // access all buttons
    let buttons = Array.from(document.querySelectorAll('.digit'));
    buttons.forEach(button => {
        button.addEventListener('click', event => { // pass in a ref to a fn
            operand0 += event.target.textContent;
            updateDisplay();
        });
    });
}

function updateDisplay() {
    user_input.textContent = `${operand0} ${operator} ${operand1}`;
}

initializeDigits();
