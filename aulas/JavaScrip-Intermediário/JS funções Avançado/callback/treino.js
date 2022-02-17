function ex1(text, callback) {
    setTimeout(function() {
        console.log(text)
        if (callback) callback()
    },8000) 
}

function ex2(text, callback) {
    setTimeout(function() {
        console.log(text)
        if (callback) callback()
    },2000)
    
}

function ex3(text, callback) {
    setTimeout(function() {
        console.log(text)
        if (callback) callback()
        },5000)
}


//linha de callback
ex1('texto 01',() => ex2('texto 02', () => ex3('texto 03' )) )