// Object.values(objeto)
// método usado para retornar o valor das propriedades do objeto

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

// O values retorna apenas as propriedades enumeráveis
console.log(Object.values(pessoa1))