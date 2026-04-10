const inventory = [
    {id: 1,name: "Iron Sword", category: "Weapon",price:150},
    {id: 2,name: "Health Position", category: "Potion",price: 50},
    {id: 3,name: "Steel Claymore",category: "Weapon",price: 400},
    {id: 4,name: "Mana Position",category: "Potion",price: 75},
    {id: 5,name: "Dragon Spear",category: "Weapon",price: 1200},
];

const shopCatalog = document.querySelector("#shop-catalog");
const totalValue = document.querySelector("#total-value");

const allBtn = document.querySelector("#btn-all");
const weaponsBtn = document.querySelector("#btn-weapons");
const positionBtn = document.querySelector("#btn-potions");

const renderItems = (itemsArray) => {       //Pura inventory itemsArray variable me store ho jata hai.
    shopCatalog.innerHTML = "";     // start hote hi html me iss div me jo bhi likha hai sab hata diya().

    const total = itemsArray.reduce((acc, curr) => {
        return acc+curr.price;
    },0);

    totalValue.innerHTML = total;

    itemsArray.map(({id,name,category,price}) => {      //Accessing Array Elements through map(loop).
        const newItem = document.createElement("div");      //Creating new element.
        newItem.classList.add("item-card");                 //Adding class in new element.

        newItem.innerText = `Name: ${name}\n Price: ${price}`;      //Inserting data in the new created div.
        shopCatalog.appendChild(newItem);                           //and Insert it into the shopCatalog div.

    });
}

renderItems(inventory);     //Code started from here. Hamne parameter me pure 5 item wala array beja inventory.

weaponsBtn.addEventListener("click",function(){
    const weaponsOnly = inventory.filter(weapon => weapon.category === "Weapon");       //Category Weapons ko filter ki help se alag kar diya.
    renderItems(weaponsOnly);       //phir unhe parameter me pass kar diya rederItems function ko.
});

positionBtn.addEventListener("click",function(){            //Same Working as the above weaponsBtn.
    renderItems(inventory.filter(potion => potion.category === "Potion"));      //Using filter without saving in another variable.
});

allBtn.addEventListener("click",function(){
    renderItems(inventory);
});