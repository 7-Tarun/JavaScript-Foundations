//Count the even and odd numbers in an array.

let num = [32,22,15,14,65,78,34,56,72,11];
let even = 0;   //Indicate Even
let odd = 0;  //Indicate Odd

for(let i=0; i<num.length; i++){
    if(num[i]%2===0){
        even++;
    }
    else{
        odd++;
    }
}

console.log("Even Number:",even);
console.log("Odd Number:",odd);