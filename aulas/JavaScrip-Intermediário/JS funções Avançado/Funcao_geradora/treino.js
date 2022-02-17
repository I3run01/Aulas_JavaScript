function*geradora(){
    yield 'valor a'
    yield 'valor b'
    yield 'valor c'
}

const g1 = geradora()

console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)
