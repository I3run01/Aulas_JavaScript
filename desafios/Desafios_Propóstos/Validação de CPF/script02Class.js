class CPF {
    constructor() {
        this.cpf
    }

    SetCPF(cpf) {
        const NovoCPF = cpf.replace(/\D/g,'');
        const cpf09 = () => NovoCPF.slice(0,9)
        const cpf10 = () => NovoCPF.slice(0,10)
        const termo01 = () => this.validacao(cpf09())
        const termo02 = () => this.validacao(cpf10())
        const termoRes = String(termo01()) +  String(termo02())
        const DoisUltNumeros = () => NovoCPF.slice(9,11)

        const CPFvalido = () => this.validacaoCPF(termoRes,DoisUltNumeros())

        if(CPFvalido() == true) this.cpf = NovoCPF
        else this.cpf = undefined
        

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

cpf01 = new CPF()
cpf01.SetCPF("705.484.450-52")
console.log(cpf01.cpf)
