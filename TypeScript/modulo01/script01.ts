let numero1 = document.querySelector('#numero1') as HTMLInputElement
let numero2 = document.querySelector('#numero2') as HTMLInputElement
let botao = document.querySelector('calcular')
let res = document.querySelector('#resultado')

function calcular(n1, n2) {
    return n1 + n2
}

botao.addEventListener('click', function() {
    res.innerHTML = calcular(numero1.value, numero2.value)
})