// some
// returns true if more than one interaction returns true

let arr = ['Victor', 'Luiza', 19, 16, true, true]

let containsString = arr.some(element => {
    return typeof element === 'string'
})

console.log(containsString)