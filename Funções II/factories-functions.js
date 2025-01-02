
// Factories Functions são funções que retornam objetos


function criarCachorro(nome) {
    // Usamos os closures para encapsular variáveis dentro do escopo do objeto para que não seja possível visualizá-la.
    let posicao = 0
    return {
        nome,
        latir() {
            console.log(`${this.nome} está latindo!`)
        },
        andar(distancia) {
            posicao += distancia
            console.log(`${this.nome} está andando ${distancia} metros`)
        },
        // Quando queremos utilizar um método sendo uma propriedade do objeto, devemos indicar pela palavra get
        get posicao() {
            return posicao
        },
    }
}

const cachorro = criarCachorro("Cachorro 1")
cachorro.latir()
cachorro.andar(5)
console.log(cachorro.posicao)
console.log(cachorro)