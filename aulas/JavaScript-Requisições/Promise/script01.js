function pegarTemperatura() {
    return new Promise( (resolve, reject)=>{
        console.log('Pegando temperatura...')

        setTimeout(() => {
            resolve('40 na sombra')
        }, 2000);
    })
}

console.log('Código Antes')
let temp = pegarTemperatura()
console.log('Código durante')
temp.then((resultado)=>{
    console.log(resultado)
})
temp.catch((erro)=>{
    console.log('Deu erro')
})
console.log('código depois')