//Destructuring from Object.
//Ak hi line ka use karke object ke andar ka data nikal liya. Bina "."operator ka use kare.

const Student = {
    username: `Rohit`,
    rollno: 31,
    marks: 65.3,
};

// const username = Student.username;
// let rollno = Student.rollno;
// const marks = Student.marks;

const {username, rollno, marks} = Student;      //Uper 3 lines ka kam iss ak line ne kar diya.

console.log(`User Name: ${username}`);
console.log(`Roll No: ${rollno}`);
console.log(`Marks: ${marks}`);

// console.log(`Username: ${username}\nRoll No: ${rollno}\nMarks: ${marks}`);   or Uper 3 line ka code ye akela kar sakta hai.