// async/await
// São instruções para transformar um código assíncrono para síncrono

// A palavra async declara uma função assíncrona. Uma função assíncrona sempre retorna uma Promise, mesmo que internamente não use

async function minhaFuncao() {
    return "Resultado"
}

// Significa que podemos fazer o seguinte
minhaFuncao()
    .then()
    .catch()
    .finally()

// A palavra await só pode ser usada em funções que foram declaradas assíncronas.

async function exemplo() {
    let valor = await Promise.resolve(42)
    console.log(valor)
}

// Nesse caso, o await pausa o código para que a Promise seja resolvida, garantindo que a variável valor tenha algo para o console imprimir.