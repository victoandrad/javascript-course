// Referência vs valores

let x = 10

function mudaX(x) {
    x++
    console.log("x interno:", x)
}

mudaX(x)
console.log("x externo:", x)

// Foi passado por parâmetro apenas o valor, não a referência da variável