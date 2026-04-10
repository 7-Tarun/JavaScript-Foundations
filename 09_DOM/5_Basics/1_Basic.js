let list = document.getElementById("list");

list.addEventListener("click",function(event){
    //event.target batata hai ki actual click kaha hua.
    if(event.target.tagName === "LI"){
        alert("You clicked on: "+ event.target.textContent);
        console.log(event.target.textContent);
    }
});