// Closures é a capacidade de uma função lembrar das variáveis que haviam no contexto em que foram declaradas

const teste = (function(){
    let n = 0
    return function testeInterno() {
        console.log("teste interno chamado")  
        return "retorno de teste interno" + n
    }
})()

console.log(teste())


// Ex: quando o objeto Task é criado, a variável name é descartada, porém os métodos conseguem manipulá-la após seu descarte
function Task(name, completed) {
    let name = name
    this.completed = completed || false
    this.changeName = function(newName) {
        name = newName
    }
}

