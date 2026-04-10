const btn = document.querySelector("#spawnBtn");
const bag = document.querySelector("#inventory");

const items = ["Level 1 Helmet","Level 2 Helmet","Level 3 Helmet","Level 1 West","Level 2 West","Level 3 West","Energy Drink","Med Kit"];

btn.addEventListener("click",function(){
    //Creating New Element without displaying it into html
    const newItem = document.createElement("div");

    //Adding design classes
    newItem.classList.add("loot-item");
    const randomIndex = Math.floor(Math.random()*items.length);
    newItem.innerText = items[randomIndex];

    //Putting new Element into the box
    bag.appendChild(newItem);
});