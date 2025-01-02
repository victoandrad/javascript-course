// Symbol é um tipo de dado único
// Symbol não é um construtor
const NOME = Symbol()
console.log(NOME, typeof NOME)

const user = {
    [NOME]: "1",
    nome: "2"
}

console.log(user[NOME])
console.log(user.nome)

let teste = Object.getOwnPropertySymbols(user)

console.log(user[teste[0]])