//Destructuring from Array.
//Use: When you know that specific data is stored at a specific position in the array, and you need to extract it by giviny it a name.
//Heavy Use in React.js

const arr = ["words","chair","table","phone","mobile"];

const [rank1, rank2,...looser] = arr;       //1st Two element of the array get's the specific name. 

console.log(`${rank1}`);
console.log(`${rank2}`);
console.log(`${looser}`);
console.log(looser);