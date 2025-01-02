
// O rest operator é usado para agrupar parâmetros excedentes em uma função

function teste(n1, n2, ...ns) {
    console.log(n1)
    console.log(n2)
    console.log(ns)    
    console.log(typeof ns)    
}

teste(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)