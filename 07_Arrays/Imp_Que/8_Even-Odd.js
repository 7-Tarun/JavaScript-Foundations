//Count the even and odd numbers in an array ( Using for of ).

let arr = [5, 12, 7, 18, 23, 40];
let e = 0;   //Indicate Even.
let o = 0;  //Indicate Odd.

for (let i of arr) {
    if (i % 2 === 0) {
        e++;
    }
    else {
        o++;
    }
}

console.log("Even:", e);
console.log("Odd", o);