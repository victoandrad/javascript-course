// Object.freeze(objeto)

// não é permitido criar
// não é permitido alterar
// não é permitido remover

const pessoa = {
    nome: "Luiza Aurora"
}

Object.freeze(pessoa)
pessoa.conjuge = "Luiza Aurora"
console.log(pessoa)

