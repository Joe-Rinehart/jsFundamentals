for(let i = 300; i <= 400; i++ ) {
    if(i % 6 === 0 && i % 8 === 0) {
        console.log("Marco Lopez");
    } else if (i % 6 === 0) {
        console.log("Marco");
    } else if (i % 8 === 0){
        console.log("Lopez");
    } else {
        console.log(i);
    }
}