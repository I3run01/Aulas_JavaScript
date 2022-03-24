function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(porcentual) {
    this.preco = this.preco * (1-porcentual/100) 
}

Produto.prototype.acrescimo = function(porcentual) {
    this.preco = this.preco * (1 + porcentual/100)
}

const p1 = new Produto('Camisa', 50)

const p2 = {
    nome: 'Caneca',
    preco: 15
}
Object.setPrototypeOf(p2,  Produto.prototype )

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 100
    },

    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
})


p1.desconto(100)
p2 .acrescimo(100)
p3.acrescimo(50)
console.log(p1)
console.log(p2)
console.log(p3)