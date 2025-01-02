// Método some()
// Retorna verdadeiro se mais de uma interação retornar como verdadeira

const arr = ['Victor Andrade', 'Luiza Aurora', 19, 16, true, true]
const contemString = arr.some(function(elemento) {
    return typeof elemento === 'string'
})
console.log(contemString)