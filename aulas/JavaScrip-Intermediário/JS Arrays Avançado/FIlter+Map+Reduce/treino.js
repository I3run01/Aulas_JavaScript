// filtrar os impares, triplicar, produtoo total

const numeros = [1, 2, 3, 4, 5, 6, 7]

const calculo = numeros.filter((valores) => {
    return (valores % 2 !== 0)
}).map((valores) => {
    return valores*2}).reduce((ac, valores) => {
        return (ac*valores)

}, 1)

console.log(calculo)