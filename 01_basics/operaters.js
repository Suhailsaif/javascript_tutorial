
// Arithmetic Operators
let x = 10;
console.log("x + 5 = ", x + 5); //15
console.log("x - 5 = ", x - 5); //5
console.log("x * 5 = ", x * 5);

// Assignment Operators
let y = 5;
y += 5; // y = y + 5
console.log("y += 5 = ", y); //10
y -= 2; // y = y - 2
console.log("y -= 2 = ", y);
y *= 3; // y = y * 3
console.log("y *= 3 = ", y);
y /= 2; // y = y / 2
console.log("y /= 2 = ", y);

// Comparison Operators
let c = 10;
let d = 5;
console.log("c > d = ", c > d); //true


// Logical Operators AND OR
let p = 6;
let q = 5;
console.log("p > q && p === 6 = ", p > q && p === 6); //true
console.log("p > q || p === 5 = ", p > q || p === 5); //true

// Logical Operators NOT
console.log("!(p > q) = ", !(p > q)); //false


//  Logical Operators NoT
let a =6;
let b = 5;

console.log("!(6<5) = ", !(a===6)); //true
console.log("6>5 && 6===6 = ", a>b && a===6); //true
console.log("6>5 || 6===6 = ", a>b || a===6); //true
console.log("6>5 && 6===5 = ", a>b && a===5); //false
