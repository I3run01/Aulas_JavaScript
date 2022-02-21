//Para cada elemento:
    //Retorne apenas uma string com o nome da pessoa
    //Remova apenas a chave "nome" do objeto
    //Adicione uma chave id em cada objeto (id)
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const nomes = pessoas.map(obj => obj.nome)
console.log(nomes)

const semNome = pessoas.map(obj => ({idade:obj.idade}))
console.log(semNome)

const id = pessoas.map((obj, indice) => ({
    id:indice,
    nome:obj.nome,
    idade:obj.idade
}))
console.log(id)
console.log(pessoas) 