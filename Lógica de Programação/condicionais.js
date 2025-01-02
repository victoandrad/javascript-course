// As estruturas condicionais baseiam-se em uma condição para controlar o fluxo do algoritmo


// Estrutura if-else

let idade = 18
if (idade < 18) {
    console.log("Jovem")
} else if(idade >= 18) {
    console.log("Adulto")
}

let maioridade = (idade >= 18) ? "Adulto" : "Jovem"
console.log(maioridade)

// Estrutura switch-case

let dia = ""
switch(diaSemana) {
    case 0:
        dia = "Domingo"
        break
    case 1:
        dia = "Segunda-feira"
        break
    case 2:
        dia = "Terça-feira"
        break
    case 3:
        dia = "Quarta-feira"
        break
    case 4:
        dia = "Quinta-feira"
        break
    case 5:
        dia = "Sexta-feira"
        break
    case 6:
        dia = "Sábado"
        break
    default:
        dia = " -- "
}

console.log(`Hoje é ${dia}`)