class CPF {
    constructor() {
        this.cpf
    }

    SetCPF(cpf) {
        const NovoCPF = cpf.replace(/\D+/g,'');
        const cpf09 = () => NovoCPF.slice(0,9)
        const cpf10 = () => NovoCPF.slice(0,10)
        const termo01 = () => this.validacao(cpf09())
        const termo02 = () => this.validacao(cpf10())
        const termoRes = String(termo01()) +  String(termo02())
        const DoisUltNumeros = () => NovoCPF.slice(9,11)

        const CPFvalido = () => this.validacaoCPF(termoRes,DoisUltNumeros())

        if(CPFvalido() == true) this.cpf = NovoCPF
        
    }

    GetCPF() {
        if(this.cpf == undefined) return 'nd'
        else return this.cpf
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

class Usuario extends CPF {
    constructor(cpf) {
        super(cpf)
        this.nome
        this.sobrenome
        this.usuario
        this.senha

    }

    SePreenchido(valor) {
        if (valor.length <= 0 )  return false
        else return true     
    }

    SetNome(valor) {
        if (this.SePreenchido(valor) == true) this.nome = valor
    }

    GetNome() {
        if(this.nome == undefined) return 'nd'
        else return this.nome
    }

    SetSobrenome(valor) {
        if (this.SePreenchido(valor) == true) this.sobrenome = valor
    }

    GetSobrenome() {
        if(this.sobrenome == undefined) return 'nd'
        else return this.sobrenome
    }

    SetUsuario(valor) {
        const VetorUsuario = valor.split('')
        const regex = /\W|_/;
        if (regex.test(valor) == false && this.SePreenchido(valor) == true) this.usuario = valor   
    }

    GetUsuario() {
        if(this.usuario == undefined) return 'nd'
        else return this.usuario
    }

    SetSenha(senha01, senha02) {
        if(senha01 == senha02 && senha01.length > 6 && senha01.length < 12 ) this.senha = senha01
    }

    GetSenha() {
        if(this.senha == undefined) return 'nd'
        else return this.senha
    }
}



function Enviar() {

    const user = new Usuario()

    
    var nome = document.getElementById('nome')
    var Sobrenome = document.getElementById('Sobrenome')
    var cpf = document.getElementById('cpf')
    var usuario = document.getElementById('usuario')
    var senha = document.getElementById('senha')
    var RepetirSenha = document.getElementById('RepetirSenha')

    var pnome = document.getElementById('Pnome')
    var PsobreSobrenome = document.getElementById('Psobrenome')
    var Pcpf = document.getElementById('Pcpf')
    var Pusuario = document.getElementById('Pusuario')
    var Psenha = document.getElementById('Psenha')
    var Prepetirsenha = document.getElementById('Prepetirsenha')

    pnome.innerHTML = nome.value
    PsobreSobrenome.innerHTML = Sobrenome.value
    Pcpf.innerHTML = cpf.value
    Pusuario.innerHTML = usuario.value
    Psenha.innerHTML = senha.value
    Prepetirsenha.innerHTML = RepetirSenha.value

    user.SetNome(nome)
    user.SetSobrenome(Sobrenome)
    user.SetCPF(cpf)
    user.SetUsuario(usuario)
    user.SetSenha(senha, RepetirSenha)

    user.GetNome()
    user.GetSobrenome()
    user.GetCPF()
    user.GetUsuario()
    user.GetSenha()
}




