// operador destructuring
// usado para destruir um objeto em várias variáveis

const pessoa = {
    nome: "Luiza Aurora",
    conjuge: "Victor Andrade"
}

let { nome, conjuge } = pessoa
let { nome: n, conjuge: c } = pessoa

console.log(nome, conjuge)
console.log(n, c)