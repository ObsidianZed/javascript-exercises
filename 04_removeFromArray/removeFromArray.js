const removeFromArray = function(arr, ...args) {

    let argArr = args;
    let indexToRemove = [];


    for(let i=0; i<argArr.length; i++) {
        if(arr.indexOf(argArr[i]) > -1) {
            indexToRemove = arr.indexOf(argArr[i]);
            arr.splice(indexToRemove, 1);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
