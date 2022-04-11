let main = document.querySelector('#container')
let texto = ''

for (let i of pizzas ) {
    texto += '<div>'
    texto += i.foto + '<br>'
    texto += i.preco + '<br>'
    texto += i.nome + '<br>'
    texto += i.descriao + '<br>'
    texto += '</div>'
}

main.innerHTML = texto