// toLocaleString()
// Método usado para transformar um número em uma String
// Faz automaticamente a separação por pontos e vírgulas e adiciona o padrão da moeda

let numero = 123456.789
console.log(numero.toLocaleString("en-us"))
console.log(numero.toLocaleString("pt-br"))
console.log(numero.toLocaleString("pt-br", {style: "currency", currency: "BRL"}))