'use strict'

const numberInput = document.getElementById('number');
const degreeInput = document.getElementById('degree');
const resultInput = document.getElementById('result');

numberInput.addEventListener('input', () => pow(numberInput.value, degreeInput.value));
degreeInput.addEventListener('input', () => pow(numberInput.value, degreeInput.value));

function pow(x, n) {
    if (n == 1 || n > 1) {
        let result = 1;
        for (let i = 0; i < n; i++) {
            result *= x;
        }
        return resultInput.value = result;
    } else {
        return resultInput.value = 0;
    }
}