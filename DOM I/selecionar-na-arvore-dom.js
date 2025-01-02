let teste = document.getElementsByTagName('p')
let teste2 = teste.getElementsByTagName('span')

// É possível navegar pelo DOM usando variáveis anteriores.

let teste3 = document.querySelector('p > span')

(function() {
    const nomeUsuario = 'Victor'
    const elemento = document.querySelector('p > span')
    if(nomeUsuario) {
        elemento.innerHTML += `<b>${nomeUsuario}</b>`
    } else {
        elemento.parentElement.style.display = 'none'
        elemento.style.display = 'none'
    }
})()