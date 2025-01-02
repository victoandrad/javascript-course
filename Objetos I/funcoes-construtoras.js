// Funções construtoras
// São funções que constroem objetos de forma padronizada

function Task(name) {
    this.name = name
    this.createdAt = new Date()
    this.updatedAt = null
}

const task1 = new Task("Luiza Aurora")
console.log(task1)

// Vamos tornar a propriedade nome privada no escopo do objeto para não ser possível alterá-la diretamente. Ao invés disso, será necessário utilizar um método

// O motivo disso é que ao atualizar o nome seja atualizado também a propriedade updatedAt

function Task2(name) {
    // É uma convenção utilizar underline no começo de varíaveis para sinalizar que seu escopo é privado
    let _name = name
    this.createdAt = new Date()
    this.updatedAt = null
    this.setName = function(newName) {
        if(!newName) {
            throw new Error("Informe o novo nome")
        }
        _name = newName
        this.updatedAt = new Date()
    }
    this.getName = function() {
        return _name
    }
}

const task2 = new Task2("Victor Andrade")
task2.setName("Victor")
console.log(task2)
console.log(task2.getName())



// Quando não é utilizado o operador new, o this passa a referenciar o contexto que foi chamado
// Para evitar que as propriedades do objeto sejam declaradas no escopo externo da função construtora, usamos o use-strict
// O use-strict faz o this ser undefined quando não usado o operador new

function Task3(name) {
    "use strict"
    if(this === undefined) {
        throw new Error("É obrigatório iniciar uma nova instância do objeto")
    }
    let _name = name
    this.createdAt = new Date()
    this.updatedAt = null
    this.setName = function(newName) {
        if(!newName) {
            throw new Error("Informe o novo nome")
        }
        _name = newName
        this.updatedAt = new Date()
    }
    this.getName = function() {
        return _name
    }
}

const task3 = Task3("Olá")
console.log(task3)