const student = {                               //Here Student is called object and name, age, cgpa, and ispass is called key..
    name : "Tarun Ghadoria",
    age : 18,
    cgpa : 8.2,
    ispass : true,
};
console.log(student.cgpa);
console.log(student.age+1);
console.log(student["age"]);
student.name = "Rahul";
console.log(student.name);