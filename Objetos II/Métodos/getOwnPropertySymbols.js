// Object.getOwnPropertySymbols(objeto)
// método usado para recuperar todas as propriedades do tipo symbol do objeto

const NOME = Symbol()

const pessoa = {
    [NOME]: "Luiza Aurora",
    idade: 16
}

const symbols = Object.getOwnPropertySymbols(pessoa)

console.log(symbols)
console.log(pessoa[symbols[0]])