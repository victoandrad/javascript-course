// Objetos

// Sintaxe literal
const person = {
    name: "Victor Andrade",
    age: 19,
}

// Sintaxe formal
const person2 = new Object()
person2.name = "Luiza Aurora"
person2.age = 19

// Sintaxe literal
const str = "Minha String"
console.log(str.length)

// Como não é um objeto, o JS transforma a String para um objeto do tipo String para poder acessar os métodos

const str2 = new String("Minha String")
console.log(str2.length)