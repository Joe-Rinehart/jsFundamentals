/* 
SCOPE
-locally - think Indiana as our local scope
-globally - think planet earth as our global scope
*/

//example 1
let x = "declared OUTSIDE of the function"; //Globally scoped

function exampleScope() {
    let x = "declared INSIDE the function"
    console.log("We are inside the function exampleScope")
    // console.log(x)
}

exampleScope();
console.log(x)

//example2
let color = "blue"

function skyColor() {
    color = "pink"
    // console.log(color);
}

skyColor()
console.log(color)

/* Var vs Let
    CONST - cannot be reinitialized
    VAR - scoped to the nearest function
    LET - scoped to the nearest enclosing block
*/

var color = "blue"

function skyColor(){
    var color = "pink"
    if(1 == 1) {
        var color = "purple"
        console.log(color)
    }
    console.log(color)
}

skyColor()
console.log(color)
// Remember that VAR is scoped to the nearest function block, not the nearest enclosing block like LET. That is why our first variable declaration of color get reinitialized as purple.

//LET 
let color = "blue"

function skyColor() {
    let color = "pink"
    if (1 == 1) {
        let color = "purple"
        console.log(color) //purple
    }
    console.log(color) //pink
}

skyColor()
console.log(color) //blue
//With let we don't have to worry about any bleeding/scope creeping in out functions/conditionals

