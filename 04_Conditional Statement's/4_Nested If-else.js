let marks = prompt("Enter your marks out of hundred");
marks = Number(marks);

if(marks >= 90 && marks <= 100){
    if(marks === 100){
        console.log("You are not human.");
    }
    else{
        console.log("Excellent");
    }
}
else if(marks > 100){
    console.log("Invalid Marks Entered.");
}
else if(marks >= 75){
    console.log("Very Good");
}
else if (marks >= 60){
    console.log("Good");
}
else if(marks >= 32){
    console.log("Needs Inprovement");
}
else{
    console.log("Fail");
}