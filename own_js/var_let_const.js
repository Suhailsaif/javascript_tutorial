
// 1.0 var can be re-declared and updated
// var a = 10;
// var a = 20; // This is allowed
// a = 30; // This is also allowed
// console.log(a); // Output: 30


// // 1. Can let be re-declared?
// let x = 5;clea
// // let x = 10; // This will cause a SyntaxError

// // 2. Can const be re-declared?
// const y = 20;
// // const y = 30; // This will also cause a SyntaxError

// // 3. Can let be updated?
// let z = 40;
// z = 50; // This is allowed
// console.log(z); // Output: 50  yes, let can be updated

// // 4. Can const be updated?
// const a = 60;
// a = 70; // This will cause a TypeError , const cannot be updated


// 5. Does const mean immutable?
const b = { name: "Alice" };
b.name = "Bob"; // This is allowed, the object itself is mutable
// console.log(b.name); // Output: Bob, This is not immutable, 
// the reference to the object is constant, but the properties of the object can be changed.

 
//11. What is hoisting?
//Variables are moved to the top of their scope.
// hoisting is the behavior where variable, function, and class declarations are moved to the top of their scope 
// (script or function) during the compilation phase, before the code is executed.

 // exp 1
greet(); // Works
function greet() {
  //  console.log("Hello!");
}

// exp 2
// console.log(a); // undefined (not error)
var a = 5;

// ex. 3 
// console.log(b); // ❌ ReferenceError
// let b = 10;

// console.log(c); // ❌ ReferenceError
const c = 15;


// var in loop issue
 for(var i=0;i<3;i++){
//   setTimeout(()=>console.log(i),100);
}

// Fix with let
for(let i=0;i<3;i++){
//   setTimeout(()=>console.log(i),100);
}
// 0 1 2


 // Fix var using closure
for(var i=0;i<3;i++){
  ((i)=>{
    // setTimeout(()=>console.log(i),100);
  })(i);
}

/* shadowing : scope variable with same name as global variable
 Shadowing happens when a variable in an inner scope has the same name as one in an 
outer scope. The inner variable overrides
 the outer one within its scope, making the outer variable inaccessible there.

 Shadowing tab hoti hai jab same naam ka variable different scopes me declare ho
let aur const me block scope hota hai, isliye easily shadowing hoti hai
var me bhi ho sakti hai, but uska behavior thoda tricky hota hai (function scoped)
*/
let a = 10;

function test() {
  let a = 20; // yeh outer 'a' ko shadow kar raha hai
  console.log(a); // 20
}

test();
console.log(a); // 10