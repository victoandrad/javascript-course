// fetch
// É a simplificação da Promise

function createFetch(method, url, body = null) {
    // O primeiro parâmetro é o endereço da requisição
    // O segundo parâmetro é o objeto de configuração da requisição
    return fetch(url, {
        method: method,
        body: body, // Lembrando que deve ser stringfy
        headers: {
            "Content-Type": "application/json"
        }
    })
    // O fetch sempre retorna uma requisição com sucesso
    // O único caso que retorna um erro é quando a requisição não pôde ser efetuada
    // Então precisamos verificar o status da requisição para impedir os erros HTTP 
    .then(response => onError(response))
    // Precisamos instanciar o JSON passado pelo body
    .then(response => response.json())

    // O método recebe a Promise por parâmetro
    function onError(response) {
        // A promise tem uma propriedade que informa o status da requisição
        if (!response.ok) {
            throw new Error("Internal Server Error. HTTP Status: " + response.status)
        }
        // Se a requisição foi um sucesso, é retornado a Promise
        return response
    }
}