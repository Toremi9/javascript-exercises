const sumAll = function(numone, numtwo) {
    let result = 0;
    if (typeof numone !== "number"|| typeof numtwo !== "number") {
        return "ERROR";
    }
    if (numone < numtwo) {
        for (let i = numone; i <= numtwo; i++)
        result += i;
    } else {
        for (let i = numtwo; i <= numone; i++)
        result += i;
    }
    if (result < 0 || numone == NaN || numtwo == NaN) {
        return "ERROR";
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
