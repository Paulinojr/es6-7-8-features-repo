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