/*
 * To understand how let & const works, we need to first understand
 * the concept of Javascript hoisting, here we go:
 * 
 * Javascript always hoist the variable declaration to the top of it's scope,
 * like this:
 */

console.log(terry);

var terry = "ARE YOU OK?";

/*
 * The output on the code above would be undefined, but why?
 * Shouldn't we get a Reference error? 
 * The answer is no, we shouldn't. That's because of JS hoisting concept:
 * when the interpreter compiles the code, it gets the "terry" variable
 * to the top of it's scope, so the code looks like this:
 */

 var terry;

 console.log(terry);
 terry = 'ARE YOU OK?'

/*
 * Now that you understand the concept of hoisting, let's go
 * with let and const:
 */

 console.log(maiShiranui)
 let maiShiranui = "Shiranui Mai"

 /*
  * In the code above, we can see the first difference between var and let
  * The let declaration would make this code to throw a reference error
  * instead of returning undefined.  
  * That's because es6 let prevents you from using undeclared variables.
  */

 var age = 100;
 if(age > 12) {
   let dogYears = age * 7;
   console.log(`You are ${dogYears} dog years old!`);
 }
 console.log(dogYears); // error because it's scoped only to the above block

 /* 
  * As the code above shows, the main aspect of let variables is that they 
  * are scope/block variables, which means they are visible only in the scope they were declared  
  */

  const THE_KING_OF_FIGHTERS= "Iori Yagami"

/*
 * About consts, they are a new way for you to declare constants in es6
 * By convention, use upper case letters. const values can't be reassigned, it's read-only
 */
