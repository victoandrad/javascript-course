// for-of
// Serve para iterar array

const arr = [1, 2, 3]
for(let n of arr) {
    console.log(n)
}



// Diferente do método for in
// Serve para iterar objeto
    
const pessoa = {
    nome: 'Victor',
    idade: 19,
}
for(let prop in pessoa) {
    console.log(`${prop}: ${pessoa[prop]}`)
}