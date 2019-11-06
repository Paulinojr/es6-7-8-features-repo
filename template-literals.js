let word1 = 'Terry';
let word2 = 'Bogard';

//this is the template literal
const templateLiteral = `${word1} ${word2}`;

 /*
  * Returns:
  * Terry Bogard 
  */
console.log(templateLiteral);

//Template literals can be multiline strings
const multipleLines = `${word1}
${word2}
`;

/*
 * Returns: 
 * Terry
 * Bogard
 */

 console.log(multipleLines)


