// destructuring
// Serve para recuperar valores de um array de forma mais eficiente

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// É possível usar o rest operator
// Ele pega todo o restante
const [n1, , ...n3] = arr
console.log(n1, n3)

