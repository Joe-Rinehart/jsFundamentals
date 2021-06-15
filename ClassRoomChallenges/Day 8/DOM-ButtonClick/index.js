let team1Points = document.getElementById("team1points")

console.log(team1Points.innerText)
console.log(typeof team1Points.innerText)

function initializePoints(){
    team1Points.innerText = "0"
}

function team1Add(){
    let points = team1Points.innerText;
    points = Number(points) + 1; // +points is the same as Number(points)
    team1Points.innerText = points;
}

function team1Sub(){
    let points = team1Points.innerText;
    if(points !== "0"){
    points = Number(points) - 1;
    team1Points.innerText = points;
    }
}

initializePoints()

