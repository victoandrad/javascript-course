class Pessoa {

    #usuarios = [];

    constructor() {
        
    };

    get usuario() {
        if(this.#usuarios.length > 0) return this.#usuarios[this.#usuarios.length - 1];
        return ""
    };

    get usuarios() {
        // Recomendado evitar exportar referências, deve-se realizar uma duplicação dos valores para o valor original não ser alterado pelo desenvolvedor
        return [...this.#usuarios];
    };

    set usuario(_usuario) {
        if(typeof _usuario !== "string") {
            throw new Error("O usuário deve ser uma string");
        };
        this.#usuarios.push(_usuario);
    };
};

const pessoa = new Pessoa();