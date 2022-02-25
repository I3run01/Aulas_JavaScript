function pessoa(nome, idade) {
    return {
        nome: nome,
        idade: idade,
    }
}

const p1 = pessoa('Rui', 80)
const p2 = pessoa('Ana', 20)

console.log(p1.nome, p2.nome)

function Pessoa02(nome, idade) {
    this.nome = nome,
    this.idade = idade
}

const p3 = new Pessoa02('José', 33)
console.log(p3.nome)