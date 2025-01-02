function formatarNome(nomeCompleto) {
    nomeCompleto = nomeCompleto.trim()
    let primeiroEspaço = nomeCompleto.indexOf(" ")
    if(primeiroEspaço < 0) {
        return nomeCompleto
    }
    let nome = nomeCompleto.slice(0, primeiroEspaço)
    let sobrenome = nomeCompleto.slice(primeiroEspaço + 1)
    return `${sobrenome}, ${nome}`
}

console.log(formatarNome("Victor ")) // Victor
console.log(formatarNome("Victor Andrade")) // Andrade, Victor
console.log(formatarNome("Victor Andrade Miranda")) // Andrade Miranda, Victor

// USANDO O MÉTODO SPLIT()

function formatarNome2(nomeCompleto) {
    nomeCompleto = nomeCompleto.trim()
    let palavras = nomeCompleto.split(" ")
    if(palavras.length === 1) return nomeCompleto
    let nome = palavras.shift()
    let sobrenome = palavras.join(" ")
    return `${sobrenome}, ${nome}`
}

console.log(formatarNome2("Victor Andrade Miranda"))

