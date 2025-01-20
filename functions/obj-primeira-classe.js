// Objetos de primeira classe

// Passadas como parâmetros para outras funções (callback)
// Atribuídas em propriedades de objetos (métodos)
// Retornadas como resultaod de outra função
// Podem ter suas próprias propriedades


// Essa função está recebendo o parâmetro cb
function fn(cb) {
    console.log('executar ação de callback')
    // Se o parâmetro cb é uma função, então execute-a
    typeof cb === 'function' && cb()
}

// Criando uma função chamada callback
function callback() {
    console.log('função passada por parâmetro')
}

// Invocando a função fn, passando como parâmetro a função callback
fn(callback)

const obj = {
    callback: callback
}

obj.callback()


// Também posso retornar uma função como resultado de outra função
function fn2(n1) {
    return function(n2) {
        return n1 * n2
    }
}

// A variável funcao2 está armazenando o retorno da fn2, ou seja, outra função
const funcao2 = fn2(10)

// Agora vamos invocar a funcao2
const mult = funcao2(10)
console.log(mult)


function fn3() {
    fn3.count++
    return function() {
        console.log('função retornada por parâmetro')
    }
}
fn3.count = 0
const funcao3 = fn3()
console.log(fn3.count)
