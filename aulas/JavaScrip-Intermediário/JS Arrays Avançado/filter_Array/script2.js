//Retorne as pessoas que tem o nome com 5 letras ou mais 
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5)

console.log(pessoasComNomeGrande)

const maior50 = pessoas.filter(obj => obj.idade > 50)
console.log(maior50)

const finala = pessoas.filter(
    obj => obj.nome[obj.nome.length-1 ] == 'a'
)
console.log(finala)