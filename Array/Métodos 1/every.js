// every
// Retorna verdadeiro se todas as interações retornarem como verdadeiras
const arr = ['Victor Andrade', 19, true, true]

const somenteString = arr.every(function(elemento) {
    return typeof elemento === 'string'
})
console.log(somenteString)