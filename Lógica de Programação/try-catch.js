// O try-catch é usado para envelopar códigos que podem retornar um erro.
// No caso da função somar, se os parâmetros informados não forem números, é retornado um erro.

function somar(n1, n2) {
    if(typeof n1 !== "number" || typeof n2 !== "number") {
        throw Error('Apenas números')
    }
    return n1 + n2
}

try {
    console.log(somar(5, '5'))
} catch(e) {
    console.log(e.message)
} finally {
    console.log('Função somar invocada') 
}