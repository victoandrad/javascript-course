// find
// returns the first element that the interaction returns true

let arr = [4, 5, 10, 20, 35, 4, 5]

let number = arr.find(element => {
    return element > 30
})

console.log(number)