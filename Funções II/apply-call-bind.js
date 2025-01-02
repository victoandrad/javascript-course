
// Para passar o contexto de this para uma função, utilizamos os métodos apply, call e bind

function functionExpression(str, n) {
    console.log(this)
    console.log(str, n)
}

// No primeiro parâmetro passamos o objeto que será o this
functionExpression.call({ name: "Luiza Aurora", age: 16 }, "Luiza Aurora", 16)

// O método apply faz a mesma coisa, porém passamos os argumentos dentro de um array
functionExpression.apply({ name: "Luiza Aurora", age: 16}, ["Luiza Aurora", 16])

// Podemos usar o spread operator para quebrar o array e usar o método call
functionExpression.call({ name: "Luiza Aurora", age: 16}, ...["Luiza Aurora", 16])


// O método bind é como se criassemos uma cópia da função definindo o this que queremos nela
const teste = functionExpression.bind({ name: "Victor Andrade", age: 19 })
teste("Victor Andrade", 19)