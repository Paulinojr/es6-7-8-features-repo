/*
 * With padstart and padend, you can
 * attach new chars to your string by just passing
 * the target string length and the string you want to attach
 */

let fighter = "Howard"

/*
 * Returns: Rock Howard 
 */

console.log(fighter.padStart(11, "Rock "))

let fighter2 = "Kim"

/*
 * Returns: Kim Kaphwan 
 */

console.log(fighter2.padEnd(11, " Kaphwan"))