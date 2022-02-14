// Factory function (Função fábrica)
function criaPessoa(nome, sobrenome,altura,peso) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        altura: altura,
        peso: peso,

        // getter

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`              
        },

        get imc() {
            const indice = this.peso / (this.altura**2)
            return indice.toFixed(2)
        },
        
        fala(assunto) {
            return `${nome} está ${assunto}` 
        },

    }
}


const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80)
const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 42)
const Bruno = criaPessoa('Bruno', 'Alves', 1.87, 78.9)


console.log(p1)
console.log(p1.fala('falando sobre JS'))
console.log(p1.imc)
console.log(p2.imc)
console.log(p1.nomeCompleto)
console.log('')
console.log('Respostas para Bruno')
console.log('')
console.log(Bruno.imc)
console.log(Bruno.altura)


