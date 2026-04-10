const inventory = [
    { item: "Rusty Sword", price: 150 },
    { item: "Magic Potion", price: 500 },
    { item: "Dragon Scale", price: 2000 },
    { item: "Common Shield", price: 350 },
];

const total = inventory.reduce((totalGold, currentProduct) => {
    return totalGold + currentProduct.price;
},0);

console.log(`Total Price: ${total}`);