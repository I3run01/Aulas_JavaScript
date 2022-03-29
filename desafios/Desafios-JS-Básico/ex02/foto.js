function criidade() {
    var nasc = window.document.getElementById('nasci')  
    var descIdade = window.document.getElementById('descidade')

    var nascnumber = Number(nasc.value)
    var agora = new Date()
    var ano = agora.getFullYear()
    var idade = ano - nascnumber
    var foto = document.querySelector('#foto')
    var height = window.document.getElementById('principal')

    if (idade < 0) {
        descIdade.innerHTML = 'Idade inválida!'
        foto.src = ""
        height.style.height = '150px'
    }

    else {
        descIdade.innerHTML = ''
        fotoidade(idade, descIdade)
        
    }

}

function fotoidade(idade, descIdade) {
    var height = window.document.getElementById('principal')
    var OPCAO = document.querySelector('input[name="OP"]:checked').value
    var foto = document.querySelector('#foto')

    height.style.height = '400px'
    
    if (OPCAO == 'masc') {
       if (idade < 5) {
        descIdade.innerHTML = 'Você é um bebê'
        foto.src = "fotos/bebem.png"
       } if (idade >= 5 && idade < 12) {
        descIdade.innerHTML = 'Você é uma criança'
        foto.src = "fotos/criancam.png"
       } if (idade >= 12 && idade < 18) {
        descIdade.innerHTML = 'Você é um adolecente'
        foto.src = "fotos/adolescentem.png"
       } if (idade >= 18 && idade < 30) {
        descIdade.innerHTML = 'Você é um jovem'
        foto.src = "fotos/jovemm.png"
       } if (idade >= 30 && idade < 60) {
        descIdade.innerHTML = 'Você é um adulto'
        foto.src = "fotos/adultom.png"
       } if (idade >= 60 && idade < 150) {
        descIdade.innerHTML = 'Você é um idoso'
        foto.src = "fotos/idosom.png"
       } if(idade > 150){
        descIdade.innerHTML = 'Idade inválida!'
        foto.src = ""
        height.style.height = '150px'
       }
    } else {
        if (idade < 5) {
            descIdade.innerHTML = 'Você é um bebê'
            foto.src = "fotos/bebef.png"
           } if (idade >= 5 && idade < 12) {
            descIdade.innerHTML = 'Você é uma criança'
            foto.src = "fotos/criancaf.png"
           } if (idade >= 12 && idade < 18) {
            descIdade.innerHTML = 'Você é uma adolecente'
            foto.src = "fotos/adolescentef.png"
           } if (idade >= 18 && idade < 30) {
            descIdade.innerHTML = 'Você é uma jovem'
            foto.src = "fotos/jovemf.png"
           } if (idade >= 30 && idade < 60) {
            descIdade.innerHTML = 'Você é uma adulta'
            foto.src = "fotos/adultof.png"
           } if (idade >= 60 && idade < 150) {
            descIdade.innerHTML = 'Você é uma idosa'
            foto.src = "fotos/idosof.png"
           } if(idade > 150){
            descIdade.innerHTML = 'Idade inválida!'
            foto.src = ""
            height.style.height = '150px'
           }
    }
}