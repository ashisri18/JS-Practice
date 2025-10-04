"use strict";  // treat all JS code as newer version

// alert(3+3) // we are using nodejs, not browser

// Types of DataTypes: Premitive and Non-Premitive

console.log("=======Primitive==========");
// 1. Premitive: Call By Value

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => uniuqe

let fName = "Ashish"
let age = 33
let isLoggedIn = false
let state;
const marks = 75.5
const temp = null
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(typeof "Ashish Sri");   // string
console.log(typeof fName);          // string
console.log(typeof age);            // number
console.log(typeof isLoggedIn);     // boolean
console.log(typeof state);          // undefined
console.log(typeof undefined);      // undefined
console.log(typeof null);           // object
console.log(typeof marks);          // number
console.log(typeof temp);           // object
console.log(typeof id);             // symbol
console.log(id === anotherId);      // false -> because Symbols are always unique


console.log("=======Non-Primitive==========");
// 2. Non-Premitive: Call By Reference 

// Array, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "Doga"]
let myObj = {
    myName: "Ashish Srivastava",
    myAge: "36"
}
const myFunction = function(){
    console.log("Hello World");    
}

console.log(typeof heros);      // object
console.log(typeof myObj);      // object
console.log(typeof myFunction); // object



console.log("=================Memory============");
// There are two types of memory -- Stack and Heep Memory

// Stack Memory -> used by Primitive Datatypes

let myNickName = "Annu"
let myAnotherNickName = myNickName
myNickName = "Ashu"
console.log(myNickName);            // Ashu
console.log(myAnotherNickName);     // Annu

// Primitive Datatype variables stores in Stack memory. When we assign a variable to another variable of primitive type, it actually creates a copy of first one in the stack memory.
// So if we change value of one variable, it does not impact on another's value. That's why Primitive datatype are "Call By Value".


// Heep Memory -> used by Non-Primitive Datatypes

let userOne = {
    email: "annu@google.com",
    upi: "annu@upi"
}
let userTwo = userOne
userTwo.email = "ashu@google.com"
console.log(userOne.email);         // ashu@google.com
console.log(userTwo.email);         // ashu@google.com

// Non-Primitive Datatype variable's value stores in Heep memory. When we assign a variable to another variable of non-primitive type, it actually refers to the existing value in heep memory.
// So if we change value of any one variable, it does changes in the actual value where both are referring. That's why Non-Primitive datatype are "Call By Refernce".

