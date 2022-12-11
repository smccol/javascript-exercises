const removeFromArray = function(arr, ...removeThese) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < removeThese.length; j++) {
            if (arr[i] === removeThese[j]) {
                arr.splice(i, 1);
                }
            }        
    }      
    return arr;   
};

// Do not edit below this line
module.exports = removeFromArray;
