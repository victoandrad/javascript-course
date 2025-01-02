// Array.from
// Serve para criar uma array a partir de outra array ou um objeto parecido com array

const arr1 = new Array(1, 2, 3)
console.log(arr1)

const arr2 = Array.from(arr1)
arr2.push(4, 5)
console.log(arr2)