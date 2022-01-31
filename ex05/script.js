var listatxt = [''];
var listaval = [''];

function notinlist(num, list) {
    sit = 'true'
    for (var c = 0; c <= list.length; c++) {
         if (num == list[c]) {
             sit = 'false'
         }
    } return sit
}

function adicionar() {
    var numeroS = document.querySelector('#numero').value
    var numero = Number(numeroS)
    var texto = document.querySelector('#texto')
    var resp = document.querySelector('#resp')
    var tam = listatxt.length
    var sit = notinlist(numero, listaval)

    if (numero >= 1 && numero <= 100 && sit == 'true') {
        listatxt.push(listatxt[tam-1] + `O Valor ${numero} foi adicionado </br>`)
        listaval.push(numero) 
    
        var maior = 0
        var menor = 0
        var soma = 0
        var media = 0
    
        texto.innerHTML = listatxt[tam]
    
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
        
        resp.innerHTML = `
        Ao todo temos ${tam} números cadastrados. </br></br>
        O maior número informado foi o ${maior}.</br></br>
        O menor número informado foi o ${menor}.</br></br>
        A soma de todos os valores é igual a ${soma}.</br></br>
        A média de todos os valores é igual a ${media}.
        `
    }

    else {
        window.alert('Número inválido!')
    }
}function finalizar() {
    var respdiv = document.getElementById('respdiv')

    
    respdiv.style.display = 'block'
}

