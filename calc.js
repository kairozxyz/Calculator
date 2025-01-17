const outputPlace = document.getElementById('output');

function getNumbers() {
    const firstNumber = parseFloat(document.getElementById('first-number').value) || 0;
    const secondNumber = parseFloat(document.getElementById('second-number').value) || 0;
    return { firstNumber, secondNumber };
}

document.getElementById('add').addEventListener('click', function() {
    const { firstNumber, secondNumber } = getNumbers();
    outputPlace.innerText = firstNumber + secondNumber;
});

document.getElementById('subtract').addEventListener('click', function() {
    const { firstNumber, secondNumber } = getNumbers();
    outputPlace.innerText = firstNumber - secondNumber;
});

document.getElementById('multiply').addEventListener('click', function() {
    const { firstNumber, secondNumber } = getNumbers();
    outputPlace.innerText = firstNumber * secondNumber;
});

document.getElementById('divide').addEventListener('click', function() {
    const { firstNumber, secondNumber } = getNumbers();
    outputPlace.innerText = secondNumber !== 0 ? (firstNumber / secondNumber) : 'Error: Divide by zero';
});

document.getElementById('square').addEventListener('click', function() {
    const { firstNumber } = getNumbers();
    outputPlace.innerText = firstNumber ** 2;
});