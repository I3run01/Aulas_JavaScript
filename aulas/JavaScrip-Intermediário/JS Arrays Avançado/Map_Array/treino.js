const nascimento = [
    {nome: 'Maira', nascimento: '1998'},
    {nome: 'Julia', nascimento: '2020'},
    {nome: 'André', nascimento: '2002'},
    {nome: 'Matheus', nascimento: '1997'},
    {nome: 'José', nascimento: '2005'},
    {nome: 'Carlos', nascimento: '2013'},
]

const idade = nascimento.map((obj) => {
    return {nome: obj.nome, nascimento: obj.nascimento, idade:(2022-obj.nascimento)}
})

console.log(idade)