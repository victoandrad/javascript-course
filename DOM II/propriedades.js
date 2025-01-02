// --------------------------------
// PROPRIEDADES DE NAVEGAÇÃO

parentNode
// Retorna o elemento pai independente do tipo

parentElement
// Retorna o elemento pai do tipo elemento

nextSibling
// Retorna o irmão sucessor do elemento

previousSibling
// Retorna o irmão antecessor do elemento

childNodes
// Retorna um NodeList com todos os nós internos

children
// Retorna um HTML Collection com todos os elementos internos

firstChild
// Retorna o primeiro nó

lastChild
// Retorna o último nó

firstElementChild
// Retorna o primeiro nó do tipo elemento

lastElementChild
// Retorna o último nó do tipo elemento

hasChildNodes()
// Retorna verdadeiro se houver nós


// --------------------------------
// PROPRIEDADES PARA ADICIONAR NÓS

ParentNode.prepend()
// Adiciona o nó no começo do elemento pai

ParentNode.append()
// Adiciona o nó no final do elemento pai

Node.appendChild()
// Adiciona o nó no final do elemento pai

Node.insertBefore(elemento, elementoReferência)
// Adiciona um nó antes do elemento de referência

Node.cloneNode()
// Clona o nó, para clonar o conteúdo é necessário passar true como parâmetro

ChildNode.after()
// Adiciona o nó depois do elemento

ChildNode.before()
// Adiciona o nó antes do elemento


    // beforebegin
Element.insertAdjacentElement()
    // afterbegin

    // beforeend
// afterend

Element.insertAdjacentHTML()
// 

Element.insertAdjacentText()
// 



// --------------------------------
// PROPRIEDADES PARA REMOVER NÓS

Node.replaceChild()
// Substitui o node pelo nó passado por parâmetro

Node.removeChild()
// Remove o nó passado por parâmetro

ChildNode.remove()
// Remove o elemento

// --------------------------------
// PROPRIEDADES PARA CRIAR NÓS
document.createElement()
document.createAttribute()
document.createTextNode()
document.write()