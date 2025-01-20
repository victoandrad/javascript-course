// Construir uma função para calcular média

// Pode receber um ou mais valores números
// Deve retornar um único número
// Deve gerar um erro se receber um parâmetro não número
// Deve retornar zero caso não receba nenhum parâmetro

function calcularMedia() {
    let somaDasNotas = 0
    for(let i = 0; i < arguments.length; i++) {
        if(typeof arguments[i] !== 'number') {
            throw Error(`Erro de Utilização: Apenas números são aceitos`)
        }
        somaDasNotas += arguments[i]
    }
    return somaDasNotas / arguments.length || 0
}

try {
    console.log(calcularMedia(60, 30, 50, 60, 10))
} catch(e) {
    console.log(`${e.message}`)
}