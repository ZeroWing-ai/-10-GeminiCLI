document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelector('.buttons');

    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.addEventListener('click', (e) => {
        const value = e.target.dataset.value;

        if (value) {
            if (isNumber(value) || value === '.') {
                handleNumber(value);
            } else if (isOperator(value)) {
                handleOperator(value);
            }
        }

        if (e.target.id === 'equals') {
            handleEquals();
        }

        if (e.target.id === 'clear') {
            handleClear();
        }
    });

    function handleNumber(value) {
        if (currentInput.includes('.') && value === '.') return;
        currentInput += value;
        updateDisplay();
    }

    function handleOperator(value) {
        if (currentInput === '') return;
        if (previousInput !== '') {
            handleEquals();
        }
        operator = value;
        previousInput = currentInput;
        currentInput = '';
    }

    function handleEquals() {
        if (previousInput === '' || currentInput === '') return;
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                result = prev / current;
                break;
            default:
                return;
        }
        currentInput = result.toString();
        operator = '';
        previousInput = '';
        updateDisplay();
    }

    function handleClear() {
        currentInput = '';
        operator = '';
        previousInput = '';
        updateDisplay('0');
    }

    function updateDisplay(value) {
        display.textContent = value || currentInput || '0';
    }

    function isNumber(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }

    function isOperator(value) {
        return ['+', '-', '*', '/'].includes(value);
    }
});