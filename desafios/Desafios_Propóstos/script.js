/*Entrada de dados do usuário*/
listauser = []
listaconsole = ['f']


/*
function um() {principal('1')}
function dois() {principal('2')}
function tres() {principal('3')}
function quatro() {principal('4')}
function cinco() {principal('5')}
function seis() {principal('6')}
function sete() {principal('7')}
function oito() {principal('8')}
function nove() {principal('9')}
function zero() {principal('0')}
function ponto() {principal('.')}
function mais() {principal('+')}
function menos() {principal('-')}
function vezes() {principal('*')}
function dividir() {principal('/')}
function abrepa() {principal('(')}
function fechapa() {principal('(')}
function apaga() {
    if (lista.length <= 1){
        this.lista = []
        principal('')
    }
    else {
        this.lista.pop()
        var elemf = lista[lista.length-1]
        this.lista.pop()
        principal(elemf)
    }
    
}
function reseta() {
    this.lista = []
    principal('')
}
*/

principal('2')
principal('1')
principal('+')
principal('3')
principal('+')
principal('(')
principal('5')
principal('+')
principal('8')
principal('*')
principal('3')
principal('-')
principal('9')
principal('0')
principal('*')
principal('(')
principal('7')
principal('/')
principal('6')
principal('+')
principal('4')
principal(')')
principal('+')
principal('7')
principal(')')

/*funções auxiliares*/
function isNumber(a) {
    var contador = 0
    var ver = 'true'
    for (var c of a) {
        if (
            c === '0' ||
            c ===  '1' ||
            c ===  '2' ||
            c ===  '3' ||
            c ===  '4' ||
            c ===  '5' ||
            c ===  '6' ||
            c ===  '7' ||
            c ===  '8' ||
            c ===  '9'
            )
            {
                cont = 0
            }
        else {
            cont = 1
            }
        contador = contador + cont
    } 
    if (contador == 0) {ver = 'true'}
    else {ver = 'false'}
    return  ver
}

function principal(a) {
    this.listauser.push(a)
    this.listaconsole.push(a)

    var tam = listauser.length
    /*
    var texto = document.querySelector('#conta')
    */

    for (var c = 0; c < listaconsole.length; c++ ) {
        if ((isNumber(listaconsole[c]) == 'true')
            &&
            (isNumber(listaconsole[c-1]) == 'true'))
            {
                listaconsole[c] = listaconsole[c-1]+listaconsole[c]
                listaconsole[c-1] = 'nulo'
            }
    }

    var elemnulo = listaconsole.indexOf('nulo')

    while (elemnulo >= 0) {
        listaconsole.splice(elemnulo,1)
        var elemnulo = listaconsole.indexOf('nulo')

    }

    var equacaouser = ''
    for (var c = 0; c < tam; c++) {
        equacaouser = equacaouser+listauser[c]
    }
    

    /*
    texto.innerHTML = equacaouser
    */
}

console.log(listaconsole)
manipulacao(listaconsole)
function manipulacao(listaconsole) {
    var abrePa = listaconsole.indexOf('(')
    
    
    while (abrePa >= 0) {
        listaconsole[abrePa] = '{'
        if ((listaconsole[abrePa-1] == '+') || (listaconsole[abrePa] -1 == '-')) {
            listaconsole.splice(abrePa,0,'1','*')
        }
        
        var abrePa = listaconsole.indexOf('(')
    }

    var fechaPa = listaconsole.indexOf(')')
    while (fechaPa >= 0) {
        listaconsole[fechaPa] = '}'
        
        if ((listaconsole[fechaPa+1] == '+') || (listaconsole[fechaPa] +1 == '-')) {
            listaconsole.splice(fechaPa+1,0,'*','1')
        }
        
        var fechaPa = listaconsole.indexOf(')')
    }
    



    
    var abrecha = listaconsole.indexOf('{')
    while (abrecha>=0){
        if (isNumber(listaconsole[abrecha+1]) == 'true') {
            listaconsole.splice(abrecha+1,0,'+')
        }
        listaconsole[abrecha] = '['
        abrecha = listaconsole.indexOf('{')
    }

    var fechacha = listaconsole.indexOf('}')
    while (fechacha>=0){
        listaconsole[fechacha] = ']'
        fechacha = listaconsole.indexOf('}')
    }

    /*
    var abreco = listaconsole.indexOf('[')
    var abreco1 = abreco + 1
    var contabreco = 1
    var contfechaco = 0
    for (abreco1; contabreco != contfechaco; abreco1++) {
        if (listaconsole[abreco1] == '[') {
            var abc = 1
        } 
        else { var fcc = 1}
        contabreco = contabreco + abc
        contfechaco = contfechaco + fcc
    }
    */ 
    console.log(listaconsole) 
}



