function randomAdd (a,b) {
    let time = Date.now();
    return a + b + time; 
}


for ( let i = 0; i < 100; i++) {
    console.log(randomAdd(10, 15));

}