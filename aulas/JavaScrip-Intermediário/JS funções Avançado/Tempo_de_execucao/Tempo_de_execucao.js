function ex1(callback) {
    setTimeout(function() {
        console.log('primeiro')
        if (callback) callback()
    }, 5000)  
}

