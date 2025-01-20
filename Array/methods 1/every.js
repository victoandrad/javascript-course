// every
// returns true if all interactions return true

let arr = ['Victor', 19, true, true]

let onlyString = arr.every(element => {
    return typeof element === 'string'
})

console.log(onlyString)