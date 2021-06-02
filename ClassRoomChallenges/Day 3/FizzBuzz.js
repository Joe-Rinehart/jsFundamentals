let FB = 9

if (FB % 3 === 0 && FB % 5 === 0){ 
    console.log('Fizz Buzz');
} else if (FB % 5 === 0){
    console.log('Buzz')
} else if (FB % 3 === 0){
    console.log("Fizz")
} else {
    console.log("Your number is not divisible by 5 or 3");
}

let FB = 9;

switch (true) {
    case (FB % 3 === 0 && FB % 5 === 0):
        console.log("Fizz Buzz")
        break;
    case (FB % 3 === 0):
        console.log("Fizz")
        break;
    case (FB % 5 === 0):
        console.log("Buzz")
        break;
    default: 
        console.log("Your number doesn't run")
}

let FB = 9
let result = (FB % 3 === 0 && FB % 5 === 0) ? "Fizz Buzz" 
    : (FB % 3 === 0) ? "Fizz"
    : (FB % 5 === 0) ? "Buzz"
    : "Your number doesn't run"
console.log(result)