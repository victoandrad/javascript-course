// how to create a function that accepts dynamic parameters?

// method 1
function sum(array) {
    if (!Array.isArray(array)) {
        throw Error('Only arrays are accepted')
    }
    let result = 0
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number') {
            throw Error('Only numbers are accepted')
        }
        result += array[i]
    }
    return result
}

console.log(sum([0, 1, 2]));

// method 2 [recommended]
function sum2() {
    console.log(arguments)
    let result = 0
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            throw Error('Only numbers are accepted')
        }
        result += arguments[i]
    }
    return result
}

console.log(sum2(10, 20, 30));

// tip: the `arguments` property does not exist in arrow functions