// Produto
// Camiseta, caneca, lapis
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia
}
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia
}



function Produto(nome, preco, cor) {
    this.nome = nome
    this.preco = preco
    this.cor = cor
}



function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco, cor)
}
Camiseta.prototype = Object.create(Produto.prototype)

const camista = new Camiseta('Rgaeta', 7.5, 'Preta')
camista.aumento(10)
console.log(camista)
