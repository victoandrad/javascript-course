// Quando declaramos uma variável contendo algum tipo primitivo, o computador armazena o valor

let a = 'Victor'
let _a = 'Victor'

// O retorno é true porque está sendo comparado os valores, pois são dados primitivos.
console.log(a == _a)


// Quando declaramos uma variável contendo outro tipo, o computador armazena a referência daquele dado na memória.

// Não está sendo armazenado o array em si, mas o espaço na memória onde o array está armazenado.
let b = ['Victor', 'Luiza']
let _b = ['Victor', 'Luiza']

// O retorno é false porque está sendo comparado a referência e estão armazenados em lugares diferentes.
console.log(b == _b)

// Isso indica que _b tem o mesmo espaço na memória que o b, ou seja, duas variáveis apontando para o mesmo lugar.
b = _b

// A partir de agora, ao realizar uma alteração em um dos dois, será aplicado ao outro instanteamente.
b.push('oi')
_b.push('tchau')
console.log(b, _b)

// Isso vale para todos os tipos de dados que não são primitivos
