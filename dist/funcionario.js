"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    nome;
    matricula;
    cpf;
    endereco;
    telefone;
    constructor(nome, matricula, cpf, endereco, telefone) {
        this.nome = nome;
        this.matricula = matricula;
        this.cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
    }
    descrever() {
        return `
Nome: ${this.nome}
Matricula: ${this.matricula}
CPF: ${this.cpf}
Telefone: ${this.telefone.descrever()}
${this.endereco.descrever()}
`;
    }
}
exports.Funcionario = Funcionario;
