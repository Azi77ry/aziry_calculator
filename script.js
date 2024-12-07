function appendToDisplay(value) {
    const resultField = document.getElementById('result');
    resultField.value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function backspace() {
    const resultField = document.getElementById('result');
    resultField.value = resultField.value.slice(0, -1);
}

function calculate() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch (e) {
        resultField.value = 'Error';
    }
}
