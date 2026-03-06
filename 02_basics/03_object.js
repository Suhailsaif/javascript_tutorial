// singleton : only one instance , now we can defined as  
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Suhail",
    "full name": "Mohammad Suhail",
    [mySym]: "mykey1",
    age: 18,
    location: "New Delhi",
    email: "suhail@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "suhail@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "suhail@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());