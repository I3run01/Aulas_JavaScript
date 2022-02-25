//defineProperyy
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco
    this.estoque = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: false, //mostra a chave
        value: estoque, //valor do estoque
        writable: false, // pode alterar
        configurable: false //configurável ou pode deletar
    })
}

const p1 = new Produto('Camisa', 20, 3)
p1.estoque = 20
console.log(p1)
console.log(Object.keys(p1))