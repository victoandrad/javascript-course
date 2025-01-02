// Criar um array com números aleatórios não repetidos.

function gerarNumeroAleatorio(max) {
    return parseInt(Math.random() * max)
}

let arr = []
while(arr.length <= 20) {
    let numeroAleatorio = gerarNumeroAleatorio(21)
    if(arr.indexOf(numeroAleatorio) < 0) {
        arr.push(numeroAleatorio)
    }
}

console.log(arr)
arr.sort()
console.log(arr)