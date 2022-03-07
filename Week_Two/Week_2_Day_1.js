var floor = Math.floor(1.8)*10;
var ceiling = Math.ceil( Math.PI )*10;
var random = Math.random();
    
// console.log(floor);
// console.log(ceiling);
// console.log(random*6);

function d6() {
    var roll = Math.ceil(Math.random()*6);
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);


