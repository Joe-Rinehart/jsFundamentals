let student = {name: 'Peter', awesome: true, degree: 'javascript', week: 1};

for (item in student){
    console.log(item)
    console.log(student[item])
}

//in does not require that the 'thing' you loop through be numbered

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll']

for (cat in catArray){
    console.log(cat)
    console.log(catArray[cat])
}

//let's write a for-in loop that capitalizes the first letter of a name

let dude = 'joe'
let capName

for (n in dude){
    if (n == 0){
        capName = dude[n].toUpperCase()
    } else {
        capName += dude[n].toLowerCase()
    }
}
console.log(capName)

