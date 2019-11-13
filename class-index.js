import { Fighter } from './class.js';

let fighter = new Fighter('Choi Bounge', 'Speed Brawling');

/* 
 * Returns: Choi Bounge 
 */
console.log(fighter.name);

fighter.attack();

/*
 * Returns: launch finisher attack 
 */

console.log(Fighter.finisher())