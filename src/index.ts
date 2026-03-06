import { Empresa } from "./empresa"
import { Funcionario } from "./funcionario"
import { Telefone } from "./telefone"
import { Endereco } from "./endereco"

let tel1 = new Telefone("11", "999999999")

let end1 = new Endereco(
  100,
  "Rua das Flores",
  "Centro",
  "São Paulo"
)

let func1 = new Funcionario(
  "Pedro",
  "001",
  "11122233344",
  end1,
  tel1
)

let empresa = new Empresa(
  [func1],
  end1,
  "Empresa LTDA",
  "Tech Solutions",
  "12345678000199"
)   

console.log(empresa.descreverEmpresa())