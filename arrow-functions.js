/*
 *  Showcasing the difference between 
 *  ES5 function and ES6 function
 */

//Basic Syntax with Multiple Parameters

//ES5
var multiplyES5 = function(x, y) {
    return x * y;
};

//ES6
const multiplyES6 = (x, y) => { x * y }; //implicit "function" and "return" keywords

//You could also eliminate the brackets like: 
const multiplyES6 = (x, y) => x * y;

//Basic Syntax with One Parameter

//ES5
var phraseSplitterES5 = function phraseSplitter(phrase) {
    return phrase.split(' ');
};

//ES6
const phraseSplitterES6 = phrase => phrase.split; //Optional parenthesis

//Basic Syntax with No Parameters

//ES5

var fighterLogES5 = function fighterLogES5(){
    console.log("K'");
};

//ES6
var fighterLogES6 = () => { console.log("K'") };

// Object Literal Syntax

//ES5
var setNameIdsES5 = function setNameIds(id, name){
    return {
        id: id,
        name: name
    }
};

//ES6
var setNameIdsEs6 = (id, name) => ({id, name})