// parseInt() converte para número do tipo inteiro, menosprezando casas decimais.

let n1 = "10.50"
let n2 = 20
n1 = parseInt(n1)
console.log(typeof n1, n1, typeof n2, n2)

// parseFloat() converte para número do tipo real.

let n3 = "10.50"
let n4 = 20
n3 = parseFloat(n3)
console.log(typeof n3, n3, typeof n4, n4)
console.log(`${n3} + ${n4} = ${n3 + n4}`)

// Number() converte para número com o tipo que está dentro do parâmetro.

let n5 = "10.50"
let n6 = "20"
n5 = Number(n5)
n6 = Number(n6)
console.log(typeof n5, n5, typeof n6, n6)
console.log(`${n5} + ${n6} = ${n5 + n6}`)

// toString() converte para string.

n2 = 10
n2 = n2.toString(2)
    // O parâmetro informa em qual base você deseja converter o número (2, 10, 16).
console.log(n2, typeof n2)
