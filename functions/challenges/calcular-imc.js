// Construir uma função para calcular IMC

// IMC = peso / altura²
// Deve retornar um único número
// Deve gerar um erro se receber um parâmetro não número
// Deve retornar erro caso não receba nenhum parâmetro

function calcularIMC(peso, altura) {
    if(arguments.length !== 2) {
        throw new Error('Parâmetros incorretos! Utilize: peso, altura')
    }
    for(let i = 0; i < arguments.length; i++) {
        if(typeof arguments[i] !== 'number') {
            throw new Error('Parâmetros incorretos! Utilize apenas números')
        }
    }
    return parseFloat((peso / altura**2).toFixed(1))
}

// Construir uma função para classificar IMC

// Deve receber um número (o IMC)
// Deve retornar uma string
// Deve gerar um erro se receber um parâmetro não número
// Deve retornar erro caso não receba nenhum parâmetro

function classificarIMC(imc) {
    if(arguments.length !== 1) {
        throw new Error('Parâmetros incorretos! Utilize: IMC')
    }
    if(typeof arguments[0] !== 'number') {
        throw new Error('Parâmetros incorretos! Utilize apenas números')
    }
    let resultado = `O seu IMC: ${imc} está classificado como `
    if(imc <= 16.9) {
        resultado += 'Muito abaixo do peso'
    } else if(imc <= 18.4) {
        resultado += 'Abaixo do peso'
    } else if(imc <= 24.9) {
        resultado += 'Peso normal'
    } else if(imc <= 29.9) {
        resultado += 'Acima do peso'
    } else if(imc <= 34.9) {
        resultado += 'Obesidade Grau I'
    } else if(imc <= 40) {
        resultado += 'Obesidade Grau II'
    } else if(imc > 40) {
        resultado += 'Obesidade Grau III'
    } else {
        resultado += 'Nenhuma classificação'
    }
    return resultado
}

try {
    console.log(classificarIMC(calcularIMC('60', 1.75)))
} catch(e) {
    console.log(e.message)
}