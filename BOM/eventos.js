

// evento disparado quando toda a estrutura da página é carregada
window.addEventListener("load", function() {
    console.log("load")
})

// evento disparado quando a estrutura do DOM é carregado
window.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoad")
})

// evento disparado quando o tamanho da janela do navegador é alterado
window.addEventListener("resize", function() {
    console.log("resize")
})

// evento disparado quando o usuário realiza um scroll
window.addEventListener("scroll", function() {
    console.log("scroll", pageYOffset)
})

// 
window.addEventListener("unload", function() {
    console.log("unload")
})

window.addEventListener("beforeunload", function() {
    console.log("beforeunload")
})