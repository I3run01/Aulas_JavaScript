let main = document.querySelector('#container')
let texto = ''

let img = document.createElement('img')
for (let i of pizzas ) {
    texto += '<div>'
    texto += `<img src="${i.foto}" alt=""> <br>`
    texto += i.preco + '<br>'
    texto += i.nome + '<br>'
    texto += i.descriao + '<br>'
    texto += '</div>'
}

main.innerHTML = texto