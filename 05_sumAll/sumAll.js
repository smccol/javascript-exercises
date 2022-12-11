const sumAll = function(firstNumber, secondNumber) {
    let total = 0;
    if (firstNumber < 0 || secondNumber < 0) return 'ERROR';
    if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) return 'ERROR';
    if (firstNumber < secondNumber) {
        for (i = firstNumber; i <= secondNumber; i++) {
            total += i;
        }
        return total;
    } else {
        for (j = secondNumber; j >= firstNumber; j++) {
            total += j;
        }
        return total;
    }
};

// Do not edit below this line
module.exports = sumAll;
