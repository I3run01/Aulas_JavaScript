// Retorne a pessoa mais velha 

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const PessoaMaisVelha = pessoas.reduce(((acumulador, obj) => {
    if (obj.idade > acumulador) {
        acumulador = obj.idade
    }
    return acumulador
}), 0)

console.log(PessoaMaisVelha)