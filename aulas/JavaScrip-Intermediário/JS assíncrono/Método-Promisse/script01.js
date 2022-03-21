function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject(false)
            return
        }
        setTimeout(() => {
            resolve(msg  + ' Promise')
           
    }, tempo) 
    
    })
}

const promises = [
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
]

Promise.all(promises)
.then(function(valor) {console.log(valor)})
.catch(function(erro){console.log(erro)})



Promise.race(promises)
.then((valor)=> {console.log(valor)})

