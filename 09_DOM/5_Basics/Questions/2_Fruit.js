let btn = document.getElementById("btn");
let fruit = document.getElementById("fruit");

btn.addEventListener("click", function () {
    let arr = ["Water Melon", "Banana", "Grapes", "Orange", "Guvava", "Pine Apple"];
    let i = Math.floor(Math.random() * arr.length);
    let pick = arr[i];
    let item = document.createElement("li");
    item.textContent = pick;
    fruit.appendChild(item);
});