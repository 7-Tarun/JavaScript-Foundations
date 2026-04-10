//Adding random fruit but not repetable.

let btn = document.getElementById("btn");
let fruit = document.getElementById("fruit");

let arr = ["Water Melon", "Banana", "Grapes", "Orange", "Guvava", "Pine Apple"];  //arr declare globally.

btn.addEventListener("click", function () {
    if(arr.length === 0){
        alert("No More fruit left!");
        return;
    }
    let i = Math.floor(Math.random() * arr.length);
    let pick = arr[i];
    let item = document.createElement("li");
    item.textContent = pick;
    fruit.appendChild(item);

    arr.splice(i, 1);  //removing the picked fruit from array.  splice original array ko modify karta hai.
    // arr.splice(i, 1) means starting from index i, remove 1 element. Matlab agar i=3 hoga to 3rd index ka ak element remove ho jayega.
});