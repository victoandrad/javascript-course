
console.log("\n-- OPERADORES ARITMÉTICOS --\n")

// OPERADORES ARITMÉTICOS
let n1 = 10
let n2 = 5

// adição +
console.log(`Adição: ${n1} + ${n2} = ${n1 + n2}`)

// subtração -
console.log(`Subtração: ${n1} + ${n2} = ${n1 - n2}`)

// multiplicação *
console.log(`Multiplicação: ${n1} + ${n2} = ${n1 * n2}`)

// divisão /
console.log(`Divisão: ${n1} + ${n2} = ${n1 / n2}`)

// resto da divisão %
console.log(`Resto da divisão: ${n1} + ${n2} = ${n1 % n2}`)

// potenciação
console.log(`Potenciação: ${n1} + ${n2} = ${n1 ** n2}`)

console.log("\n-- OPERADORES DE ATRIBUIÇÃO --\n")

// OPERADORES DE ATRIBUIÇÃO

// atribuição =
let n3 = 20

// atribuição com adição +=
let n4 = 20
n4 += 15
console.log(`Atribuição com adição: ${n4}`)

// atribuição com subtração -=
let n5 = 20
n5 -= 15
console.log(`Atribuição com subtração: ${n5}`)

// atribuição com multiplicação *=
let n6 = 20
n6 *= 2
console.log(`Atribuição com multiplicação: ${n6}`)

// atribuição com divisão
let n7 = 20
n7 /= 2
console.log(`Atribuição com divisão: ${n7}`)

// atribuição com resto da divisão
let n8 = 20
n8 %= 2
console.log(`Atribuição com resto da divisão: ${n8}`)

// atribuição com potenciação
let n9 = 20
n9 **= 2
console.log(`Atribuição com potenciação: ${n9}`)

console.log("\n-- OPERADORES DE INCREMENTO E DECREMENTO --\n")

// OPERADORES DE INCREMENTO E DECREMENTO

// pós-incremento
let n10 = 0
n10 = n10 + 1
n10 += 1
n10++
console.log(`Incremento: ${n10}`)

// pós-decremento
let n11 = 0
n11 = n11 - 1
n11 -= 1
n11--
console.log(`Decremento: ${n11}`)

// O pré-incremento e pré-decremento são diferentes, segue o exemplo abaixo:
let n12 = 0
console.log(n12++)
// Nesse caso, primeiro é impresso e depois incrementado.
console.log(n12)

let n13 = 0
console.log(++n13)
// Nesse caso, primeiro é incrementado e depois impresso.
console.log(n13)

// O pré-incremento acontece antes da execução da linha.
// O pós-incremento acontece depois da execução da linha.

console.log("\n-- OPERADORES DE COMPARAÇÃO --\n")

let n14 = 10

// igualdade de valor
console.log(n14 == "10")
    // Retorna verdadeiro

// igualdade de valor e tipo
console.log(n14 === "10")
    // Retorna falso

// menor que
console.log(n14 < 10)
    // Retorna falso

// maior que >
console.log(n14 > 10)
    // Retorna falso

// menor ou igual que <=
console.log(n14 <= 10)
    // Retorna verdadeiro

// maior ou igual que >=
console.log(n14 >= 10)
    // Retorna verdadeiro

// valores diferentes !=
console.log(n14 != "10")
    // Retorna falso

// valores e tipos diferentes !==
console.log(n14 !== "10")
    // Retorna verdadeiro


console.log("\n-- OPERADORES LÓGICOS --\n")

// AND &&
// OR ||
// NOT !

// Para uma pessoa viajar, precisa ser maior de 18 anos
// Ou acompanhado com os pais
// E ter comprado o bilhete

let idade = 18
let paisPresentes = true
let comprouBilhete = false
let podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete

console.log(podeViajar)

// ORDEM DE PROCEDENCIA DOS OPERADORES
// Parênteses
// Exponenciação ou radiciação
// Multiplicação ou divisão
// Adição e subtração
// Operadores relacionais
// Operadores de igualdade
// AND
// OR
// Atribuição
