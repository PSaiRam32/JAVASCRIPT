// let student={
//     name:"Sai",
//     ph:6302314431,
//     address:{
//         city:"Eluru",
//         state:"Andhra Pradesh",
//     },
//     // wish: function(){
//     //     console.log("Happy Birthday "+this.name);
//     // }
// }

// console.log(student);
// let student1={...student}
// console.log(student1);
// student1.name="Ravi"
// console.log(student.name);
// console.log(student1.name);
// student1.address.city="Hyderabad"
// console.log(student.address.city);
// console.log(student1.address.city);


let student={
    name:"Sai",
    ph:6302314431,
    address:{
        city:"Eluru",
        state:"Andhra Pradesh",
    },
    // wish: function(){
    //     console.log("Happy Birthday "+this.name);
    // }
}
//Structed Cloning
let student2=structuredClone(student)
console.log(student2);
student2.name="Ravi"
console.log(student.name);
console.log(student2.name);
student2.address.city="Hyderabad"
console.log(student.address.city);
console.log(student2.address.city);