/* 
Syntax:-
    for(let key in object){
        code.
    }
*/

const person = {            //Here is person is the object and name, age, and city is the key and 19, delhi etc is the value.
    name: "Stephen",
    age: 19,
    city: "Delhi"
};

for(let key in person){
    console.log(key.toUpperCase());                   //prints keys
    console.log(person[key]);           //prints values
}