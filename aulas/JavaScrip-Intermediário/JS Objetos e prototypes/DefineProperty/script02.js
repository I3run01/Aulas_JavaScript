//defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco
    this.estoque = estoque

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable:true,
            configurable:true
        },
        preco: {
            enumerable: true,
            value: nome,
            writable:true,
            configurable:true
        },
    })
}

const p1 = new Produto('Camisa', 20, 3)
p1.estoque = 20
console.log(p1)
console.log(Object.keys(p1))

