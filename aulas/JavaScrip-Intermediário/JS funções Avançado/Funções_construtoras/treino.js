function Construtora(nome, idade){
    this.nome = nome
    this.idade = idade
    this.situacao = () => {
        if (this.idade > 60) return 'velho'
        else { return 'novo'}
    }
}

const Pedro = new Construtora('Pedro', 70)
const Ana = new Construtora('Ana' , 20)

console.log(Pedro.situacao())
console.log(Ana.situacao())