let form = document.getElementById("myform");
let btn = document.getElementById("btn");
let link = document.getElementById("link");

btn.addEventListener("click",function(e){
    e.preventDefault();     // Ye page ko reload nahi hone dega.
    alert("Form Submitted without reload!");
});

link.addEventListener("click",function(e){
    e.preventDefault();     // Ab link open nahi hogi because it stops the reload.
    console.log("Link Clicked");
});