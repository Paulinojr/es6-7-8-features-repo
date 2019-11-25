// You can open web inspector with: Ctrl + Shift + J

/** CONSOLE.LOG **/
/*
 * Outputs something to the web console.
 */

 console.log("hello");

 var a = 10;
 console.log(a);

 var b = 20;
 console.log(a, b);

 console.log(a+b);

 //you can use object literal
 console.log(`${a} + ${b} = ${a+b}`);

 var object = {name: 'Something Something'};

 console.log(object);

 //clears the console
 //console.clear();

 //console.assert allows you to run assertion tests
 console.assert(1 === 2, "this is not true");

 console.warn("this is a warning ⚠️ ");

 console.error("this is error message");

