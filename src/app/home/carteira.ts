

export class Carteira{
    id: number
    valor: number
    caixa: string
    descricao: string
    data_valor: string
    quantidade: number
    nome: string
    telefone: string
    
    constructor(id?: number, valor?: number, caixa?:string, descricao?: string, data_valor?: string, quantidade?: number, nome?: string, telefone?: string){
        this.id = id
        this.valor = valor
        this.caixa = caixa
        this.descricao = descricao
        this.data_valor = data_valor
        this.quantidade = quantidade
        this.nome = nome
        this.telefone = telefone
    }
}