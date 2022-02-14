function criaPessoa(nome, sobrenome,altura,peso) {
        return{
            nome: nome,
            sobrenome: sobrenome,
            altura: altura,
            peso: peso,
            set nomeCompleto(valor) {
                valor = valor.split(' ')
                //shift retorna o primeiro item do array e depois retorna o valor
                this.nome = valor.shift()
                this.sobrenome = valor.join(' ')
                console.log(valor)
                },
        }
}

const p1 = criaPessoa('generico', 'generico', 1.8, 80)

p1.nomeCompleto = 'Luiz Otávio Miranda'
console.log(p1.nome)
console.log(p1.sobrenome)

