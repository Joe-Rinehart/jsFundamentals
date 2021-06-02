/*
VARIABLES

1-grammarAndTypes
    02-declarations.js
*/

//What is a variable?
var a = 1;
var b = 2;
console.log(a + b);

//notes on naming variables:
//1) a variable must begin with a letter, underscore, or dollar sign
//2) numbers may follow the above character, but cannot come first
//3) JavaScript is case sensitive 'hello' and 'Hello" are different variables

/*
DECLARATIONS, INITIALIZATIONS, ASSIGNMENT
*/

/*
Declarations refer to when we 'declare' a variable

Intializations refer to when a variable is assigned a value

Assignment refers to giving a variable a value. This can be after initialization.
*/

var x;
console.log('Declaration 1:', x); //undefined 

x = 10;
console.log('Initialization 1:', x);

x = 33;
console.log('Assignment 1:', x);

var y;
console.log(y);

y = 'hello';
console.log(y);

y = 'you are my fren';
console.log(y);

/*
Var,Let, and Const:

Var = 'old' keyword for variables.
Let = 'new' keyword for variable.
const = also new, declares unchanged variables
*/

let tonight = 'great!';
const elevenFifty = 'Amazing!';
console.log(tonight, elevenFifty);

tonight = 'lovely!';
console.log(tonight, elevenFifty);

// elevenFifty = 'Super';
