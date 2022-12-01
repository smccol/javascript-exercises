const reverseString = function(string) {
    let splitString = string.split("");
    newString = splitString.reverse().join('');
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
