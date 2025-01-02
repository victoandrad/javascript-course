
// A function expression herda o this do contexto onde foi CHAMADO
// A arrow function herda o this do contexto onde foi DEFINIDA


function functionExpression()  {
    console.log(this)
}

const arrowFunction = () => {
    console.log(this)
}

const person = {
    name: "Luiza Aurora",
    functionExpression,
    arrowFunction
}

// O this sempre será o contexto onde foi chamado
functionExpression() // o this refere-se ao objeto global
person.functionExpression() // o this refere-se ao objeto person


// O this sempre será o contexto onde está definido a arrow function
arrowFunction() // O this refere-se ao objeto global
person.arrowFunction() // O this refere-se ao objeto global