function contar() {
    var cont = document.querySelector('#contagem')
    var inicio = Number(document.querySelector('#inicio').value)
    var fim = Number(document.querySelector('#fim').value)
    var passo = Number(document.querySelector('#passo').value)
    var c = inicio
    var comp = '  ' + String.fromCodePoint(0x1F449);
    var texto = String(inicio)
    if ( fim <= 0 || fim < inicio) {
        cont.innerHTML = 'Impossível contar'
    }else {
        if(passo == 0) {
            passo = 1
        }
        for (inicio = 0; c < (fim-1); passo) {
            c = c + passo
            texto = texto + comp +  String(c)
        }
        cont.innerHTML = texto + '  ' + String.fromCodePoint(0x1F3C1);
    }
    
}