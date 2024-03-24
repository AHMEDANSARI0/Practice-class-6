let a = 2;
let b = 8;
let c = ++a + a++ + --b + b-- + a + b++ + b--;
console.log(c);

//Logical operator 

//And operator 
let x = 6;
let y = 9;
let z = 3;
let andoperator = (x > 7) && (y > 3);
console.log(andoperator);
// OR operator 
let oroperator = (z > 5) || (x > 5);
console.log(oroperator);
//Not operator
let notoperator = !(x > 7);
console.log(notoperator);

// Condition if / else if
let raining = false;
let weather = "cloudy";
if (raining) {console.log("Barish ho rhi he")}
else if (weather == "cloudy"){console.log("Barish ho skti he")}
else {console.log("Barish nh ho rhi he")}
