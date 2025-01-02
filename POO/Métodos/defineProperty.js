// defineProperty()
// método usado para definir uma propriedade ou método de um objeto de maneira mais detalhada

const obj = {
    nome: "Victor Andrade",
    idade: 19,
    __proto__: {
        nome: "Desconhecido",
    }
}

Object.defineProperty(obj, "constructor", {
    value: Object,

    // Usado para tornar a propriedade iterável ou não
    enumerable: true,
})

console.log(obj)