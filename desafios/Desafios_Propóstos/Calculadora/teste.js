lista = [500, 5, 4]

var divisor = 1
for (var c = 0; c < lista.length; c++) {
    divisor = divisor*lista[c]
}
divisor = divisor/lista[0]
lista = lista[0]/divisor

console.log(lista)