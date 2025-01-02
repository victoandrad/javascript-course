// Object.assign(objeto alvo, objeto referência)
// método usado para copiar os atributos do objeto de referência para o objeto alvo

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

const pessoa2 = new Object()

// O assign copia somente os atributos enumeráveis
Object.assign(pessoa2, pessoa1)

console.log(pessoa1)
console.log(pessoa2)