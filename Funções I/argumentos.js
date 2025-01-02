// Como fazer uma função que aceita parâmetros dinâmicos?

// Método 1
function somar(a) {
    if(!Array.isArray(a)) {
        throw Error('Apenas array')
    }
    let resultado = 0
    for(let i = 0; i < a.length; i++) {
        if(typeof a[i] !== 'number') {
            throw Error('Somente números')
        }
        resultado += a[i]
    }
    return resultado
}

console.log(somar([0, 1, 2]))



// Método 2 [Indicado]
function somar2() {
    console.log(arguments)
    let resultado = 0
    for(let i = 0; i < arguments.length; i++) {
        if(typeof arguments[i] !== 'number') {
            throw Error('Somente números')
        }
        resultado += arguments[i]
    }
    return resultado
}

console.log(somar2(10, 20, 30))



// A propriedade arguments não existe dentro de arrow functions

const somar3 = () => {
    console.log(arguments)
    let resultado = 0
    for(let i = 0; i < arguments.length; i++) {
        if(typeof arguments[i] !== 'number') {
            throw Error('Somente números')
        }
        resultado += arguments[i]
    }
    return resultado
}

console.log(somar3(10, 20, 30))
