let [operand0, operand1, operator, result] = ['', '', '', ''];
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

function modulus(x, y) {
    return x % y;
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

function initializeOperators() {
    let buttons = Array.from(document.querySelectorAll('.operator'));    
    buttons.forEach(button => {
        button.addEventListener('click', event => {
            operator = event.target.textContent;
            updateDisplay();
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
            console.log('helo')
        } else if (operator) {
            operator = operator.slice(0, operator.length - 1);
            updateDisplay();
            console.log('helo2')   
        } else if (operand0) {
            operand0 = operand0.slice(0, operand0.length - 1);
            updateDisplay();
        }
    });

    buttonAllClear.addEventListener('click', event => {
        [operand0, operand1, operator] = ['', '', ''];
        updateDisplay();
    });
}

initializeDigits();
initializeOperators();
initializeClears();
