// filter
// returns an array with the elements that the interactions returned true

let arr = ['Victor', 19, true, true]

let onlyString = arr.filter(element => {
    return typeof element === 'string'
})

console.log(onlyString)