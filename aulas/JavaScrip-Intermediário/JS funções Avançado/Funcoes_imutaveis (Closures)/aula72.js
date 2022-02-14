function retornafuncao(nome) {
    return function() {
        return nome
    }
}

const funcao1 = retornafuncao('luiz');
const funcao2 = retornafuncao('Pedro')

console.log(funcao1())
console.log(funcao2())

