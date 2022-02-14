function ex1(callback) {
    setTimeout(function() {
        console.log('primeiro')
        if (callback) callback()
    }, 5000)  
}

var ex2 = (message ,callback) => {
    setTimeout( function() {
        console.log(message)
    if (callback) callback()
    }, 8000)
    
}

function ex3(callback) {
    console.log('terceiro')
    if (callback) callback()
}

/*
ex1()
ex2()
ex3()
*/

//Callback
ex1(()=>ex2('segundo', ()=> ex3() ))
