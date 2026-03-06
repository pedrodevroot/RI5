export class Endereco {
    constructor(
        public numero: number,
        public rua: string,
        public bairro: string,
        public cidade: string
    ){}

    descrever(): string {
        return `Rua: ${this.rua} Bairro: ${this.bairro}  Cidade: ${this.cidade} Número: ${this.numero}`
    }
}