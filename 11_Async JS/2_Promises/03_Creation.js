//Creating Promise

const orderFood = new Promise((resolved,reject) => {
    console.log(`Chef start making food (Pending State)`);

    let isFoodBurnt = false;

    setTimeout(() => {
        if(isFoodBurnt) {
            reject(`Order Cancle: Food is Burned!`);
        }
        else{
            resolved(`Order Confirmed: Food is Ready.`);
        }
    },2000);
});

//The Consumption (Handling promise results)

orderFood
.then((message) => {
    //.then() This will run when promise is resolved.
    console.log(`Success: ${message}`);
})

.catch((error) => {
    //.catch() This will run when promise is rejected.
    console.log(`Error: ${error}`);
});