// Produto
// Camiseta, caneca, lapis
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia
}

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco

}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
    
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

const camisa01 = new Camiseta('regata', 7.5, 'Preta')
camisa01.aumento(10)
console.log(camisa01)

function Caneca(nome, preco, material) {
    Produto.call(this, nome, preco)
    this.material = material
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const caneca01 = new Caneca('xicara', 1.99, 'vidro')
caneca01.aumento(10)
console.log(caneca01)


