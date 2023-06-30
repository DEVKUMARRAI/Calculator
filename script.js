function Add(a, b) {
    return a + b;
}
function Subtract(a, b) {
    return a - b;
}
function Multiply(a, b) {
    return a * b;
}
function Divide(a, b) {
    return a / b;
}
function operate(a, b, operator) {
    if (operator === '+') {
        return Add(a, b);
    }
    else if (operator === '-') {
        return Subtract(a, b);
    }
    else if (operator === '/') {
        return Divide(a, b);
    }
    else if (operator === '*') {
        return Multiply(a, b);
    }
}
