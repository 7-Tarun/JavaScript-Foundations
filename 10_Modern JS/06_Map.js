const inventory = [
    {id: 1,name: "Iron Sword", category: "Weapon",price:150},
    {id: 2,name: "Health Position", category: "Potion",price: 50},
    {id: 3,name: "Steel Claymore",category: "Weapon",price: 400},
    {id: 4,name: "Mana Position",category: "Potion",price: 75},
    {id: 5,name: "Dragon Spear",category: "Weapon",price: 1200},
];

inventory.map(({id,name,category,price}) => {
    console.log(`Id: ${id}\nName: ${name}\nCategory: ${category}\nPrice: ${price}`);
});