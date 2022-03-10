class CPF {
    constructor(cpf) {
        this.cpf = cpf.replace(/\D+/g,'');
        this.cpf09 = () => this.cpf.slice(0,9)
        this.cpf10 = () => this.cpf.slice(0,10)
        this.termo01 = () => this.validacao(this.cpf09())
        this.termo02 = () => this.validacao(this.cpf10())
        this.termoRes = String(this.termo01()) +  String(this.termo02())
        this.DoisUltNumeros = () => this.cpf.slice(9,11)

        this.CPFvalido = () => this.validacaoCPF(this.termoRes,this.DoisUltNumeros())

    }

    validacaoCPF(termoRes, DoisUltNumeros) {
        if (termoRes === DoisUltNumeros ) return true
        else return false
    }

    validacao(valor) {
        var vetor = valor.split('')
        var contador = vetor.length + 2
        
        var conta = vetor.map((valor) => {
            contador = --contador
            return valor*contador
        }).reduce((ac, valor) => {
            return valor + ac
        }, 0)

        var indice = () => {
            var cont = 11 - (conta % 11)

            if(cont > 9 ) return 0
            else return cont
        }

        return indice()
    }
}

cpf01 = new CPF("705.484.450-52")
console.log(cpf01.CPFvalido())
