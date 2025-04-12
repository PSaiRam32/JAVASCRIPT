"use Strict";

// let student={
//     name:"Sai",
//     ph:6302314431,
//     address:"Eluru",
// };

// console.log(Object.keys(student));

// console.log(Object.values(student));

// let student1=Object.create(student);
// student1.marks=100;
// console.log(student1);
// console.log(Object.keys(student1));

// for(let key in student1){
//     student1.hasOwnProperty(key) ? console.log("Own Property") : console.log("Inherited Property")
//     console.log(key)
//     console.log(key,student1[key]);
// }

const saiobj={
    name:"Sai",
    "College Name":"KL University",
    1:"Vijay",
    2:"Krishna",
    3:"Kiran",
}

for(let key in saiobj){
    console.log(key,saiobj[key]);
}


