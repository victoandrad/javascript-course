// Declaração de função
function somar(a = 0, b = 0) {
    // let a = a || 0
    // let b = b || 0
    return a + b
    // return é usado para indicar o que será retornado pela função.
    // return também termina a execução da função, voltando ao fluxo do algoritmo.
}
console.log(somar(2, 5))

// Function Expression
const ola = function() {
    console.log("Olá, mundo!")
}
ola()

// Arrow Functions
// Tem uma diferença de escopo
const ola2 = () => {
    console.log("Olá, mundo! Arrow Functions")
}
ola2()


// Escopo de Funções

let nome = "Victor Andrade"

function mostrarNome() {
    let nome = "Luiza Aurora"
    console.log("nome: " + nome)
}

mostrarNome()
console.log("nome: " + nome)
