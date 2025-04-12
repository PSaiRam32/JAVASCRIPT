"use Strict";

let student={
    name:"Sai",
    ph:6302314431,
    address:"Eluru",
    marks:undefined,
};

console.log(student)
console.log(student.marks)

// if(student.marks === undefined){
//     console.log("Marks Key is not defined");
// }
// else{
//     console.log("Marks Key is defined")
// }


console.log(student.hasOwnProperty("marks"));

const student1=Object.create(student); 
console.log(student1);

console.log(student1.hasOwnProperty("marks"));

console.log("marks" in student1);
