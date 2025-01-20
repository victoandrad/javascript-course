// promise
// it is an object to facilitate callback manipulation.

function createPromise(method, url, body = null) {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.setRequestHeader("Contenty-Type", "application/json")
        xhr.send(body)
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

// we call the method passing the expected parameters
// no need to pass callback as parameter
createPromise("GET", "database.json")
    // then method will executed when the request is a sucessful
    .then(response => {
        console.log("Tudo certo")
    })
    // catch method will executed when the request is not a sucessful
    .catch(error => {
        console.log("Ocorreu um erro")
    })

// it is a convention to use response and error as the name of the parameters returned by the promise
