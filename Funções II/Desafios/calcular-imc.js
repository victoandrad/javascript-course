
// Defina uma função que calcule e classifica o IMC e a vincule em um objeto do tipo Pessoa

const calcularIMC = (peso, altura) => {
    return peso / altura**2
}

const classificarIMC = imc => {
    if(imc < 18.5) {
        return "Abaixo do peso"
    } else if(imc < 24.9) {
        return "Peso normal"
    } else if(imc < 29.9) {
        return "Sobrepeso"
    } else if(imc < 34.9) {
        return "Obesidade Grau I"
    } else if(imc < 39.9) {
        return "Obesidade Grau II"
    } else {
        return "Obesidade Grau III"
    }
}

const pessoa = {
    nome: "Victor",
    sobrenome: "Andrade",
    peso: 60,
    altura: 1.75,
    calcularIMC: function() {
        return calcularIMC(this.peso, this.altura)
    },
    classificarIMC() {
        return classificarIMC(this.calcularIMC())
    }
}

let imc = pessoa.calcularIMC().toFixed(2)
let classificacao = pessoa.classificarIMC().toLocaleLowerCase()

console.log(`${pessoa.nome}, o seu IMC é ${imc} e está classificado como ${classificacao}.`)