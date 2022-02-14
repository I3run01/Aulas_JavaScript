// Declaração de função(function hoisting)
falaOI()
function falaOI() {
    console.log('Oi')
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUMDado = function() {
    console.log('Sou um dado')
}
souUMDado()

//Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow()