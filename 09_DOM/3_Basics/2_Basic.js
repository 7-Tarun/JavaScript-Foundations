const head = document.querySelector("#heading");
const playerstatus = document.querySelector("#playerstatus");
const btn = document.querySelector(".btn");
const lootBoxes = document.querySelectorAll(".lootBox");

btn.addEventListener("click", function () {
    playerstatus.classList.toggle("proMode");
    head.classList.toggle("proMode2");

    for (let i = 0; i < lootBoxes.length; i++) {
        lootBoxes[i].style.color = "black";
        lootBoxes[i].style.marginTop = "5px";
        lootBoxes[i].style.backgroundColor = "gold";
        lootBoxes[i].style.padding = "5px";
    }
});

//Note:- querySelectorAll direct element nahi deta. Ye array(list) deta hai.
//Jis wagha se hame loop ka use karke changes karna hoga.