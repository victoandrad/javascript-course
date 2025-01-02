// Object.defineProperty(objeto, "atributo", objeto de configuração)
// método usado para definir um novo atributo no objeto passando um objeto de configuração

const pessoa = {
    nome: "Luiza Aurora"
}

Object.defineProperty(pessoa, "conjuge", {
    value: "Victor Andrade",
    configurable: false,
    enumerable: false,
    writable: false
})

// configurable: define se o atributo pode ser deletado e se os atributos do objeto de configuração podem ser modificados
// enumerable: define se o atributo será enumerado em loopings
// writable: define se o valor do atributo pode ser alterado