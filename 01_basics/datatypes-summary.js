// Primitive 
// 7 types : string , number , boolean , null , undefined , symbol , bigint



const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


const bigNumber = 345796423789014235844672n



// Reference / non-primitive 


const heroes = ["shaktiman" , "naagraj" , "doga"];

let myObj = {
    name: "niti",
    age: 23,
}


const myFunction = function(){
    // console.log("Hello World");
    
}

// console.log(typeof myFunction);


// arrays , objects , functions 


// ------------------------------------------------------

//MEMORY


//STACK AND HEAP MEMORY 

// STACK == PRIMITIVE TYPE == copy

// HEAP == NON-PRIMITIVE TYPE == referrence == original 

let myYoutubeName = "nitithinks.com"

let anotherName = myYoutubeName
anotherName = "explorewithniti"

console.log(myYoutubeName);

console.log(anotherName);



let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "niti@google.com"

console.log(userOne.email);
console.log(userTwo.email); 
