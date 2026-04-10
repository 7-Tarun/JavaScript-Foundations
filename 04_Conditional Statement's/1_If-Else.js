let marks = prompt("Enter your marks out of 100: ");
marks = Number(marks); // Convert input to number

if (marks >= 90 && marks <=100){
    console.log("Grade: A");
}
else if(marks > 100 || marks < 0){
    console.log("Please Enter Valid marks.");
}
else if (marks >= 70){
    console.log("Grade: B");
}
else if (marks >= 60){
    console.log("Grade: C");
}
else if (marks >= 30){
    console.log("Grade: D");
}
else if(marks < 30){
    console.log("Fail");
}