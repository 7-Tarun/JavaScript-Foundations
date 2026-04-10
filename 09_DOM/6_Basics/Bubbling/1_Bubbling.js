document.getElementById("parent").addEventListener("click",function(){
    alert("Parent Clicked");
});

document.getElementById("child").addEventListener("click",function(){
    alert("Chlid Clicked");
});

// If you click on a <button> inside a <div>, first the button’s event runs, then the div’s event, then the body, etc. it is bubbling.
//How bubbling work: Child-> Parent-> Grand Parent-> Body-> HTML and so on.
//To stop bubbling use event.stopPropagation()