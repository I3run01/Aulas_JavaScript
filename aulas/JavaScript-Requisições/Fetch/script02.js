function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((resultado)=>{
            return resultado.json()
        })
        .then((json)=> {
            console.log(json)
            montarBlog(json)
        })
        .catch(()=>{
            console.log('Deu problema')
        })
}

function montarBlog(lista) {
    let html = ''

    for( let i in lista) {
        html += `<h3> ${lista[i].title} </h3>`
        html += lista[i].body + '<br/>'
        html += '<hr/>'
    }

    document.querySelector('#post02').innerHTML = html
}