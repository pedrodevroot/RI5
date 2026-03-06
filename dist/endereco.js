"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
class Endereco {
    numero;
    rua;
    bairro;
    cidade;
    constructor(numero, rua, bairro, cidade) {
        this.numero = numero;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
    }
    descrever() {
        return `Rua: ${this.rua} Bairro: ${this.bairro} - Cidade: ${this.cidade} Número: ${this.numero}`;
    }
}
exports.Endereco = Endereco;
