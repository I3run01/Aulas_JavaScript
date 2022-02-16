// Funcão construtora -> objetos
// Função fábrica -> objetos
// Cosntrutora -> Pessoa (nem)
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.metodo = function() {
        console.log(this.nome + ': sou um médoto')
    }
}
const p1 = new Pessoa('Luiz', 'Otávio')
const p2 = new Pessoa('Maria', 'Oliveira')

p2.metodo()