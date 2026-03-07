// 1. IF STATEMENT
if (5 > 3) {
    console.log("5 is greater than 3");
}

// 2. IF...ELSE STATEMENT
let age = 18;
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// 3. IF...ELSE IF...ELSE STATEMENT
let score = 75;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// 4. SWITCH STATEMENT
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Unknown day");
}

// 5. TERNARY OPERATOR
let number = 10;
let result = number > 5 ? "Greater than 5" : "Less than or equal to 5";
console.log(result);

// 6. LOGICAL OPERATORS (AND, OR, NOT)
let x = 10;
let y = 20;

if (x > 5 && y > 15) {
    console.log("Both conditions are true");
}

if (x > 15 || y > 15) {
    console.log("At least one condition is true");
}

if (!(x > 15)) {
    console.log("x is not greater than 15");
}

// 7. NESTED IF STATEMENTS
let num = 25;
if (num > 0) {
    if (num > 20) {
        console.log("Positive and greater than 20");
    } else {
        console.log("Positive but less than or equal to 20");
    }
}