const produto = {nome: 'Produto', preco: 1.8, material: 'porcelana'}

for(let valor of Object.entries(produto)) {
    console.log(valor)
}