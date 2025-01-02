// spread operator (...)
// Quebra a estrutura de array, fazendo com que os elementos fiquem separados

const arr = [1, 2, 3]

function somar() {
    console.log(arguments)
    console.log(arguments.length)
}

somar(arr)
somar(...arr)

const arr2 = [4, 5, 6, 7, 8, 9, 10]
arr.push(...arr2)
console.log(arr)