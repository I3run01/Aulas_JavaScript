listaconsole = ['f', '7','*','[','+','5','*','[','+','2','+','3',']',']']

console.log(listaconsole)
var abrecof = listaconsole.indexOf('[')
while (abrecof >= 0) {
    var abreco = listaconsole.indexOf('[')
    var abreco1 = abreco + 1
    var contabreco = 1
    var contfechaco = 0
    console.log(abreco1)
    for (abreco1; contabreco != contfechaco; abreco1++) {
        
        if(listaconsole[abreco1] == '+' || listaconsole[abreco1] == '-') {
            listaconsole.splice(abreco1+1, 0, listaconsole[abrecof-2],listaconsole[abrecof-1])
        }

        if (listaconsole[abreco1] == '[') {
            var abc = 1
        } 
        else { var abc = 0}

        if(listaconsole[abreco1] == ']') {
            var fcc = 1
        }
        else { var fcc = 0}

        contabreco = contabreco + abc
        contfechaco = contfechaco + fcc
        
    }    
    listaconsole[abrecof] = '('
    listaconsole[abreco1-1] = ')'
    console.log(abreco1)

    listaconsole.splice(abrecof-2,1)
    listaconsole.splice(abrecof-2,1)

    
    abrecof = listaconsole.indexOf('[')

}
    


console.log(listaconsole)