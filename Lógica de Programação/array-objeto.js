// O array-object é uma lista onde cada índice representa um objeto!

// Criando o objeto A
const pessoa1 = {nome: 'Victor', idade: 19}

// Criando o objeto B
const pessoa2 = {nome: 'Luiza', idade: 16}

// Agora, utilizando os objetos criados, podemos adicioná-los a um array
const pessoas1 = [ pessoa1, pessoa2 ]

// Ou também podemos criar os objetos diretamente na declaração do array
const pessoas2 = [
    {
        nome: 'Victor',
        idade: 19
    },
    {
        nome: 'Luiza',
        idade: 16
    }
]

console.log(pessoas1, pessoas2)

// Para acessar o valor de uma propriedade do objeto, usamos a seguinte sintaxe
// ARRAY [ ÍNDICE DO OBJETO ] . PROPRIEDADE
console.log(pessoas2[0].nome)

for(let i = 0; i < pessoas2.length; i++) {
    console.log(`Olá, ${pessoas2[i].nome}! Você tem ${pessoas2[i].idade} anos!`)
}