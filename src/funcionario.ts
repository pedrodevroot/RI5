import { Telefone } from "./telefone"
import { Endereco } from "./endereco"   

export class Funcionario {
    constructor(
    public nome: string,
    public matricula: string,
    public cpf: string,
    public endereco: Endereco,
    public telefone: Telefone
  ) {}

  descrever(): string {
    return `
Nome: ${this.nome}
Matricula: ${this.matricula}
CPF: ${this.cpf}
Telefone: ${this.telefone.descrever()}
${this.endereco.descrever()}
`
  }
}