// let name="Sai"
// let ph=6302314431
// let address="Eluru"

// console.log(name)
// console.log(ph)
// console.log(address)

// console.log(typeof name)
// console.log(typeof ph)
// console.log(typeof address)

//console.log(`${name} is from ${address}`)

//Class Creations
class student{
    static collegename="KL University"
    constructor(name,ph,address){
        this.name=name
        this.ph=ph
        this.address=address
    }
}
//Object Creation using Class name
// let student1=new student("Sai",6302314431,"Eluru")
// console.log(student1)
// console.log(`${student1.name} is from ${student1.address}`)
// if(student.city===undefined){
//     console.log("City Key is not available in Student Object")
// }
// else{
//     console.log(student.city)
// }
// console.log(typeof student1)
// console.log(student1 instanceof student)

// let student2=new student("Ravi",7569286549,"Vijayawada")

// //Accessing Static property of the Student Clas
// console.log(student.collegename)

//Creating Objects using Object Literals

let Student3={
    name:"Hair",
    ph:98668225360,
    address:"GNT",
}
// console.log(Student3)

//Creating Objects using Object Constructor
// let Student4=new Object()
// console.log(Student4)

//Updating the Object Properties
Student3.ph=9542807297
console.log(Student3)

//Adding New Properties to the Object
Student3.gender="male"
console.log(Student3)

//Deleting the Object Properties
delete Student3.gender;
console.log(Student3)

let string="Sai"
console.log(string.length)



