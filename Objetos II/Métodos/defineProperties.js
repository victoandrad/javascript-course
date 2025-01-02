// Object.defineProperties(objeto, objeto com os atributos)
// método usado para definir um ou mais atributos no objeto com seus respectivos objetos de configuração

const pessoa = new Object()

Object.defineProperties(pessoa, {
    nome: {
        value: "Luiza Aurora",
        configurable: false,
        enumerable: true,
        writable: true
    },
    conjuge: {
        value: "Victor Andrade",
        configurable: false,
        enumerable: true,
        writable: true
    }
})

console.log(pessoa)
console.log(Object.getOwnPropertyDescriptor(pessoa, "nome"))