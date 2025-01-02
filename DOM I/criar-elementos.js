// Para criar um novo elemento
const elemento = document.createElement('div')
// Nesse momento, o elemento criado não está anexado ao documento, ou seja, é um nó solto

// Para adicionar classes
elemento.className = 'meu-elemento'

// Para adicionar ID
elemento.id = 'meu-id'

// Para inserir o elemento criado no documento.
// elementoPai.insertBefore(novoElemento, elementoReferência)
const elementoPai = document.querySelector('div')
elementoPai.insertBefore(elemento, elementoPai.querySelectorAll('elemento-referência'))
// O elemento será adicionado acima do elemento referência
