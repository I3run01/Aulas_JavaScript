//             -5         -4       -3         -2       -1
//              0          1        2          3        4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia']

//nomes.splice(indice, delete, elem1, elem2)
const removidos = nomes.splice(3, 2)
console.log(nomes, removidos)

//Maior número possível
maior = Number.MAX_VALUE

// Adicionr elementos
const acrescentados = nomes.splice(3, 0, 'Carlor')
console.log(nomes)

//Substituir
nomes.splice(2, 2, "Luiz", 'Otávio')
console.log(nomes)

//Deleter o último elemento
nomes.splice(-1, 1)
console.log(nomes)

//Deletar o primiero elemento
nomes.splice(0, 1)
console.log(nomes)

