const products = [
    { id: 1, name: "Asphalt Pro", price: 150, image: "Assets/limited-Product.jpeg"},
    { id: 2, name: "Nitro Gas", price: 50, image: "Assets/limited-Product.jpeg"},
    { id: 3, name: "Race Track", price: 520, image: "Assets/limited-Product.jpeg"},
    { id: 4, name: "New Models", price: 350, image: "Assets/limited-Product.jpeg"},
    { id: 5, name: "V8 Engine", price: 460, image: "Assets/limited-Product.jpeg"},
    { id: 6, name: "Color Design", price: 200, image: "Assets/limited-Product.jpeg"},
];

const shopItems = document.querySelector("#shopItems");
const cartItems = document.querySelector("#cartItem");
let cart = [];
const cartItem = document.querySelector("#cartItem");
const totalValueElement = document.querySelector("#totalValue");

const renderProduct = () => {
    shopItems.innerHTML = "";

    products.map(({ id, name, price, image }) => {
        shopItems.innerHTML += `<div class="item">
                    <img src="${image}" alt="${name}">
                    <p>Name: ${name}</p>
                    <p>Cost: <span class="value">${price}</span></p>
                    <button class="itemBtn" onclick="addtoCart(${id})">Add to Cart</button>
                </div>`;
    });
    ;
};

renderProduct();

const addtoCart = (productld) => {
    const selectedItem = products.find(item => item.id === productld);

    cart.push(selectedItem);
    console.log("Cart Array: ",cart);

    renderCart();
}

const renderCart = () => {
    cartItem.innerHTML = "";

    cart.map(({id,name,price,image}) => {
        cartItem.innerHTML += `<div style="background: #fff; padding: 8px; margin-bottom: 12px; border: 1px solid #ccc; border-radius: 4px;">
        <img src="${image}" alt="${name}">
                    <h4 style="margin-top: 5px"><span class="label">Name: </span>${name}</h4>
                    <p>Cost: ${price}</p>
                </div>`;
    });

    const calculatedTotal = cart.reduce((acc,curr) => {
        return acc+curr.price;
    },0);

    totalValueElement.innerText = calculatedTotal;
};