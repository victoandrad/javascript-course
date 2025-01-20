// fetch
// it is a promise simplification

function createFetch(method, url, body = null) {
    // the first parameter is the request address
    // the second parameter is the configuration object of the request
    return fetch(url, {
        method: method,
        body: body, // needs to be a string
        headers: {
            "Content-Type": "application/json"
        }
    })
    // the fetch method always returns a sucessful request
    // the only case that returns an error, is when the request could not be made

    // needs to check the request status to prevent HTTP errors
    .then(response => onError(response))
    // needs to instantiate the JSON
    .then(response => response.json())

    // the method receives the promise as a parameter
    function onError(response) {
        // the promise has a property that stores the request status
        if (!response.ok) {
            throw new Error("Internal Server Error. HTTP Status: " + response.status)
        }
        // if the request is sucessful, the promise is returned
        return response
    }
}