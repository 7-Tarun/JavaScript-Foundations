//There is also a new or better way to handle the promises results.

const game = new Promise((resolved,reject) => {
    let isLose = true;
    console.log(`Game Start...`);
    setTimeout(() => {
        if(isLose){
            reject(`You Lose!`);
        }
        else{
            resolved(`You Won!`);
        }
    },3000);
})

//New Method: async/await

async function fight() {
    console.log(`Good things take time`);

    try {
        const msg = await game;
        console.log(`Success: ${msg}`);
    }
    catch (error) {
        console.log(`But not Everytime: ${error}`);
    }
}

console.log(`This is just a console!`);
fight();