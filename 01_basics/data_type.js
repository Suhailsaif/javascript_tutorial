

    // Primitive Data Types in JavaScript
    // 1. Number
    // 2. Null
    // 3. String
    // 4. Symbol
    // 5. BigInt
    // 6. Boolean
    // 7. Undefined


const score = 100;  // Integer data type

console.log("This is Number data type",score);


const score_flat = 99.5;  // Floating-point data type

console.log("This is Float data type",score_flat);


const isloggedin = true;  // Boolean data type

console.log("This is boolean Data type", isloggedin);


//  Big Int data type
const bigIntNumber = 9007199254741991n;
console.log("This is BigInt data type", bigIntNumber);


const id = Symbol("12345");  // Symbol data type

const SecondId = Symbol("12345"); // Symbol data type second

console.log("This is Symbol data type",id);
console.log("This is Symbol data type",SecondId);
console.log("This is Symbol data type", id == SecondId); // false



//   variable with undefined data type
let name;
console.log("This is undefined data type",name);

// variable with null data type
let nullVar = null;
console.log("This is null data type",nullVar);

// variable with string data type
const userName = "John Doe";
console.log("This is String data type",userName);


 // Non Primitive Data Types in JavaScript
 // 1. Object
 // 2. Array
 // 3. Function

const  heros = ["Shaktiman", "Doremon", "Chhota Bheem"];  // Array data type

let Objects = {
    name : "John",
    age  : 30,
    city : "New York"
}  // Object data type

console.log("This is Array data type", heros);
console.log("This is Object data type", Objects);

function greet(){
    return "Hello, World!";
}  // Function data type
console.log("This is Function data type", greet());

// memory type like stack memory and heap memory
// stack memory stores primitive data types
// heap memory stores non-primitive data types

let myyoutubeChannel = "coding_ninja_technique"; // stored in stack memory
let anotheryutubechannel = myyoutubeChannel; // stored in stack memory

anotheryutubechannel = "code_with_harry";
console.log(myyoutubeChannel);
console.log(anotheryutubechannel);


let userOne = {
    name : "Rohan Das",
    age  : 25,
    email: "m.suhail54321@gmail.com"
}; // stored in heap memory

let userTwo = userOne; // stored in heap memory

userTwo.email = "m.suhail123@gmail.com"; // modifying userTwo also modifies userOne

console.log(userOne.email);
console.log(userTwo.email);