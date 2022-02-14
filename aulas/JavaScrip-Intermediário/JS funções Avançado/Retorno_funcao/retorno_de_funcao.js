// function simples

var duplica = (n) => {
    return n*2
}

var triplica = (n) => {
    return n*3
}

var quadriplpica = (n) => {
    return n*4
}

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplpica(2))

//nova formatação
function criamulti(multiplicador) {
    function multiplicacao(n) {
        return n*multiplicador
    }
    return multiplicacao
}

var duplica = criamulti(2)
var triplica = criamulti(3)
var quadriplpica = criamulti(4)

console.log('novas variáveis')
console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplpica(2))

//novo exemplo
function elevacao(expoente) {
    return function(indice) {
        return indice**expoente
    }
}


var dois = elevacao(2)
var tres = elevacao(3)

console.log('Novos parametros')
console.log(dois(3))
console.log(tres(3))

//novo exemplo
function expressao(frase) {
    return function (nome) {
        return  frase + ' ' + nome
    }
}

const tdbem = expressao('tudo bem, ')
const ola = expressao('olá, ')

console.log('nova expressão')
console.log(tdbem('Bruno'))
console.log(ola('Gil'))
