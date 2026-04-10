let parent = document.getElementById("parent");
let child = document.getElementById("child");

parent.addEventListener("click",function(){
    console.log("Parent Clicked (Capturing)");
},true);    //True = capturing.

child.addEventListener("click",function(){
    console.log("Child Clicked");
});

//Capturing Flow is Parent to child.
//true ke use ki wajha se hi capturing ho rahi hai Normally add.eventListener ka 3rd argument false hota hai by default - iska matlab bubbling mode. But jab has isse true karte hai - iska matlab capturing mode.