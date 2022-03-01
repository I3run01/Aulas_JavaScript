function pessoa(nome, sobrenome) {
    return {
        nome:nome,
        sobrenome,sobrenome,
        get nomeCompleto() {
            return this.nome + ' ' + this.sobrenome
        }
    }
}

pessoa.prototype.nomeCompleto = () => {
    return this.nome + ' ' + this.sobrenome
 }

Andre = pessoa('Andre', 'Silva')
console.dir(Andre.nomeCompleto)
