import { Funcionario } from "./funcionario"
import { Endereco } from "./endereco"

export class Empresa{
    constructor(
    public funcionarios: Funcionario[],
    public endereco: Endereco,
    public razaoSocial: string,
    public nomeFantasia: string,
    public cnpj: string
  ) {}

  descreverEmpresa(): string {

    let descricao = `
Empresa: ${this.nomeFantasia}
Razão Social: ${this.razaoSocial}
CNPJ: ${this.cnpj}
Endereco: ${this.endereco.descrever()}

Funcionarios:
`

    for (let funcionario of this.funcionarios) {
      descricao += funcionario.descrever()
    }

    return descricao
  }
}