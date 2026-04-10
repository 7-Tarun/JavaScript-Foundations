const btn = document.querySelector("#dropBtn");
const bag = document.querySelector("#inventary");

const items = ["Med-Kit", "Vest Level-1", "Vest Level-2", "Vest Level-3", "Helmet Level-1", "Helmet Level-2", "Helmet Level-3", "Energy Drink"];

btn.addEventListener("click", function () {
    const newItem = document.createElement("div");

    newItem.classList.add("loot-items");
    const randomItem = Math.floor(Math.random() * items.length);

    newItem.innerText = items[randomItem];

    newItem.addEventListener("click", function () {
        this.remove();
        console.log(this.innerText, "is picked up");
    });

    const itemcount = bag.children.length;

    if (itemcount >= 20) {
        alert("Inventary is Full! Remove items to add more items");
    }
    else {
        bag.appendChild(newItem);
    }
});