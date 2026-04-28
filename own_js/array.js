

 // Array : It hold multiple or collection of data in to signle var or we can
  // say dynamic size  and can hold mix of data type like string, objects, numbers, and even other arrays

  /* 
  
  push() – Adds one or more elements to the end of an array.
pop() – Removes the last element from an array.
shift() – Removes the first element from an array.
unshift() – Adds one or more elements to the beginning of an array.
map() – Creates a new array with the results of calling a provided function on every element in the calling array.
filter() – Creates a new array with all elements that pass the test implemented by the provided function.
reduce() – Executes a reducer function on each element of the array, resulting in a single output value

  */

//  1. Array map 

const numbers = [1, 2, 3, 4];

const doubled = numbers.map( num =>  num*2);
// console.log(doubled);

const users = [
  { name: "Amit", age: 20 },
  { name: "Sara", age: 25 }
];

const names = users.map(user => user.name.toLocaleLowerCase()
);
// console.log(names); 

const nums = [1, 2, 3, 4];

const result = nums
  .map(n => n * 2)  // [2,4,6,8]
  .filter(n => n > 4); // (4 se bada 6 aur 8 h)

  // console.log(result); // output will be [6, 8]


  // q 

  const data = [1, 2, 3, 4];  // ouput want [1,4,8,16]


  const newresult = data.map(user_data => user_data*user_data);
  // console.log(newresult);
  





