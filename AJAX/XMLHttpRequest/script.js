// XMLHttpRequest

// Instanciando o objeto
const xhr = new XMLHttpRequest()

// Abre a requisição
// Métodos HTTP, URL
xhr.open("GET", "database.json")

// Efetua a requisição
// Com os dados
xhr.send(null)

// É executado quando muda o status da requisição
xhr.onreadystatechange = () => {
    // Se o estado da requisição for 4 (respondido)
    if (xhr.readyState === 4) {
        // Se o status HTTP não for erro interno
        if (xhr.status < 400) {
            // Os dados são trafegados como string
            const json = JSON.parse(xhr.responseText)
            console.log(json)
        }
    }
}