const produtos = [
    {produto:'arroz', preco:2.15},
    {produto:'feijão', preco:3.14},
    {produto:'macarrão', preco:5.15},
    {produto:'trigo', preco:7.90},
    {produto:'bolo', preco:8.10},
    {produto:'giló', preco:4.20},
]

const total = produtos.reduce((ac, obj)=>{
    return ac += obj.preco
},0)

console.log(total)