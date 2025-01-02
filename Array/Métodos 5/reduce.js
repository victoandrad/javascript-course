// reduce

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let soma = arr.reduce(function(acumulador, valorAtual, i, array) {
    return acumulador + valorAtual
}, 0)

console.log(soma)

const nomes = ['Luiza', 'Cristina', 'Aurora', 'Nunes', 'Victor', 'Andrade', 'Miranda']

let nomesOrganizados = nomes.reduce(function(nomes, nomeAtual) {
    let primeiraLetra = nomeAtual[0]
    if(nomes[primeiraLetra]) {
        nomes[primeiraLetra]++
    } else {
        nomes[primeiraLetra] = 1
    }
    return nomes
}, {})

console.log(nomesOrganizados)