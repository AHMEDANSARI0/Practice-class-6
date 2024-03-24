var a = 2;
var b = 8;
var c = ++a + a++ + --b + b-- + a + b++ + b--;
console.log(c);
//Logical operator 
//And operator 
var x = 6;
var y = 9;
var z = 3;
var andoperator = (x > 7) && (y > 3);
console.log(andoperator);
// OR operator 
var oroperator = (z > 5) || (x > 5);
console.log(oroperator);
//Not operator
var notoperator = !(x > 7);
console.log(notoperator);
// Condition if / else if
var raining = false;
var weather = "cloudy";
if (raining) {
    console.log("Barish ho rhi he");
}
else if (weather == "cloudy") {
    console.log("Barish ho skti he");
}
else {
    console.log("Barish nh ho rhi he");
}
