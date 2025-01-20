// web workers

// the browser is single-thread, meaning only one action can be execute at a time 
// when is executed a long process, the interface is suspended, making it impossible to interact with it.

// creating a worker
const worker = new Worker("script-url")

    // fake script
    // inside this script, the self references the work that called it
    self.postMessage("Long process is finished")


// needs to send a message to the worker to start
worker.postMessage("Message sent by worker")

// needs to receive the message sent by the worker
worker.addEventListener("message", (e) => {
    console.log(e)
    console.log(e.data)
})