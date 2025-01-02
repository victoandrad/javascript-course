// Object.keys(objeto)
// método usado para retornar um array com as propriedades do objeto
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

// O keys retorna apenas as propriedades enumeráveis
console.log(Object.keys(pessoa1))