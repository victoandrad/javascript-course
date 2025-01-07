// web workers

// O navegador é single-thread, ou seja, apenas uma ação pode ser executada por vez.
// Quando executamos um processo demorado, a interface fica suspensa, não sendo possível interagir com ela.

// Instanciando o Worker
const worker = new Worker("URL do script")

    // Um script fictício
    // Dentro deste script, o self referencia o worker que o chamou
    self.postMessage("Processo demorado finalizado")

// Precisamos enviar uma mensagem para o worker começar o seu funcionamento
worker.postMessage("Mensagem enviada pelo Worker")

// Precisamos receber a mensagem enviada pelo worker
worker.addEventListener("message", (e) => {
    console.log(e)
    console.log(e.data)
})