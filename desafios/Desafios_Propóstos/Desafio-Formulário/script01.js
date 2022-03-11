class Usuario {
    constructor() {
        this.nome
        this.sobrenome
        this.cpf
        this.usuario
        this.senha
        this.repetirsenha
    }

    SetNome(valor) {
        if (valor.length<= 0)  return 0
        else {
            this.nome = valor 
            return false
        } 
    }


    
}

function Enviar() {
    const user = new Usuario()

    var nome = document.getElementById('nome')
    var pnome = document.getElementById('Pnome')
    user.SetNome(nome)
    pnome.innerHTML = user.SetNome(nome)

}


