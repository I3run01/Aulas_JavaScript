let main = document.querySelector('#container')
let texto = ''

let c = 0
for (let i of pizzas ) {
    texto += '<div>'
    texto += `<div><img src="${i.foto}" alt="">`
    texto += `<button value = "${c}" onclick = "addPizza()" class = "btn"> + </button></div>`
    texto += `<p> R$ ${i.preco}</p>`
    texto += `<h1> ${i.nome}</h1>`
    texto += `<h1> ${i.quantidade}</h1>`
    texto += `<p>${i.descriao}<p>`
    texto += '</div>'
    c++
}

main.innerHTML = texto

