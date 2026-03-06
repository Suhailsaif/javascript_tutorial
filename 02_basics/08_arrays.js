

 // -- ----      Arrays      ---- -- //

// Arrays are used to store multiple values in a single variable.
// They are ordered collections, meaning that the order of elements matters.

const myArr = [1, 2, 3, 4, 5]; // Creating an array of numbers
// console.log("Array:", myArr);
// console.log("Type of Array:", typeof myArr); // typeof returns 'object' for arrays


// myArr.push(6); // Adding an element to the end of the array
// console.log("After push:", myArr);
// myArr.pop(); // Removing the last element from the array
// console.log("After pop:", myArr);
// myArr.unshift(0); // Adding an element to the beginning of the array
// console.log("After unshift:", myArr);
// myArr.shift();
// // Removing the first element from the array
// console.log("After shift:", myArr);

const MyNewarr = myArr.join(); // Joining array elements into a string with a separator
// console.log("Joined Array:", MyNewarr);

const marvelHeroes = ["spiderman", "ironman", "thor", "hulk"]; // Creating an array of strings

const dc_heroes = ["batman", "superman", "flash", "aquaman"]; // Creating another array of strings

const allHeroes = marvelHeroes.concat(dc_heroes); // Concatenating two arrays

//  marvelHeroes.push(dc_heroes); // Adding dc_heroes array as a single element to marvelHeroes

// console.log("Marvel Heroes:", marvelHeroes);

// console.log("All Heroes:", allHeroes);


const allHeroes2 = [...marvelHeroes, ...dc_heroes, ...MyNewarr]; // Merging two arrays using the spread operator with no lmmititation on number of arrays

// console.log("All Heroes 2:", allHeroes2);


const anotherArr = [1,2,3,[4,5,6],7,8, [1, [2,3,4]]]; // Creating a nested array
const real_array = anotherArr.flat(2); // Flattening the nested array to a single level
const newactual_array = anotherArr.flat(Infinity); // Flattening the nested array to a single level regardless of depth
// console.log("Flattened Array:", real_array);
// console.log("New Actual Flattened Array:", newactual_array);

const arra_Checking  ="Mohammad Suhail"
console.log(Array.isArray("Suhail")); // Checking if a variable is an array

console.log(Array.from(arra_Checking)); // Checking if a variable is an array

console.log(Array.from( {name : "Suhail"})); // Creating an array from a string

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));