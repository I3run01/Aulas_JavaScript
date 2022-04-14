document.addEventListener('click', valor)

function valor() {
    let valor = document.querySelector('.btn').value

    let text = document.querySelector('#text').innerHTML = valor
}