//Never Use Var Varibale, Use const only when the value is fixed(ex- pi=3.14) or targeting any html element.
//Use Let only when the value is not constant and may change in future(ex- for loop-let i, or Player Score).

//Use Arrow Function, this is fast and efficient.


const maxHealth = 100;
let currentHealth = 50;

const healPlayer = (healAmount) =>{
    currentHealth += healAmount;

    if(currentHealth > maxHealth){
        currentHealth = maxHealth;
    }
    
    return currentHealth;
}

healPlayer(90);
console.log(`Current Health: ${currentHealth}`);