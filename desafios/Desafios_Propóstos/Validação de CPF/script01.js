function termoFunc(string) {
    var lista = string.split('')

    var prod = 0
    var c = lista.length + 1
    for (var i of lista ) {
        prod = prod + (Number(i)*c)
        c--

    }

    var termo = 11 - (prod % 11) 
    
    if (termo > 9) return 0
    else return termo
}
   

function Val_CPF(cpf) {
    this.cpf = cpf.replace(/\D+/g, '')
    this.cpf_re2 = cpf.replace(/\D+/g, '').substring(0,9)
    this.cpf_re1 = cpf.replace(/\D+/g, '').substring(0,10)
    this.cpf_ut = cpf.replace(/\D+/g, '').substring(9,11)
    
}


Val_CPF.prototype.indice01 = function() {
    return termoFunc(this.cpf_re2)
}

Val_CPF.prototype.indice02 = function() {
    return termoFunc(this.cpf_re1)
}



function validacao(obj) {
    if (String(obj.indice01()) + String(obj.indice02())  === obj.cpf_ut ) {
        console.log("CPF válido")
    }
    
    else {
        console.log("CPF inválido")
    }
}

var cpf01 = new Val_CPF("705.484.450-52")
var cpf02 = new Val_CPF("070.987.720-03")

validacao(cpf01)
validacao(cpf02)



