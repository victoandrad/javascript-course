function getRandomNumber(start = 0, end = 1, integer = true) {
    let number = (Math.random() * (end - start + 1)) + start
    if(integer) {
        return Math.floor(number)
    }
    return number
}

console.log(getRandomNumber(5, 15, true))