const baseURL =  'https://adventuretimeapi.herokuapp.com/people'


let characterPictureLinks = {
    finn : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7e/Finn_with_bionic_arm-0.png/revision/latest?cb=20190807133126",
    tarttoter : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7d/Toter.png/revision/latest?cb=20120713195935",
    lady : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/a/ad/1ATLadyRainicornLook.png/revision/latest?cb=20190807133156",
    marceline : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/e/e0/Marceline_Stock_Night.png/revision/latest/scale-to-width-down/95?cb=20190807133150",
    lumpyspaceprincess : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/9/9f/Lumpy_Space.png/revision/latest?cb=20110730224431",
    lemongrab : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f5/Earl.png/revision/latest?cb=20120723061821",
    dukeofnuts : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/5/57/Prince-of-nuts.png/revision/latest?cb=20100402183002",
    fionna : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/c/c3/Fionna_new_design.png/revision/latest?cb=20140704073319",
    princessbubblegum : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/0/00/Princess_Bubblegum.png/revision/latest/scale-to-width-down/100?cb=20190807133134",
    iceking : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/6/64/Original_Ice_King.png/revision/latest/scale-to-width-down/150?cb=20160405041324",
    bmo : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/81/BMO.png/revision/latest?cb=20190807133145",
    jake : "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3b/Jakesalad.png/revision/latest/scale-to-width-down/310?cb=20190807133015"
    };

// console.log(baseURL)
fetch(baseURL)
    .then(response => response.json())
    .then(json => displayCharacter(json));

function displayCharacter(adventureTime) {
    // console.log(adventureTime);
    //character info = the main parent to append
    let characterInfo = document.querySelector('.character-info');
    for(i = 0; i < 7; i++){
        console.log(adventureTime[i].name)
        //Create the element
    let characterName = document.createElement('p')
    let gender = document.createElement('p')
    let picture = document.createElement('img')
        //describe the element(innerText)
    characterName.innerText = adventureTime[i].name
    gender.innerText = adventureTime[i].gender
    picture.src = characterPictureLinks[adventureTime[i].name.toLowerCase().replaceAll(" ", "")]
        //appennd the new element
    characterInfo.appendChild(characterName)
    characterInfo.appendChild(gender)
    characterInfo.appendChild(picture)}
}




