//Find the maximum element in an array ( Another Method - Using for of).

let arr = [56,72,91,43,88,60];
let max = arr[0];

for(let i of arr){
    if(max < i){
        max = i;
    }
}

console.log("Maximum:",max);