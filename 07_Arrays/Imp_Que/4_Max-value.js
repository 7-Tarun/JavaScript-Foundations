//Find the maximum element in an array.

let marks = [10,25,7,50,32];
let max = marks[0];
for(let i=0; i<marks.length; i++){
    if(max <= marks[i]){
        max = marks[i];
    }
}

console.log("The Maximum Marks of array is:",max);