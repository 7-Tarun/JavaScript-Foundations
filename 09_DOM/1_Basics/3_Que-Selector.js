let element = document.querySelector("p");  // Accessing element through tagName that is paragraph first element.
console.log(element);
console.log(element.tagName);               // Printind the tagName of the element in console.

let element2 = document.querySelector("#h3");    // Accessing element through id.
console.log(element2);
console.log(element2.tagName);

let element3 = document.querySelectorAll("p");  // Accessing all the elements through tagName.
console.log(element3);