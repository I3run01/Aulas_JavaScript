// arguments que sustenta todos os argumentos enviados

function funcao(a,b,c) {
    let total = 0
    for (let argumento of arguments) {
        total += argumento
    }
    console.log(total, a, b, c)
}

funcao(1,2,3,4,5,6,7)

// usando acumuladores em function usando arrow function 
const conta = (operador, acumulador, ...numeros) => {
    for(let num of numeros) {
        if(operador === '+') acumulador += num;
        if(operador === '-') acumulador -= num;
        if(operador === '*') acumulador *= num;
        if(operador === '/') acumulador /= num;

    } 
    console.log(acumulador)
}

conta('*', 0, 10, 20, 30)