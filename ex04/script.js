function tabuada() {
    var numero = Number(document.querySelector('#numero').value)
    var conta = document.querySelector('#conta')
    var c = 1
    var comp = ''
    var texto = ''
    if (numero == String()) {
        window.alert('Número inválido, coloque outro')
    } else {
        for (1; c <= 10 ; c++) {
        comp = String(numero) + ' x ' + String(c) + ' = ' +(numero*c) + '</br>'
        texto = texto + comp
        } conta.innerHTML = texto
    }   
}
    
