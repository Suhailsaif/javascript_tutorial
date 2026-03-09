// Simple for loop that counts from 1 to 4
// for (let i = 1; i < 5; i++) {
//     console.log(i);
// }

// For loop to iterate through an array

// const fruits = ['apple', 'banana', 'orange', 'grape'];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// For loop with custom step

// for (let i = 0; i <= 10; i += 2) {
//     console.log(i); // prints 0, 2, 4, 6, 8, 10
// }

// To calcculate the sum of 1 to 5
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum = sum + i; // sum = sum + i
// }
// console.log(sum); // prints 15



// while loop that counts from 1 to 5
// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// do...while loop that counts from 1 to 5
// let j = 1;
// do { 
//     console.log(j);
//     j++;
// } while (j <= 5);



// for...of loop to iterate through an array
// const fruits = "Hello Mohammad Suhail";
// for (const fruit of fruits) {
//     console.log("Letter of fruits= ", fruit);
// }


 // for...in loop to iterate through an object
// const person = {
//     name: "Mohammad Suhail",
//     age: 30,
//     city: "New York",
//     function: function sum(a, b) {
//         c =  a + b;
//         return c;
//     }

// };
// for (const key in person) {
//     console.log(key + ":  " + person[key]);
// }


const person = {
    name: "Mohammad Suhail",
    age: 30,
    city: "New York",
    sum: function(a, b) {
        return a + b;
    }
};

for (const key in person) {
    console.log(key + ": " + person[key]);
}

// calling the function with values
console.log("City:", person.city);
console.log("Sum:", person.sum(5, 10));
