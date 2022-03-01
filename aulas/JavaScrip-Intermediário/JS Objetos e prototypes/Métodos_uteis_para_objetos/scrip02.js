const produto = {nome: 'produto', preco: 1.8}
const caneca = Object.assign({}, produto, {material: 'porcelana'})

 caneca.nome = 'Outro nome'
 caneca.preco = 2.5
 console.log(produto)