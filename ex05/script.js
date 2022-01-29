var listatxt = [''];
var listaval = [''];

function adicionar() {
    var numero = Number(document.querySelector('#numero').value)
    var texto = document.querySelector('#texto')
    var resp = document.querySelector('#resp')
    var respdiv = document.querySelector('#respdiv')
    var tam = listatxt.length  
    listatxt.push(listatxt[tam-1] + `O Valor ${numero} foi adicionado </br>`)
    listaval.push(numero) 

    var maior = 0
    var menor = 0
    var soma = 0
    var media = 0

    for(var c = 0; c <= tam; c++ ) {
        if (listaval[c] < maior) {
            maior = maior
        }else {
            maior = listaval[c]
        }if(menor == 0) {
            menor = listaval[c]
        }else {
            if (listaval[c] < menor) {
                menor = listaval[c]
            }else {
                menor = menor
            }     
        }soma = Number(soma) + Number(listaval[c])
    }media = soma/tam

    texto.innerHTML = listatxt[tam]
    
    resp.innerHTML = `
    Ao todo temos ${tam} números cadastrados. </br></br>
    O maior número informado foi o ${maior}.</br></br>
    O menor número informado foi o ${menor}.</br></br>
    A soma de todos os valores é igual a ${soma}.</br></br>
    A média de todos os valores é igual a ${media}.
    `  
}

function finalizar() {
    var respdiv = document.getElementById('respdiv')

    
    respdiv.style.display = 'block'
}
