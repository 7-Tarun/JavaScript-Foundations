//Array Method:- map(). Accessing array elements without loop.

const arr = [12,13,14,15,16,17,18];

const square = arr.map(num => num*2);

console.log(`${square}`);
console.log(`${arr}`);
console.log(`${arr.map(num => num)}`);