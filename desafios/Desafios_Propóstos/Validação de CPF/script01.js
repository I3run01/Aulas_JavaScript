
Val_CPF.prototype.limpo = function(cpf) {
    this.cpf = this.cpf.replace(/\D+/g, '')
}



function Val_CPF(cpf) {
    this.cpf = cpf
}


var cpf01 = new Val_CPF("705.484.450-52")
cpf01.limpo(cpf01.cpf)

console.log(cpf01.cpf)

