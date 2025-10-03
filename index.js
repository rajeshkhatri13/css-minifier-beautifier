const { minifyCSS } = require('./cssMinifier');
const { beautifyCSS } = require('./cssBeautifier');

// Example usage:
const inputCSS = `
/* Example CSS */
body {
  background: #fff;
  color: #333;
}
`;

console.log('Minified CSS:');
console.log(minifyCSS(inputCSS));

console.log('\nBeautified CSS:');
console.log(beautifyCSS(minifyCSS(inputCSS)));