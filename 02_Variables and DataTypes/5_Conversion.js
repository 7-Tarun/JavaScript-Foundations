// Automatic type conversion in JavaScript

console.log("5"+3);       // Number 3 becomes string
console.log("5"-3);      // String 5 becomes number
console.log(true + 1);  // Boolean true becomes number 1
console.log(false + 1);// Boolean false becomes number 0

// Manual type conversion in JavaScript

let a = "10";
let b = Number(a);    // Now b becomes number 10
console.log(b + 5);

let c = "20";
let d = String(c);   // Now d is string "20"
console.log(d + "5"); 