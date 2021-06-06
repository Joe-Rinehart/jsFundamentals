let student = {
    name: "Amruta",
    awesome: true,
    certification: "JavaScript",
    week: 1
    //properties : value
    //key = property
};

//For in loops are great for iterating over values in an object.
//For in loops count the enumerable (countable) properties in an object.

//Objects contain properties that are enumerable. Properties in an object don't contain an index like arrays, but they can be counted.

//properties are keys. Keys go IN objects(lock) for it to correctly work and unlock.

for(item in student){
    // console.log(item)
    console.log(student[item])
}

//the for in loop iterates over a student object.
//each iteration returns a propery(item)
//the key/property is used to access the value of the key/property
//the value of the key/property is student[item].


let fellowshipOfTheRing = {
    members: {
        Gandalf: 'Staff',
        Frodo: 'Sting',
        Sam: 'Lembas Bread',
        Aragorn: 'Anduril',
        Legolas: 'Bow of the Galadhrim',
        Gimli: 'Walking Axe',
        Pippin: 'Barrow Blades',
        Merry: 'Barrow Blades',
        Boromir: 'Horn of Gondor'
    },
    purpose: "To take the One Ring to Mordor, where it is to be \"cast into the fiery chasm from whence it came,\" in order for it to be destroyed and Sauron\'s power to come to an end.",
    formed: '25 October, 3018',
    dissolved: '26 February, 3019'
}
let arr = []

for(member in fellowshipOfTheRing.members){
    if (member[0] !== 'A' && member[0] !== 'E' && member[0] !== 'I' && member[0] !== 'O' && member[0] !== 'U'){
        console.log(`${member}'s name does not begin wih a vowel`)
        arr.push(member)
    } else {
        console.log(`${member}'s name does begin with a vowel`)
    }
}

console.log(arr)






