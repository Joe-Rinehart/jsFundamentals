let myInformation = {
    name: "Joe",
    age: 29,
    numberOfSiblings: 2,
    pets: true,
    petNames: ["Pryna", "Umbra"],
    mostRecentMovieWatched: "Mortal Kombat",
    carsOwned: [{make: "Ford", model: "Fiesta" }] ,
    favoriteSinger: "None"
}

console.log(myInformation);

let studentInformation1 = {
    name: 'Julia',
    age: 44,
    numberOfSiblings: 2,
    pets: true,
    petNames: ['Zed', 'Penelope', 'Lucy', 'Ony', 'Baby', 'Nugget', 'Pancake'],
    mostRecentMovieWatched: 'Dolittle',
    carsOwned: [{make: 'Scion', model: 'xD'}],
    favoriteSinger: 'Andy Bell'
};

console.log(studentInformation1);

let studentInformation2 = {
    name: 'Kristen',
    age: 32,
    numberOfSiblings: 1,
    pets: false,
    petNames: [],
    mostRecentMovieWatched: 'Pretty Guardian Sailor Moon Eternal The Movie Parts 1 and 2',
    carsOwned:
        [
            {make: 'Ford', model: 'Escape'},
            {make: 'Ford', model: 'Mustang'},
            {make: 'Toyota', model: 'RAV4 Sport'}
        ],
    favoriteSinger: 'Colbie Caillat'
}

console.log(studentInformation2);


console.log(`In our group we have ${myInformation.name}, ${studentInformation1.name}, and ${studentInformation2.name}.`)

console.log(`These are ${studentInformation1.name}'s pets names: ${studentInformation1.petNames}. Her first animals name is ${studentInformation1.petNames[0]}`)

console.log(`${studentInformation2.name} just watched ${studentInformation2.mostRecentMovieWatched} and dug it.`)