let list = document.getElementById("list");
let result = document.getElementById("result");

list.addEventListener("click",function(event){
    if(event.target.tagName === "SPAN"){        //Condition chech kar raha hai event.target.tagName span hai.
        result.textContent = "You selected: "+event.target.textContent;
        //text.Content, innerText, innerHTML ye sab web page pe user ko dikhta hai.
    }
});