"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
class Empresa {
    funcionarios;
    endereco;
    razaoSocial;
    nomeFantasia;
    cnpj;
    constructor(funcionarios, endereco, razaoSocial, nomeFantasia, cnpj) {
        this.funcionarios = funcionarios;
        this.endereco = endereco;
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
    }
    descreverEmpresa() {
        let descricao = `
Empresa: ${this.nomeFantasia}
Razão Social: ${this.razaoSocial}
CNPJ: ${this.cnpj}
Endereco: ${this.endereco.descrever()}

Funcionarios:
`;
        for (let funcionario of this.funcionarios) {
            descricao += funcionario.descrever();
        }
        return descricao;
    }
}
exports.Empresa = Empresa;
