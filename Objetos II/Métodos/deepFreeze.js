// deepFreeze
// função recursiva usada para congelar por completo um objeto
// o método freeze congela a primeira camada das propriedades, ou seja, não congela propriedades com tipos de dados compostos

function deepFreeze(obj) {
    const propNames = Object.getOwnPropertyNames(obj)
    
    propNames.forEach(propName => {
        let prop = obj[propName]
        if(typeof prop === "object" && prop !== null) {
            deepFreeze(prop)
        }
    })
    return Object.freeze(obj)
}

const pessoa = {
    nome: "Luiza Aurora",
    conjuge: "Victor Andrade",
    disciplinas: {
        matematica: {
            professor: "Fulano",
            notas: [10, 10, 10, 9]
        },
        portugues: {
            professor: "Fulana",
            notas: [9, 9, 9, 8]
        }
    }
}

deepFreeze(pessoa)
console.log(pessoa)
pessoa.disciplinas.matematica.professor = "Garibaldo"
console.log(pessoa)