function contar() {
    var cont = document.querySelector('#contagem')
    var inicio = Number(document.querySelector('#inicio').value)
    var fim = Number(document.querySelector('#fim').value)
    var passo = Number(document.querySelector('#passo').value)
    var s = inicio + fim + passo

    cont.innerHTML = `${inicio} ${fim} ${passo} ${s}`
}