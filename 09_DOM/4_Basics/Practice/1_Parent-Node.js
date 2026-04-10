let button = document.getElementById("btn");

button.addEventListener("click",function(){
    let parent = button.parentNode;             //button.parentNode Ye button ke parent element ko dikhata hai, or uss parent element ko parent variable me store kar liya
    parent.style.backgroundColor = "skyblue";
    console.log(parent.tagName);                //Parent element ka tag name dikhata hai, jo upper case me hota hai console pe.
});