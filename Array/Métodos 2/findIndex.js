// find
// Retorna o índice do primeiro elemento que a interação retornar verdadeira

let arr = [4, 5, 10, 20, 35, 4, 5]
let numero = arr.findIndex(function(elemento) {
    return elemento > 30
})
console.log(numero)