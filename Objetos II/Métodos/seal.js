// Object.seal(objeto)

// não é permitido criar
// é permitido alterar
// não é permitido remover

const pessoa = {
    nome: "Luiza Aurora"
}

Object.seal(pessoa)
pessoa.conjuge = "Luiza Aurora"
console.log(pessoa)