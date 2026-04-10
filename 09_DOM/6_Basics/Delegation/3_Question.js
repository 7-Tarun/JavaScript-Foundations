let colors = document.getElementById("colors");
let btn = document.getElementById("btn");

colors.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        console.log("Color Clicked: "+event.target.textContent);
    }
});


let arr = ["Red","Brown","Yellow","Pink","Purple","Grey"];

btn.addEventListener("click",function(){
    if(arr.length === 0){
        alert("No Color left!");
        return;
    }
    let i = Math.floor(Math.random()*arr.length);
    let pick = arr[i];
    let item = document.createElement("li");
    item.textContent = pick;
    colors.appendChild(item);
    arr.splice(i,1)
});