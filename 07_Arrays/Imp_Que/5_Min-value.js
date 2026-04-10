//Find the minimum element in an array.

let marks = [10,25,7,50,32];
let min = marks[0];
for(let i=0; i<marks.length; i++){
    if(min >= marks[i]){
        min = marks[i];
    }
}

console.log("The Minimum Marks of array is:",min);