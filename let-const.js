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
 * The answer is no, we shouldn't, and that's because of JS hoisting concept
 * When the interpreter compiles the code, it gets the "terry" variable
 * to the top of it's scope, so the code looks like this:
 */

 var terry;

 console.log(terry);
 terry = 'ARE YOU OK?'
