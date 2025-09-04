let score = 34

console.log(typeof score);
console.log(typeof (score));
console.log("-----");

score = "34"
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log("-----");

score = "34etvr"
valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log("-----");

score = null
console.log(typeof score);
valueInNumber = Number(score)
console.log(score);
console.log(valueInNumber);
console.log("-----");

score = undefined
valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log("-----");

score = true
valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log("-----");

score = "Ashish"
valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log("-----");

// "34" => 34
// "34etv" => NaN (Not a Number)
// true => 1; false => 0


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log("-----");

isLoggedIn = 0
booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log("-----");

isLoggedIn = "Ashish"
booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log("-----");

// 1 => true; 0 => false
// "" => false; "Ashish" => true    // Empty string false, otherwise true

let someNumber = 45
let numberToString = String(someNumber)
console.log(numberToString);
console.log(typeof numberToString);
console.log("-----");

// **************** Operations **************
let value = 4
let negValue = -value
console.log(typeof negValue);
console.log("-----");

let str1 = "hello"
let str2 = " Ashish"
let str3 = str1 + str2
console.log(str3);
console.log("-----");

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "2");
console.log("1" + 2 + 2);               // If first is in String, then everything will be comsider as String
console.log(1 + 2 + "2");               // If String is in last, then normal operation and then concat
console.log("-----");

console.log(3 + 4 * 5 % 6);             // This is not the good way to write code, for questions it's ok. Otherwise it's not readable and not appricaible
console.log(((3 + 4) * 5) % 6);         // This is the correct wat to write the code, it's more readable and easy to understand
console.log("-----");



