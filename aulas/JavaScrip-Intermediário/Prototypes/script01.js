function Pessoa(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome
}

const pessoa01 = new Pessoa('Luiz', 'O.')
const pessoa02 = new Pessoa('Maria', 'A.')

console.log(pessoa01.nomeCompleto)