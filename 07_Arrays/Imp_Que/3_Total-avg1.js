//Find the average of array elements.

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
}

sum = sum / marks.length;

console.log("Average marks of all stuents:", sum);