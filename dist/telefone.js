"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefone = void 0;
class Telefone {
    ddd;
    numero;
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
    descrever() {
        return `(${this.ddd}) ${this.numero}`;
    }
}
exports.Telefone = Telefone;
