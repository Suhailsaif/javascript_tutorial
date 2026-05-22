// arrow_functions.js

// 1. basic arrow function
const add = (a, b) => {
    return a + b;
};

console.log(add(2, 3)); // 5

// 2. implicit return
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // 20

// 3. single parameter, no parentheses
const square = x => x * x;
console.log(square(6)); // 36

// 4. no parameters
const sayHello = () => 'Hello';
console.log(sayHello()); // Hello

// 5. returning an object literal
const createUser = (name, age) => ({ name, age });
console.log(createUser('Alice', 30)); // { name: 'Alice', age: 30 }

// 6. use in array methods
const numbers = [1, 2, 3, 4];
const doubles = numbers.map(n => n * 2);
console.log(doubles); // [2, 4, 6, 8]