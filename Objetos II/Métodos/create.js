// Object.create(protótipo, o próprio objeto)
// método usado para criar objetos e definir seus protótipos

const mae = {
    nome: "Luiza Aurora",
    falar: function() {
        console.log(`${this.nome} está falando`)
    }
}

// O primeiro parâmetro é o objeto que será o protótipo
// O segundo parâmetro é o objeto que será criado
// Os atributos do objeto que será criado devem ser declarados através de descritores

const filha = Object.create(mae, { nome: { value: "Livia Aurora", configurable: true } })
console.log(filha)
console.log(Object.getPrototypeOf(filha))
