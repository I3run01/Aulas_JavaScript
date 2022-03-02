function pessoa(nome, sobrenome) {
    return {
        nome:nome,
        sobrenome:sobrenome,
    }
}

pessoa.prototype.nomeCompleto = 'André Silva'

Andre = pessoa('Andre', 'Silva')
console.log(Andre.nomeCompleto)

console.log(Andre.nome)