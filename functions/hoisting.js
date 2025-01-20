
// FUNÇÕES

// Durante a interpretação do JS, as funções são içadas para o topo do código, então podemos chamá-la antes de sua declaração.
teste1()
function teste1() {
    console.log('teste1')
}

// Quando temos uma variável com uma função, deixa de ser possível chamá-la antes de sua declaração.
const teste2 = function() {
    console.log('teste2')
}
teste2()



// VARIÁVEIS

// As variáveis são içadas para o topo do código, mas apenas a sua criação e sem atribuição.
console.log(minhaVar)
var minhaVar = 'variável'

// O hoisting acontece apenas para a var, excluindo let e const.