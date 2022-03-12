class Usuario {
    constructor() {
        this.nome = 'undefined'
        this.sobrenome = 'undefined'
        this.cpf = 'undefined'
        this.usuario = 'undefined'
        this.senha = 'undefined'
        this.repetirsenha = 'undefined'
    }

    SetNome(valor) {
        if (valor.length <= 0 )  return false
        else {
            this.nome = valor 
            return true
        } 
    }


}

function Enviar() {
    const user = new Usuario()

    
    var nome = document.getElementById('nome')
    var pnome = document.getElementById('Pnome')
    user.SetNome(nome)

    pnome.innerHTML = user.SetNome(nome.value)
    

}




