// XMLHttpRequest

// creating the request
const xhr = new XMLHttpRequest()

// open the request
// HTTP GET, URL
xhr.open("GET", "database.json")

// send the request with the body passed by parameter
xhr.send(null)

// executes when the request status change
xhr.onreadystatechange = () => {
    // if the request status is 4 (sucess)
    if (xhr.readyState === 4) {
        // if the HTTP status is not an internal error
        if (xhr.status < 400) {
            // the data are transmitted in string
            const json = JSON.parse(xhr.responseText)
            console.log(json)
        }
    }
}