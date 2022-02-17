function produto(a){
    function produto2(b) {
        return a*b
    }
    return produto2
}

const dobro  = produto(2)
const triplo = produto(3)

const dois = dobro(2)
const tres = dobro(3)

console.log(dois)
console.log(tres)