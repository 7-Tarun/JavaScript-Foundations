//Reverse an array.

let arr = [10, 20, 30, 40, 50];
let rev = [];

for (let i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
}

// for (let j = 0; j < rev.length; j++) {
//     console.log(rev[j]);
// }                                // Remove this comment to print each element individually.

console.log("Reversed Array:",rev);