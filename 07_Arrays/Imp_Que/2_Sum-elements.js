//Find the sum of all elements in an array.

let num = [10,20,30,40,50,60];
let sum = 0;

for(let i = 0; i <= num.length-1; i++){         //Remove the = operator or use -1 to keep the length same as index.
    sum += num[i];
}
console.log(sum);