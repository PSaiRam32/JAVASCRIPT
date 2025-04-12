"use strict";

let student={
    name:"Sai",
    ph:63002314431,
    address:"Madepalli, Eluru"
};
console.log(student);
//console.log(Object.getOwnPropertyDescriptor(student,"name"))
console.log(Object.getOwnPropertyDescriptors(student))

console.log(Object.keys(student))

// Object.defineProperty(student,"name",{
//     writable:false,
//     enumerable:false,
//     configurable:false
// });
// student.name="Ravi"
// console.log(student.name)
// delete student.name;
// console.log(student.name);
// console.log(Object.keys(student))

//Object.freeze(student)
//console.log(Object.getOwnPropertyDescriptors(student));

// Object.seal(student)
// console.log(Object.getOwnPropertyDescriptors(student));

Object.preventExtensions(student)
console.log(Object.getOwnPropertyDescriptors(student));



