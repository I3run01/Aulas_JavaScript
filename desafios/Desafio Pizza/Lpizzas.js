class Pizza {
    constructor (nome, descriao, preco, foto) {
        this.nome = nome
        this.descriao = descriao
        this.preco = preco
        this.foto = foto
        this.quantidade = 0

    }

    get subtotal() {
        return this.preco * this.quantidade
    }

    get desconto() {
        return this.subtotal * 0.10
    }

    get total() {
        this.subtotal - this.desconto
    }

    AdicionarPizza() {
        this.quantidade ++
    }

    DiminuirPizza() {
        this.quantidade -- 
    }

}

let Mussarela = new Pizza ('Mussarela', 'aksbfua', 20.99, 'jsgfysuh')

Mussarela.AdicionarPizza()
console.log(Mussarela)
console.log(Mussarela.desconto)