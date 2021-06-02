var myName = "Joe"
var person1 = 'Shauna'
var person2 = `Umbra`
let  animal = "tiger"

const weather = "cloudy"
console.log("Weather", weather)


var myname = "Jeff"; // JS is case sensitive

console.log("My Name", myName);

// var myName = "Steve" < Not Needed

// Reassigning a variable we do not need to reinitialize the bucket
myName = "Steve";

console.log("My Name Changed", myName);

let phrase = "Good Morning";

console.log(phrase , myName); // Works

// console.log(phrase+" "+myName) // Works

// console.log(`${phrase} ${myName}, how are you?`); // Works

let example = "thE FoX JUmped OveR the Turtle"

console.log(example.toLowerCase());

let name1 = "Marco"

let name2 = "MaRcO"

let match = name1.toLowerCase() === name2.toLowerCase()

console.log("Do Names Match:", match)


console.log("Does Example have this word in it?:" , example.toLowerCase().includes("fox"))

console.log("Length of Example:", example.length)





let myName = "Joe";
let hisName = "Caleb";

console.log(myName.length);
console.log(hisName.length);



if(myName.length < hisName.length) {
    console.log(`${hisName} is longer than ${myName}.`)
} else {
    console.log(`${myName} is longer than ${hisName}.`);
}









