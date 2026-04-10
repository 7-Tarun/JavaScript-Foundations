let name = prompt("What is your name?");
console.log("Hello:" + name + "!");
let age = prompt("Enter your age :");
console.log("You are " + age + " Years old");
console.log(typeof age);   // Prompt se input hamesha string hota hai.

let Age = Number(age);
console.log(typeof Age);

alert("Welcome to Java Script!");
alert("Hello "+ name +"\nYour age is "+ Age +".");