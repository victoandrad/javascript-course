let n  = 0

if(!n) {
    n = 10
}
console.log(n)

// O valor 0 é um falsy value
// O operador OR vai escolher o 10
n = 0
n = n || 20
console.log(n)

let isValid = false

if(isValid) {
    console.log("É valido")
}

isValid && console.log("É valido")
isValid || console.log("É valido")