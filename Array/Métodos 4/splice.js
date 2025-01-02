// splice
// Recorta um pedaço da array conforme os índices indicados
// Acrescenta novos elementos
// A função retorna esse pedaço

let arr = [1, 2, 3, 5, 6, 7, 8, 9, 10]
// Começa a remover no índice 2, remova 4 elementos, adicione esse elemento
let arr2 = arr.splice(2, 4, 'Luiza Aurora')
console.log(arr)
console.log(arr2)