/*
ARROW FUNCTIONS
*/

function hello() {
    console.log("hello")
}

hello()

// arrow functions were introduced in ES6. They are a more concise way of writing function expressions.
//  (1)      (2)
let hi = () => {
    console.log('hi');
}

hi()

/*
    1. Set my arrow function into a variable
    2. Use my arrow to signify that it's a function.

    Arrow functions can not be hoisted because they are not declarations.
*/

//CONCISE BODY
let hi = () => console.log('hi');

hi();

//BLOCK BODY

let hi = () => {
    console.log('hi');
}

hi()

//CONCISE VS BODY
let apples = x => console.log(`There are ${x} apples.`);
apples(10);

//More than one parameter will require parentheses 
let apples = (x, y) => {
    console.log(`There are ${x} apples and ${y} oranges`)
}
apples(10,15)