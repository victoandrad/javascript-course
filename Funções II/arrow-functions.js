
// FUNCTION EXPRESSION
function functionExpression() {
    console.log("function expression")
    return "function expression"
}

// ARROW FUNCTION

const arrowFunction = () => {
    console.log("arrow function")
    return "arrow function"
}

// Quando há somente um parâmetro, pode-se otimir os parênteses:
// Ex:

const arrowFunction2 = name => {
    console.log("arrow function")
    return "arrow function" + name
}

// Quando a função somente retorna somente uma coisa, pode-se simplificar:
// Ex:

const arrowFunction3 = name => "arrow function" + name

        // Cuidado: caso o retorno seja um objeto, o interpretador confunde as chaves do objeto com as chaves do escopo da função, para evitar esse problema, deve-se encapsular o objeto dentro dos parênteses
        // Ex:
        
        const arrowFunctions4 = name => ({ name: name})