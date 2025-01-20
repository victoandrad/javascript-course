// reduce
// iterates through the element and returns it as a single value

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let value = arr.reduce((accumulator, current) => {
    return accumulator + current
}, 0)

console.log(value)

// ----------------

let names = ['Victor', 'Andrade', 'Luiza', 'Aurora']

let organizedNames = names.reduce((accumulator, currentName) => {
    let firstLetter = currentName[0]
    if(accumulator[firstLetter]) {
        accumulator[firstLetter]++
    } else {
        accumulator[firstLetter] = 1
    }
    return accumulator
}, {})

console.log(organizedNames)