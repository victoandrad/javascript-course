// Como definir escopo de variáveis?

// A declaração por var tem a propriedade de 'vazar' do bloco em que foi declarada
function minhaFunção() {
    if(true) {
        var x = 10
    }
    // Esse código funcionará
    console.log(x)
}
minhaFunção()
// Esse retornará o erro (x is not defined)
console.log(x)


// A declaração por let a propriedade de ser restrita ao bloco em que foi declarado
function minhaFunção2() {
    if(true) {
        let x = 10
    }
    // Esse código retornará o erro (x is not defined)
    console.log(x)
}
// Esse retornará o erro (x is not defined)
console.log(x)