const reverseString = function(string) {

    let newString = '';
    
    for (i=string.length; i>0; i--) {
        let letter = string.slice(i-1,i);
        newString += letter;
    }
    
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
