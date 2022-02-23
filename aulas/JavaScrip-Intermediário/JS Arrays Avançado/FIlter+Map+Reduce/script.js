// Retorna a noma de todos os pares 
// Filtrar os pares 
// Dobrar os valores
// Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosPares = numeros.filter((valores) => { 
    return valores % 2 === 0
}).map((valores) => {
    return valores*2
}).reduce((acumlador, valores) => {
    return acumlador + valores
})

console.log(numerosPares)