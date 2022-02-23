// Some todos os números (reduce)
// Retorne um array com os pares(Filter)
// Retorne um array com o dobro dos valores (map)
//

const numeros = [2, 3, 7, 11, 14]
const total = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 !== 0) {
        acumulador = acumulador + valor
    }
    return acumulador
}, 0)

console.log(total)


