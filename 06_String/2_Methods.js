// Uppercase and Lowercase Method.
let a = "Hello World!";
console.log(a);
console.log(a.toUpperCase());
console.log(a.toLowerCase());

//Trim Method.
let tri = "      Welcome      ";
console.log(tri);
console.log(tri.trim());

//Slice Method(start, end).
let str = "JavaScript";
console.log(str.slice(2,7));    // 2 se start matlab 0,1,2 - J,a,v.  7 pe end matlab 1,2,3,4,5,6,7 - J,a,v,a,S,c,r. Out:- vaScr.
console.log(str.slice(4));     //  End last 4

//Includes Method.
let name = "Stephen Strange";
console.log(name.includes("Ste"));
console.log(name.includes("Se"));

//Replace and Replace All Method.
let quote = "I love JS. JS is fun!";
console.log(quote.replace("JS", "JavaSCript"));
console.log(quote.replaceAll("JS", "JavaScript"));