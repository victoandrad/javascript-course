let divTabuada = document.getElementById('tabuada-campo')

function gerarTabuada() {
    let numero
    do {
        numero = prompt('Qual é o número?')
        numero = Number(numero)
        if(isNaN(numero)) {
            alert('Informe um número válido')
        }
    } while (isNaN(numero))

    let resultado = ''
    for(let i = 0; i <= 100; i++) {
        resultado += `<span>${numero} * ${i} = ${numero*i}</span>`
    }
    divTabuada.innerHTML = resultado
}

function limparTabuada() {
    divTabuada.innerHTML = ''
}