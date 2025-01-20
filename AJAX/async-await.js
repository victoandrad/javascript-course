// async/await
// these are instructions to transform asynchronous code into synchronous code

// the word async declares an asynchronous function. An asynchronous function always returns a Promise, even if internally it does not use
async function myFunction() {
    return "Resultado"
}

myFunction()
    .then()
    .catch()
    .finally()


// the word await can only be used in functions that have been declared asynchronous.
// pause the code so the promise is resolved
async function exemplo() {
    let valor = await Promise.resolve(42)
    console.log(valor)
}