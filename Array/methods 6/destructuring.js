// destructuring []
// an easy way to get the values from the array

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let [ value ] = arr
console.log(value)

// It is possible to use the rest operator to get the remaining values
let [n1, , ...n3] = arr
console.log(n1, n3)

