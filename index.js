document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const display = document.getElementById('display');
    let currentInput = '0';
    let operator = null;
    let previousInput = null;

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.textContent;

         if (value === '=') {
            if (operator && previousInput !== null) {
                currentInput = evaluate(previousInput, currentInput, operator);
                operator = null;
                previousInput = null;
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (previousInput === null) {
                previousInput = currentInput;
            } else if (operator) {
                previousInput = evaluate(previousInput, currentInput, operator);
            }
            operator = value;
            currentInput = '0';
        } else {
            currentInput = currentInput === '0' ? value : currentInput + value;
        }

        display.textContent = currentInput;
    });
});

function evaluate(a, b, operator) {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    switch (operator) {
        case '+':
            return (numA + numB).toString();
        case '-':
            return (numA - numB).toString();
        case '*':
            return (numA * numB).toString();
        case '/':
            return (numA / numB).toString();
        default:
            return b;
    }
}
})