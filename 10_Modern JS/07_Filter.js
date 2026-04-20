//Filter() will go through each item in the array.
//It will run arrow function(test condition) on it.
//If the condition is the true, it will put the item into a new array. The original array will be safe.

const ages = [12,18,20,24,14,16];

const adults = ages.filter(age => age >= 18);    //Here the age is a parameter not a variable.
console.log(adults);

//How is this code woring- jaise ki bataya filter ak ak array element ke pass jake condition check karta hai pahale vo array ke 1st element ke pass gaya or condition check ki, condition fail hui or kuch return nahi hua, aise hi sari elements ke sath condition check hogi or jaise hi koi condition true hogi value return hogi or new array list compiler ne banai thi usme add hogi.
//compiler filter function dekhte hi ak khali array bana leta hai.