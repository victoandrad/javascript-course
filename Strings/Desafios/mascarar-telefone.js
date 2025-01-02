let telefone = "91234-5678"
let telefone2 = "1234-5678"

function mascararTelefone(tel) {
    let hifemIndex = tel.indexOf("-")
    let primeiraParte = tel.slice(0, hifemIndex)
    let segundaParte = tel.slice(hifemIndex + 1)
    
    return `${primeiraParte[0].padEnd(primeiraParte.length, "*")}-${segundaParte.slice(-2).padStart(segundaParte.length, "*")}`
}

console.log(mascararTelefone(telefone))
console.log(mascararTelefone(telefone2))