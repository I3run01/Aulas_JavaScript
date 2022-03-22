//importação
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const valorDoCep = '82720000'
const url = `https://viacep.com.br/ws/${valorDoCep}/json/`;

fetch(url)
    .then(response => response.json())
    .then(dados => atrinuirdados(dados))
    


atrinuirdados = (dados) => {
    const bairro = dados.bairro
    const cidade = dados.localidade

    console.log(bairro)
    console.log(cidade)

}
