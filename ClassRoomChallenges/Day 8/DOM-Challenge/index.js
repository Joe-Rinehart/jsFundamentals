//BRONZE
let title = document.getElementById('title')
title.innerText = "This is my to do list:"
title.style.color = "#A9A9A9";


//SILVER
let div = document.getElementById("div");
let para = document.createElement("p");
para.innerText = "Lorem ipsum";
para.style.color = "#6495ED";
div.append(para);


//GOLD

let list = document.getElementById("list");
let arrayList = ["Clean" , "Cook" , "Work" , "Sleep"];

arrayList.forEach((item) => {
    let li = document.createElement("li")
    li.innerText = item;
    list.append(li)
});

