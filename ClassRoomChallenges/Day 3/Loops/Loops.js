let a = 0
a = a + 1
console.log(a)
//expected output: 1

a++
console.log(a)
//expected output: 2

a--
console.log(a)
//expected output: 1

console.log(35 % 2)

console.log(36 % 2)

let numberToCheck = 25

if(numberToCheck % 2 == 0){
    // EVEN
    console.log(('This is even'))
} else {
    //ODD
    console.log('This is odd')
}

// How to add to an array (Append)
let myArray = []
myArray.push("Apples")
myArray.push("Kiwi")

console.log(myArray)

let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

console.log(alphabet[0]) 
console.log(alphabet.length)

let arr = []
for(let i = 0; i < alphabet.length; i++){
    if (i % 2 === 0){

        arr.push(alphabet[i])
        console.log(arr);
    } else {
        console.log(`the index ${i} is an odd number`)
    } 
}

        
