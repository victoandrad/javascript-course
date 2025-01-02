// Elemento que será manipulado
const elemento = document.querySelector('p')

// Selecionar o elemento pai
const elementoPai = elemento.parentElement

// Selecionar os elementos filhos
// Retorna um HTML Collection, é necessário informar o índice para acessar o elemento
const elementosFilhos = elemento.children

// Remove o elemento da página HTML
elemento.remove()
    // O método remove() não funciona no IE11
    // Para remover o elemento, é necessário selecionar o elemento pai e remover o elemento desejado
    elemento.parentElement.removeChild(elemento)


// Seleciona o primeiro nó, incluindo comentários
elemento.firstChild
// Seleciona o primeiro nó, apenas tags
elemento.firstElementChild
