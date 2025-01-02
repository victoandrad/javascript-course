// A propriedade name puxa o nome da função

function somar1(n1, n2) {
    return n1 + n2
}

const somar2 = function(n1, n2) {
    return n1 + n2
}

const somar3 = function funçãoSomar(n1, n2) {
    return n1 + n2
}

const somar4 = (n1, n2) => {
    return n1 + n2
}

console.log(somar1.name)
console.log(somar2.name)
console.log(somar3.name)
console.log(somar4.name)