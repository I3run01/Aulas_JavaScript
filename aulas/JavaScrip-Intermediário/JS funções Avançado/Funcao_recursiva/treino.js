function recursiva(a) {
    var a = ++a
    console.log(a)
    if (a == 10) return
    else{recursiva(a)}
}

recursiva(2)