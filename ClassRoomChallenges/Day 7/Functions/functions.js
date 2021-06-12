function greeting() {
    console.log("Hello")
}
greeting();

/*
(1)         (2)
function greeting() {
    console.log("Hello")
}
greeting();

1-keyword
2-name of function it has parenthesis for prameters
*/

// Expression

// Order matters if you are using an expression for a function

let hello = function (){
    console.log("Hey New Function");
};
hello();


function number(){
    for (let i = 1; i<=10; i++){
        console.log(i)
    }
}
number()

function greetingStudent(name){
    console.log(`Good Morning ${name}`)
}
greetingStudent("Joe")

/*
*number()
                           (1)
function greetingStudent(name){
                                  (2)
    console.log(`Good Morning ${name}`)
}
greetingStudent("Joe")

-1 The parameter(s) that a function is accepting
-2 Using the string interpolation we can refer to the parameter that was given to the function
*/


function area(length, width){
    let calcArea = length * width
    return calcArea
}

let rectangle = area(2,5)
let rectangle2 = area(10,7)

console.log(rectangle, rectangle2)


function volume(length, width, depth){
    let calcVolume = length * width * depth
    return calcVolume
}

let cube = volume(5,5,5)

console.log(cube)


function convertDogAgeToHumanAge(dogAge){
    let humanAge = (dogAge - 2) * 4 + 21
    return humanAge
}

let rover = convertDogAgeToHumanAge(9)
console.log(rover)

