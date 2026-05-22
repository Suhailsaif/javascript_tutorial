

let str = "Suhail ";
let str1 ="Ansari";
    let str2 = str+str1;
    // console.log(str2);

    // console.log(2 +2 + "22" +  1 + 2);
    // console.log(1 + 2 + "22");

    // console.log("1"+2*3+4+5*6-3 + "3"); 

    // console.log(+true); it is output will 1

    // console.log(true+"") it is oultput will true
    // console.log(true+); error
    
    // console.log(3 + 4 * 5); // 3 + 20
// Expected output: 23

// console.log(4 * 3 ** 2); // 4 * 9
// Expected output: 36

let a;
let b;

// console.log((a = b = 5));
// Expected output: 5
    
    
let incr =10;
// incr++
// console.log(incr)

--incr
// console.log(incr);




let name ="suhail"
const age =23;
// console.log(name + age + "Value");
// console.log(`My name is ${name} and my age is  ${age}`); // "string interpolation"


 const gameName = new String("AnsariS Uhail");
//  console.log(gameName[0]);


const str_newdt = "The quick brown fox jumps over the lazy dog.";

const words = str_newdt.split(" ");
// console.log(words[3]);


// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toLocaleLowerCase());


// console.log(gameName.charAt(2));

// console.log(gameName.indexOf('h'));


const newstring =  gameName.substring(0,4)
// console.log(newstring);


const anotherString = gameName.slice(-12, 4);
// console.log(anotherString);

let NewStrinng = "   Ansari Suhail  "
// console.log(NewStrinng.trim());

let neuurl = "https://mdsuhail-portfolio.netlify.suhail20%ansari/"
// console.log(neuurl.replace("20%", "-"));

let newstring1 = "Hello World!"
// console.log(newstring1.includes("!"));

// do reverse this string , how to do?
let str3 = "Suhail";
let reversed_str3 = str.split("").reverse().join("");
// console.log(reversed_str3);

// check string is palindrome 
let str_pal = "madam";
let converted_array_str_palindrome = str_pal.split("");
let isPalindrome = str === str.split("").reverse().join("");
// console.log(isPalindrome);  the answer is true 


// remove dublicates char

let str_unique_check = "hello";
let resultssss = [...new Set(str_unique_check)].join("");

// console.log(resultssss);

// withoute using inbuild functions /
let str_unique_check_without = "hello";

let result = "";
let seen = {};  // Object to keep track of characters we've already added

for (let i = 0; i < str_unique_check_without.length; i++) {
  let char = str_unique_check_without[i];
  if (!seen[char]) {
    result += char;  // Add the character to result if it's not already seen
    seen[char] = true;  // Mark the character as seen
  }
}

// console.log(result);  // "helo"


// count occurences (how many times count) of each character
let str_count_char = "hello";
let count = {};

for (let char of str_count_char) {
  count[char] = (count[char] || 0) + 1;
}

// console.log(count); // { h:1, e:1, l:2, o:1 }

// check if string has a substring 
let check_substring = "hello world".includes("suhail"); // true
// console.log(check_substring);








 

