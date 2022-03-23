/*
export default User;
import User from 'arquivo.js'
*/

/*export function user() {}
import { user } from 'arquivo.js'
*/

export default class SuperHero {
    constructor(name, power) {
        this.name = name
        this.power = power
    }
}


function printHeroName(hero) {
    console.log(`SuperHeroName is: ${hero.name}`)
}

function printHeroPower(hero) {
    console.log(`Super Hero power is: ${hero.power}`)
}