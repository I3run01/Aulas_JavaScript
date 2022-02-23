const carro = [
    {carro: 'golf ', ano: 2000},
    {carro: 'Jetta ', ano: 2005},
    {carro: 'Ford ', ano: 2010},
    {carro: 'Palio ', ano: 2020},
    {carro: 'Gol ', ano: 2003},
    {carro: 'Punto ', ano: 1998},
    {carro: 'Astra ', ano: 2018},
]

//Modelos mais novos que 2015

const Novos2015 = carro.filter((obj) => {
   return (obj.ano > 2015)
})

console.log(Novos2015)