// Object.entries(objeto)
// método usado para retornar um array com arrays contendo as propriedades e valores do objeto
const pessoa1 = new Object()

Object.defineProperties(pessoa1, {
    nome: {
        value: "Luiza Aurora",
        configurable: true,
        enumerable: true,
        writable: true
    },
    conjuge: {
        value: "Victor Andrade",
        configurable: true,
        enumerable: false,
        writable: true,
    }
})

// O entries retorna apenas as propriedades enumeráveis
console.log(Object.entries(pessoa1))