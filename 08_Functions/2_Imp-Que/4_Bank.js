let balance = 5000;
console.log("Previous Balance:",balance);

function deposite(amount){
    balance = balance + amount;             //Updating global balance
    console.log("New Balance is:",balance);
}

function checkBalance(){
    console.log("Your Current Balance is: ",balance);
}

deposite(1000);         //5000+1000(argument)
checkBalance();