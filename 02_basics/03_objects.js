// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]:"mykey1",
    age : 18,
    location : "Jaipur",
    email : "hitesh@google.com",
    isLoggedIn :false,
    lastLoginDays: ["Monday" , "Tuesday"],
}

// console.log(JsUser.email);
// console.log(JsUser.age);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);


JsUser.email = "hitesh@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");
    
}

console.log(JsUser.greeting);
