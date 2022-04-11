class Pizza {
    constructor (nome, descriao, preco, foto) {
        this.nome = nome
        this.descriao = descriao
        this.preco = preco
        this.foto = foto
        this.quantidade = 0

    }


    AdicionarPizza() {
        this.quantidade ++
    }

    DiminuirPizza() {
        this.quantidade -- 
    }

}

let pizzas = [
    new Pizza('Mussarela', 'la jcvaghc ghvadmnjh ujVDJA F', 20.99, 'HJZVDFG'),
    new Pizza ('Calabresa', 'hsagfihdfb', 18.99, 'afafa')
]

