// FIlter, map, reduce
//Filter -> Retorna uma array, com a mesma quantidade de elementos ou menos

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

function callbackFilter(valor){
    return valor > 10
}

const numerosFiltrados = numeros.filter(callbackFilter)
console.log(numerosFiltrados)

// também é possível

const numerosFiltrados2 = numeros.filter(function(valor){
    return valor > 10
})

console.log(numerosFiltrados2)

//Também é possível
const numerosFiltrados3 = numeros.filter(valor => valor > 10)
console.log(numerosFiltrados3)

