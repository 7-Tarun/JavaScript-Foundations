let container = document.getElementById("container");
let btn = document.getElementById("btn");
console.log(container.children[1].tagName);                 //Second child ka tag name print kar diya console me.

btn.addEventListener("click",function(){
    container.children[0].style.color = "red";          //This will change the color of the first child (h2) of container(parent). 
    container.children[1].style.color = "blue";        //This will change the color the the second child.
});