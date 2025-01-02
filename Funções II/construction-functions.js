
// Funções construtoras são funções que criam objetos a partir de um molde

function Cachorro(nome) {
    "use strict"
    let posicao = 0
    this.nome = nome
    this.latir = function() {
        console.log(`${this.nome} está latindo!`)
    },
    this.andar = function(distancia) {
        posicao += distancia
        console.log(`${this.nome} está andando ${distancia} metros`)
        console.log(`${this.nome} está na posição ${posicao}`)
    }
}

const cachorro1 = new Cachorro("Cachorro 1")
cachorro1.andar(5)
cachorro1.andar(5)
const cachorro2 = new Cachorro("Cachorro 2")