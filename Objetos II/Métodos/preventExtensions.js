// Object.preventExtensions(objeto)

// não é permitido criar
// é permitido alterar
// é permitido remover

const pessoa = {
    nome: "Luiza Aurora"
}

Object.preventExtensions(pessoa)
pessoa.conjuge = "Luiza Aurora"
pessoa.nome = "Victor Andrade"
console.log(pessoa)