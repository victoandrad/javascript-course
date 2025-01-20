// Array.from
// creates a copy of an array
// creates an array with an array-like object

let arr1 = new Array(1, 2, 3)
let arr2 = Array.from(arr1)
arr2.push(4, 5)

console.log(arr1)
console.log(arr2)