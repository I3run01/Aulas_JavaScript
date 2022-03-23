function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (tempo > 2000) reject(msg + ' Rejeitado')
            resolve(msg + ' Passei na Promise')
           
    }, tempo) 
    
    })
}

/*
esperaAi('Fase 1', 800)
.then(valor => {
    console.log(valor)
    return esperaAi('Fase 2', 200)
})
.then(fase => {
    console.log(fase)
    return esperaAi('Fase 3', 400)
})
.then(fase3 => {
    console.log(fase3)
})
.catch(e => console.log(e))
*/


async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', 300)
        console.log(fase1)

        const fase2 = await esperaAi('Fase 2', 300)
        console.log(fase2)

        const fase3 = await esperaAi('fase 3', 200)
        console.log(fase3)

        console.log('Terminamos na fase', fase3)
    } 

    catch(e) {
        console.log(e)
    }
}

executa()


//pending -> pendente
//fullfilled - resolvida
//
