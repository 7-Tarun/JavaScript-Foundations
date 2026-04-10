//We can also stop bubbling using stop.Propagation();

let parent = document.getElementById("parent");
let child = document.getElementById("child");

parent.addEventListener("click",function(){
    console.log("parent clicked!");
});

child.addEventListener("click",function(e){
    e.stopPropagation();        //This will stop Bubbling
    console.log("child clicked only!");
});