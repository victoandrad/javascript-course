const values = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

function sum() {
    const numbers = Array.from(arguments)
    let result = 0
    numbers.forEach(element => {
        if(Array.isArray(element)) {
            result += element.reduce((accumulator, element) => {
                return accumulator + element
            }, 0)
        } else {
            result += element
        }
    })
    return result
}

console.log(sum(10, 20, 30, 40, values))
