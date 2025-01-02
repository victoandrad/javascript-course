// O this é a referência de quem chamou a função

// Nesse caso, como a função está no escopo global, foi o NodeJS que executou ela, logo, o this se refere a ele.
function teste() {
    console.log(this)
}

teste()

// Nesse caso, o this está referenciando o objeto pessoa1, por que foi o objeto que chamou a função.
const pessoa1 = {
    nome: 'Victor',
    idade: 19,
    a: teste
}

pessoa1.a()