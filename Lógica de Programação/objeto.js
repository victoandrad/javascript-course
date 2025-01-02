// Os objetos são estruturas chave-valor, ou sejam, cada chave corresponde a um valor

// Sintaxe formal

const pessoa = new Object()
pessoa.nome = 'Victor'
pessoa.idade = 19
pessoa.conjuge = 'Luiza'

// Sintaxe literal

const pessoa2 = {
    nome: 'Victor',
    idade: 19,
    conjuge: 'Luiza'
}

// Diversas maneiras de acessar os valores do objeto

console.log(pessoa.nome)
console.log(pessoa['nome'])
let prop = 'nome'
console.log(pessoa[prop])


// Como iterar objetos

for(let prop in pessoa) {
    console.log(`${prop}: ${pessoa[prop]}`)
}

// Métodos de objetos

const produto = {
    nome: 'Caneta',
    quantidade: 10,
    comprar: function(n) {
        console.log(this)
        if(n > this.quantidade) {
            return 'Quantidade não disponível'
        }
        this.quantidade -= n
    }
}

produto.comprar(3)