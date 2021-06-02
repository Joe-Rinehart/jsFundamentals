/*
Conditionals - Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run. Conditionals will check if an expression is true. IF the expression is true, a block of code will run.
*/

/* 
Falsy Values - considered false.

1) false
2) null
3) undefined
4) 0
5) NaN (Not a number)
6) " " (empty string)
*/

/*
Truthy Values -  considered true.

1) true
2) 42, -42 (numbers that aren't 0)
3) "string" (Strings that aren't empty)
*/

let snowing = true

if (snowing == true) {
    //true
    console.log('It is snowing outside!');
}

if (snowing) {
    //true
    console.log('It is still snowing!');
}

let snowing = false;

if (snowing == false) {
    //true
    console.log(`It stopped snowing. It's too warm.`)
}

if(snowing) {
    //false. It will not run.
    console.log("It is not snowing. Bummer!");
}

/*
IF ELSE - IF the expression is false, it will run the next block of code.
The else statement specifies a block of code to be executed if the condition is false.
*/

let puppies = 3;

if(puppies < 1){
    console.log('I need more puppies.');
} else {
    console.log('I have enough puppies!');
}

 let myName = "Joe";

 if (myName == "Marco") {
     console.log(`Hello! My name is ${myName}.`)
 } else {
     console.log(`Hello, is your name ${myName}`)
 }





