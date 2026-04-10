let fruit = document.getElementById("fruit");
let btn = document.getElementById("btn");

fruit.addEventListener("click",function(e){
    //e.target = exact child element jo click hua
    if(e.target.tagName === "LI"){      //Agar clicked element li hai.
        console.log("Clicked:",e.target.textContent);   //To fruit name print kar do.
    }
});

//Button click pe naya element dynamically add karna.
btn.addEventListener("click",function(){
    let li = document.createElement("li");
    li.textContent = "Mango";
    fruit.appendChild(li);      //List ke end me add kar do.
});