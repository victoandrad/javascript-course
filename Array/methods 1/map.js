// map
// returns an array with the new elements after the interaction

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let exponentiatedNumbers = arr.map((element, index) => {
    return element * index
})

console.log(exponentiatedNumbers)