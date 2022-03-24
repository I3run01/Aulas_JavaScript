//Function pai
function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value:sobrenome}
    })
}

//prototype
const falar = {
    falar() {
        console.log(`${this.nome} está falando`)
    }
}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`)
    }
}

//ligação de prototype
const pessoaPrototype = {...falar, ...comer}


const p1 = criaPessoa('José', 'Arlindo')
p1.comer()