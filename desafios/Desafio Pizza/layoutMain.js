let main = document.querySelector('#container')
let texto = ''


for (let i of pizzas ) {
    texto += '<div>'
    texto += `<div><img src="${i.foto}" alt="">`
    texto += '<button> + </button></div>'
    texto += `<p> R$ ${i.preco}</p>`
    texto += `<h1> ${i.nome}</h1>`
    texto += `<p>${i.descriao}<p>`
    texto += '</div>'
}

main.innerHTML = texto