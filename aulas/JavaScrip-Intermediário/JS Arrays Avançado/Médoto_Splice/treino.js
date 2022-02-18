const numeros = [1, 2 , 4]

//Acrescestando o 5 e 6
numeros.splice(numeros.length, 0, 5, 6)
console.log(numeros)

//deletando o número 6
numeros.splice(-1,1)
console.log(numeros)

//colocando uma string entre 1 e 2
numeros.splice(1,0, 'Entre 1 e 2')
console.log(numeros)

//Substitudo do 4 e antes do 5
numeros.splice(3, 1, 'substitudo do 4', 'antes do 5')
console.log(numeros)