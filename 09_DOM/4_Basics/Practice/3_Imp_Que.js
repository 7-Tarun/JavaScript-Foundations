let list = document.getElementById("list");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");
let count = 3;                                       //Declare a global variable.

btn.addEventListener("click",function(){
    let item = document.createElement("li");        //Ak naya li banaya.
    count++;                                        //Count ko 1 se badha diya.
    item.textContent = "New Item"+count;            //Usme Text dala with count.
    list.appendChild(item);                      //List ke end me add kar do.
});

btn2.addEventListener("click",function(){
    let item = document.createElement("li");        //Ak naya li banaya.
    item.textContent = "New Item";                     //Usme Text dala.
    list.prepend(item);                      //List ke suru me add kar do.
});