// ---------- 1. NAVEGAÇÃO

// Métodos para navegar entre elementos e nós no DOM.
parentNode           // retorna o nó pai, independente do tipo
parentElement        // retorna o nó pai do tipo elemento
nextSibling          // retorna o próximo nó irmão
previousSibling      // retorna o nó irmão anterior
childNodes           // retorna um NodeList de todos os nós filhos
children             // retorna um HTMLCollection de todos os elementos filhos
firstChild           // retorna o primeiro nó filho
lastChild            // retorna o último nó filho
firstElementChild    // retorna o primeiro nó filho do tipo elemento
lastElementChild     // retorna o último nó filho do tipo elemento
hasChildNodes()      // retorna true se houver nós filhos

// ---------- 2. ADICIONAR NÓS

// Métodos para adicionar nós ao DOM.

// 2.1 Inserção no Início
ParentNode.prepend()     // adiciona um nó no início do elemento pai

// 2.2 Inserção no Final
ParentNode.append()      // adiciona um nó no final do elemento pai
Node.appendChild()       // adiciona um nó no final do elemento pai

// 2.3 Inserção Relativa ao Nó
Node.insertBefore(element, referenceElement) // adiciona um nó antes de outro nó
ChildNode.after()         // adiciona um nó depois do elemento
ChildNode.before()        // adiciona um nó antes do elemento

// Inserções com Posições Específicas
Element.insertAdjacentElement(position, element)
// Posições possíveis:
// - beforebegin: antes do elemento
// - afterbegin: dentro, antes do primeiro filho
// - beforeend: dentro, após o último filho
// - afterend: depois do elemento

Element.insertAdjacentHTML(position, html)   // insere HTML na posição especificada
Element.insertAdjacentText(position, text)   // insere texto na posição especificada

// ---------- 3. REMOVER NÓS

// Métodos para remover nós do DOM.
Node.replaceChild(newChild, oldChild)   // substitui um nó por outro
Node.removeChild(child)                // remove um nó específico
ChildNode.remove()                     // remove o elemento diretamente

// ---------- 4. CRIAR NÓS

// Métodos para criar novos nós.
document.createElement(tagName)        // cria um elemento
document.createAttribute(name)         // cria um atributo
document.createTextNode(text)          // cria um nó de texto
document.write(html)                   // escreve HTML diretamente no documento
