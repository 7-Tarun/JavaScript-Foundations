let container = document.getElementById("container");
let btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    container.firstElementChild.style.color = "red";        //Change the color of the first child.
    container.lastElementChild.style.color = "blue";        //Change the color of the last child.
    //printing tag name in console.
    console.log("First Child:",container.firstElementChild.tagName);
    console.log("Last Child:",container.lastElementChild.tagName);
});