//There is also a new or better way to handle the promises results.
//Instead of using then and catch we use we use async function.

const game = new Promise((resolved,reject) => {
    let isLose = true;
    console.log(`Game Start...`);           //1. Code execute synchronously first.

    setTimeout(() => {                      //Asynchronous task goes to Web API,Promise state becomes 'Pending'.
        if(isLose){                         //After 3sec timer ends and reject part is execute.
            reject(`You Lose!`);
        }
        else{
            resolved(`You Won!`);
        }
    },3000);

})

//New Method: async/await

async function fight() {
    console.log(`Good things take time`);       //3. Executes immediatly when fucntion is called.

    try {
        const msg = await game;                //Pauses only this function until the promise settles. Main thread stays free.
        console.log(`Success: ${msg}`);
    }
    catch (error) {                             //Promise rejected. The result or the reason is passed to this 'error' parameter.
        console.log(`But not Everytime: ${error}`); //4. At last this statement is execute.
    }
}

console.log(`This is just a console!`);         //2. Global synchronous code runs before the function call.
fight();                                        //Function call.