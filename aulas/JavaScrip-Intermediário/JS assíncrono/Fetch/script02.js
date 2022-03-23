//importação

axios('pessoas.json')
    .then(response => atribuirdados(response.data))


function atribuirdados(data) {
    console.log(data.bairro)
}