
var agora = new Date()
var hora = agora.getHours()
var horasn = Number(hora)
var minuto = agora.getMinutes()

var horario = window.document.getElementById('horario')
horario.innerHTML = `<br> <br> Agora são ${hora}:${minuto} horas`
var fp = window.document.getElementById('fp')
var foto = window.document.getElementById('foto')

if (hora >= 6 && hora < 12) {
    fp.style.background = '#DBC200'
    foto.src="fotos/manha.png"
            
} if (hora >= 12 && hora < 19) {
    fp.style.background = '#C7943C'
    foto.src="fotos/tarde.png"
} if ((hora >= 19 && hora <24) || (hora >= 0 && hora < 6)) {
    fp.style.background = '#1D007A'
    foto.src="fotos/noite.png"
}
