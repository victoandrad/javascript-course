// build a function to calculate average

// can receive one or more numeric values
// should return a single number
// should throw an error if it receives a non-numeric parameter
// should return zero if no parameters are provided

function calculateAverage() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            throw Error(`Usage Error: Only numbers are accepted`);
        }
        sum += arguments[i]
    }
    return sum / arguments.length || 0
}

try {
    console.log(calculateAverage(60, 30, 50, 60, 10));
} catch (e) {
    console.log(`${e.message}`)
}
