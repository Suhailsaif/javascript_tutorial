

const prompt = require("prompt-sync")();
// print a mu,ner 0 to 100 even numbers only
// for (let i = 0; i <= 100; i++) {

//     // check if the number is even
//     if (i % 2 === 0) {
//         console.log("The Number is even =", i);
//     }
// }


for (let i = 0; i <= 10; i++) {

    // check if the number is odd
    if (i % 2 !== 0) {
        console.log("The Number is odd =", i);
    }
}

// Ques2 : create a game where you start with any randum game number. ask the user to keep guessing the game number
// untill the user enters correct values

let gameNumber = 27; // You can change this to any random number

let userNumber = prompt("enter gues user number")

while(userNumber != gameNumber){
    userNumber = prompt("you gues wrong number, enter again gues number")
}

console.log("Congrotulation you enter right number");

