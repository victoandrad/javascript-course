function latir() {
    console.log(this.nome, "está latindo")
}

function miar() {
    console.log(this.nome, "está miando")
}

const cachorro = {
    nome: "Cachorro",
    falar: latir
}

const gato = {
    nome: "Gato",
    falar() {
        miar() // o this refere-se ao objeto global por não ter nenhuma ligação com o objeto gato

        // Para passar o contexto de this para a função miar, utilizamos os métodos apply e call
        miar.call(this)
    }
}

 
cachorro.falar()
gato.falar()