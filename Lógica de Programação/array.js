// Sintaxe formal

const arr = new Array()
arr[0] = 'Victor'
arr[1] = 19
arr[2] = new Array(1, 2, 3)

const arr2 = new Array('Victor', 19, new Array(1, 2, 3))

// Sintaxe literal
const arr3 = ['Victor', 19, [1, 2, 3]]

// Para acessar o índice, utiliza-se []

console.log(arr3[1])

// Para adicionar novos valores

// O length obtém o tamanho do array, lembre-se que o índice é sempre -1
arr3[arr3.length] = 'Luiza'

// O método Push também faz isso
arr3.push('Luiza')
console.log(arr3)

// Como iterar arrays

const nomes = ['Victor', 'Luiza', 'Livia']

for(let i = 0; i < nomes.length; i++) {
    console.log(`${i}: ${nomes[i]}`)
}