//A Sibiling are the child of the parent. Fx-If a a parent (container) has 4 child h1,h3,h4 and p then they are sibilings.
// Note:   Parent - Ak level uper.
//         Child - Ak level Niche.
//         Sibiling - Ak hi parent ke andar, same level wale.

let container = document.getElementById("container");
let btn = document.getElementById("btn");
let h2 = document.getElementById("h2");

btn.addEventListener("click",function(){
    h2.nextElementSibling.style.color = "red";
    btn.previousElementSibling.style.color = "blue";
});