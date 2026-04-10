let outer = document.getElementById("outer");
let inner = document.getElementById("inner");
let btn = document.getElementById("btn");

outer.addEventListener("click",function(){
    console.log("Outer Div First (Capturing)");
},true);

inner.addEventListener("click",function(){
    console.log("Inner Div Second");
});

btn.addEventListener("click",function(){

});