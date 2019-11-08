/*
 * With ES6 you can define default parameters for functions, like this: 
 *
 */
function selectFighter(fighter = "Nakoruru"){
    return fighter;
}

/*
 * Returns: Andy Bogard
 */
console.log(selectFighter("Andy Bogard"));

/*
 * Returns: Nakoruru 
 */
console.log(selectFighter());

// in arrow functions it goes like:

const selectFighters = (fighter1="Shingo Yabuki", fighter2="Mui Mui") => `${fighter1}, ${fighter2}`;

/*
 * Returns: Kula, Maxima
 */
console.log(selectFighters("Kula", "Maxima"));

/*
 * Returns: Shingo Yabuki, Mui Mui
 */
console.log(selectFighters());