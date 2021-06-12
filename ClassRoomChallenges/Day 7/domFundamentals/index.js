// getElementID() - Grabs ID'S from HTML, returns Element, single, Does not loop

const header = document.getElementById("header");
console.log(header);

header.style.color = "pink"
header.innerText = "Hello World"



// getElementsbyClassName() Grabs classes from HTML file, returns HTMLCollection, Multiple, Yes you can loop

const errorList = document.getElementsByClassName('error-list')
console.log(errorList)

errorList[1].innerText = "I changed error 2"
//Example 1 Looping
for (let i = 0; i < errorList.length; i++){
    errorList[i].style.color = "red";
}

//Example 2 Looping
for(error of errorList){
    error.style.color = "green"
}

//Example 3 Looping forEach does not work with getElementsByClass()
// errorList.forEach(error => error.style.color = "purple")



//getElementsbyTagName() Grabs tags from HTML file, returns HTMLCollection, multiple, Yes you can loop, not using forEach
const tags = document.getElementsByTagName("p")
console.log(tags)

tags[0].innerText = "I changed the paragraph"


const listItems = document.getElementsByTagName("li")
console.log(listItems)

// listItems[0].style.fontStyle = "Italic"
// listItems[1].style.fontStyle = "Italic"

for (let i = 0; i < listItems.length; i++){
    listItems[i].style.fontStyle = "Italic"
}



//querySelector() brings back a single element, can not loop through it
const header = document.querySelector('h1')
console.log(header)

const erorList = document.querySelector(".error-list")
console.log(errorList)



//querySelectorAll() Yes you can loop with forEach, NodeList, Multiple, Yes, you can loop
const headerTags = document.querySelectorAll("h1")
console.log(headerTags)

console.log(headerTags[1])

headerTags.forEach(h =>{
    h.style.color = "blue"
})

const listItems = document.querySelectorAll(".error-list")

listItems.forEach(li=>{
    li.style.fontStyle = "italic"
})
