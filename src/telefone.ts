export class Telefone{
    constructor(
        public ddd: string,
        public numero: string
    ){}

    descrever(): string {
        return `(${this.ddd}) ${this.numero}`
    }
}