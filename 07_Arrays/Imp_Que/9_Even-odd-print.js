//Print all the even and odd numbers.

let arr = [5,12,7,18,23,40];
let even = [];
let odd = [];

for(let i=0; i<arr.length; i++){
    if(arr[i]%2 ===0){
        even.push(arr[i]);
    }
    else{
        odd.push(arr[i]);
    }
}

console.log("Even Numbers:",even);
console.log("Odd Numbers:",odd);