// find
// returns the index of the first element that the interaction returns true

let arr = [4, 5, 10, 20, 35, 4, 5]

let number = arr.findIndex(element => {
    return element > 30
})

console.log(number)