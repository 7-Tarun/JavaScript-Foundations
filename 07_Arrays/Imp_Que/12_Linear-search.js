//Lenear Searche: Task to find the target.

let arr = [15, 25, 35, 45, 55, 65];
let target = 45;
let found = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        console.log("The Target is at Index:", i + 1);
        found = true;
        break;
    }
}

if(!found){
    console.log("Target is not Found");
}

//Explanation: Found ko false rakha hai agar agar target mil jayega to found true ho jayega or !found kabhi chalega hi nahi or Target is not found bhi print nahi hoga but agar target nahi mila to loop me kuch bhi print nahi hoga or found false hi rahega or agar found false rahega to ! ki wajha se found false se true ho jayega or agar if ki condition true hogi to uske andar ka code run ho jayega or Target is not found print ho jayega.