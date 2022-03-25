let nome = 'Bonieky Lacerda Leal'

console.log(nome.length) //->Tamanho da string

console.log(nome.indexOf('Lacerda')) //Se tem Lacerda em nome - > Se não achar, retorna -1

//Condicional se tem ou não Lacerda na String
if(nome.indexOf('ghef') > -1 ) {
    console.log('Achou')

}

else  console.log('Não achou')