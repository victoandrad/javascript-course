// the name property retrieves the name of the function

function sum1(n1, n2) {
    return n1 + n2
}

const sum2 = function(n1, n2) {
    return n1 + n2
}

const sum3 = function sumFunction(n1, n2) {
    return n1 + n2
}

const sum4 = (n1, n2) => {
    return n1 + n2
}

console.log(sum1.name)
console.log(sum2.name)
console.log(sum3.name)
console.log(sum4.name)