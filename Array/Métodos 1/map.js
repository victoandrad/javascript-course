// map
// Retorna um array com os elementos transformados

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
const numerosExponenciados = arr.map(function(elemento, indice, array) {
    return elemento * indice
})
console.log(numerosExponenciados)