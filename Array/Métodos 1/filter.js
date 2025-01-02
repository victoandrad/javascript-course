// filter
// Retorna um array com os elementos que as interações retornaram verdadeiras

const arr = ['Victor Andrade', 19, true, true]
const somenteString = arr.filter(function(elemento) {
    return typeof elemento === 'string'
})
console.log(somenteString)