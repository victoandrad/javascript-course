// hasOwnProperty()
// método usado para verificar se uma propriedade é diretamente do objeto, e não herdada por um protótipo

const obj = {
    nome: "Victor Andrade",
    idade: 19,
    __proto__: {
        nome: "Desconhecido",
        constructor: function() {}
    }
}

for(let prop in obj) {
    console.log(obj.hasOwnProperty(prop))
}