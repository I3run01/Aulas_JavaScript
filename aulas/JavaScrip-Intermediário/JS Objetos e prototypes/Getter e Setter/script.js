//defineProperyy
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        configurable: true, //configurável ou pode deletar
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor != 'number') {
                throw new TypeError('Mensagem')
            }

            estoquePrivado = valor;


        }
    })
}

const p1 = new Produto('Camisa', 20, 3)
p1.estoque = 20
console.log(p1)
console.log(p1.estoque)