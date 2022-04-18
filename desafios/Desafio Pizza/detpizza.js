function detpizza(indice) {

    let obj = pizzas[indice]
    document.querySelector('#detpizza').style.display = 'block'
    document.querySelector('#DetPizzaDiv').innerHTML = 
    `<p><img src="${obj.foto}" alt=""></p>` +
    `<h1>${obj.nome}</h1>` + 
    `<p> R$ ${obj.descriao}</p>` +
    `<p> R$ ${obj.preco}</p>` 

}