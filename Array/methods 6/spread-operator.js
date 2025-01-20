// spread operator (...)
// spreads the array values

let arr = [1, 2, 3]

function sum() {
    console.log(arguments)
    console.log(arguments.length)
}

sum(arr)
sum(...arr)