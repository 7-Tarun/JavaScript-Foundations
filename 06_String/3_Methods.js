//Startwith & Endswith Method
let n = "JavaScript";
console.log(n.startsWith("Java"));
console.log(n.endsWith("Java"));


//Split Method, Three types of split.
let a = "Helo Bhai kaise ho";
console.log(a.split(""));
console.log(a.split(" "));  //Useful: String ko array me todta hai.
console.log(a.split("  "));


//IndexOf & LastIndexOf Method
let str = "Learn JavaScript Java";
console.log(str.indexOf("Java"));   //Count index from left to right and find the first match.
console.log(str.lastIndexOf("Java"));    //It find the last match.  (0 based indexing).