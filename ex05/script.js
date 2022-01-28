var listatxt = [''];
var listaval = [''];

function adicionar() {
    var numero = Number(document.querySelector('#numero').value)
    var texto = document.querySelector('#texto')
    var tam = listatxt.length  
    listatxt.push(listatxt[tam-1] + `O Valor ${numero} foi adicionado </br>`)
    listaval.push(numero) 
    texto.innerHTML = listatxt[tam]

    finalizar(listatxt)
    
}


var tam = listatxt.length

function finalizar(listatxt) {
    var resp = document.querySelector('#resp')
    var tam = listatxt.length
    resp.innerHTML = `Ao todo temos ${tam-1} números cadastrados`
}