const { type } = require("os");

const sumAll = function(a, b) {

    let result = 0;

    while(a < 0 || b < 0) {
        return "ERROR";
    }

    while(typeof(a) != "number" || typeof(b) != "number") {
        return "ERROR";
    }
    
    if(a>b) {
        let c = a;
        a = b;
        b = c;
    }

    for(i=a; i<=b; i++) {
        result += i;
    }

    return result;


};

// Do not edit below this line
module.exports = sumAll;
