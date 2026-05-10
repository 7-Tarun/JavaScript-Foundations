const cart = [
  { id: 101, name: "Sneakers", price: 1500 },
  { id: 102, name: "T-Shirt", price: 500 },
  { id: 103, name: "Jeans", price: 1200 }
];

// reduce syntax: array.reduce((totalValue, currentItem) => logic, initialValue)
const totalBill = cart.reduce((acc, item) => acc + item.price, 0);

console.log(`Total Amount: ${totalBill}`);