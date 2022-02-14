// IIFE -> Immediately invoked funtion expression

(function(a,b,...c){
    
    var somac = 0
    console.log(c)
    for(var contador of c){
        somac += contador
        console.log(contador, somac)
    }var soma = a+b+somac
    console.log(`A soma é igual a ${soma}`)
    
})(1,2,4, 5,6)