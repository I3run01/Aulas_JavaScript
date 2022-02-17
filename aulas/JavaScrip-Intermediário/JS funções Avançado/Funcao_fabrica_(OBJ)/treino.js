function carro(nome, fabricacao, uso) {
    return {
        nome: nome,
        fabricacao: fabricacao,
        uso: uso,
        get desgaste() {
            if (this.uso > 20) {return 'velho'}
            else{return 'novo'}
        }
    }
}

const celta = carro('celta', '2006', 30)
const jetta = carro('jetta', '2020', 2)

console.log(celta)
console.log(celta.desgaste)

console.log(jetta)
console.log(jetta.desgaste)