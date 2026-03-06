  //  -------------------------    Date --------------------
const date1 = new Date();

console.log("Date 1:", date1.toString);
console.log("Date 1:", date1.toDateString());
console.log("Date 1:", date1.toISOString());
console.log("Date 1:", date1.toLocaleString());
console.log(typeof date1);


let myNewDate = new Date(2023, 0, 23);
console.log( myNewDate.toLocaleString());

console.log("Get Time:", myNewDate.getTime());

console.log(myNewDate.toDateString());
console.log("Get Date:", myNewDate.getDate());
console.log("Get Day:", myNewDate.getDay());
console.log("Get Month:", myNewDate.getMonth());
console.log("Get Full Year:", myNewDate.getFullYear());

console.log("Get Hours:", myNewDate.getHours());
console.log("Get Minutes:", myNewDate.getMinutes());
console.log("Get Seconds:", myNewDate.getSeconds());