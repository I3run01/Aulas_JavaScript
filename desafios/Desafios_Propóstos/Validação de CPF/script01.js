Val_CPF.prototype.indice = function(string) {
    var lista = string.split('')

    var prod = 0
    var c = 10
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
}

var cpf01 = new Val_CPF("705.484.450-52")
console.log(cpf01.cpf_re2)
console.log(cpf01.indice(cpf01.cpf_re2))

