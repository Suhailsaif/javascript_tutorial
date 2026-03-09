const prompt = require("prompt-sync")();


let number = prompt("Enter a any number");

if(number%5 ===0){
    console.log(number, "is a multiple of 5");
    
}
else{
    console.log(number, "is not multiple of 5");
    
}