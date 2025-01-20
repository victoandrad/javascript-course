// build a function to calculate BMI
// BMI = weight / height²
// should return a single number
// should throw an error if it receives a non-number parameter
// should throw an error if no parameters are provided

function calculateBMI(weight, height) {
    if (arguments.length !== 2) {
        throw new Error('Incorrect parameters! Use: weight, height')
    }
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            throw new Error('Incorrect parameters! Use only numbers')
        }
    }
    return parseFloat((weight / height ** 2).toFixed(1))
}

// build a function to classify BMI
// should receive a number (the BMI)
// should return a string
// should throw an error if it receives a non-number parameter
// should throw an error if no parameters are provided

function classifyBMI(bmi) {
    if (arguments.length !== 1) {
        throw new Error('Incorrect parameters! Use: BMI')
    }
    if (typeof arguments[0] !== 'number') {
        throw new Error('Incorrect parameters! Use only numbers')
    }
    let result = `Your BMI: ${bmi} is classified as `
    if (bmi <= 16.9) {
        result += 'Severely underweight'
    } else if (bmi <= 18.4) {
        result += 'Underweight'
    } else if (bmi <= 24.9) {
        result += 'Normal weight'
    } else if (bmi <= 29.9) {
        result += 'Overweight'
    } else if (bmi <= 34.9) {
        result += 'Obesity Grade I'
    } else if (bmi <= 40) {
        result += 'Obesity Grade II'
    } else if (bmi > 40) {
        result += 'Obesity Grade III'
    } else {
        result += 'No classification'
    }
    return result
}

try {
    console.log(classifyBMI(calculateBMI('60', 1.75)));
} catch (e) {
    console.log(e.message);
}
