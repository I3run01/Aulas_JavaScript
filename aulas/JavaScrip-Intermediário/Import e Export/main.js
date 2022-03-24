/*
import Hero from './SuperHeroClass.js'
import { printHeroName as heroName, printHeroPower as heroPower } from './SuperHeroClass.js'
*/

import Hero, {printHeroName as heroName, printHeroPower as heroPower} from './SuperHeroClass.js'


const hero01 = new Hero('Superman', 'Visão de raio-x')
console.log(hero01)
heroName(hero01)
heroPower(hero01)



/*
console.log(hero01.name)
console.log(hero01.power)
*/

