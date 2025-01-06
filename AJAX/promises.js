// Promise
// É um objeto para facilitar a manipulação de callbacks.

function createPromise(method, url) {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.send(null)
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status < 400) {
                    const json = JSON.parse(xhr.responseText)
                    resolve(json)
                } else {
                    reject(new Error("Internal Server Error. HTTP Status: " + xhr.status))
                }
            }
        }
    })
}

// Chamamos o método passando os parâmetros esperados
// Não é necessário passar callback como parâmetro
createPromise("GET", "database.json")
    // O método then será executado quando a requisição for um sucesso
    .then(response => {
        console.log("Tudo certo")
    })
    // O método catch será executado quando a requisição for um fracasso
    .catch(error => {
        console.log("Ocorreu um erro")
    })

// É uma convenção usar response e error como nome dos parâmetros retornados pela promise

