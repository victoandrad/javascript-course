;(function() {

    let _quantidade = 0;
    let _chamadas = 0;

    this.produto = {
        nome: "Carrinho",
        get quantidade() {
            _chamadas++
            return _quantidade
        },
        set quantidade(valor) {
            if(valor <= 0) {
                throw new Error("Quantidade inválida!")
            };
            _quantidade = valor
        },
        get chamadas() {
            return _chamadas;
        },
    };
})();