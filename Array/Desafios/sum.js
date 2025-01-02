const valores = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

function sum() {
    const numeros = Array.from(arguments)
    let resultado = 0
    numeros.forEach(function(elemento) {
        if(Array.isArray(elemento)) {
            resultado += elemento.reduce(function(acumulador, elemento) {
                return acumulador + elemento
            }, 0)
        } else {
            resultado += elemento
        }
    })
    return resultado
}

console.log(sum(10, 20, 30, 40, valores))
