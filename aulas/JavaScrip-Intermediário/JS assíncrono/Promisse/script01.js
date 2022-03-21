function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (tempo > 2000) reject()
            console.log(msg)
            resolve()
           
    }, tempo) 
    
    })
}

esperaAi('Frase 1', 800)
.then(() => esperaAi('Frase 2', 600))
.then(() => esperaAi('Frase 3', 400))
.catch(()=> {
    console.log('ERRO')
})