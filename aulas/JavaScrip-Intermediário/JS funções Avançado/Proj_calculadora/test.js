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
