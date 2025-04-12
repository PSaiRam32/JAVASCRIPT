//alert("welcome to part 2 of Objects")

// let fullname="Sai Ram Paidipati"
// console.log("Ela Vunnaru Babu")
// function greet(){
//     console.log(this)
//     console.log("Happy Birthday")
//     console.log("Baga Chaduvuko")
// }
// greet() 

// console.log("=====================")
// let student = {
//     name: fullname,
//     ph:6302314431,
//     address:"Eluru",
//     wish: function(){
//         console.log(this)
//         console.log(`Happy Birthday ${this.name}`)
//         console.log("Baga Chaduvuko")
//     }
//  };

// console.log(student.name);
// student.wish();

//alert(JSON.stringify(student))
// console.log(window)
// console.log(this)

//Task
// let Patient={
//     height:162,
//     weight:62,
//     "full-name":"K Vinay",
//     10: "Ten",
// }

// console.log(Patient["full-name"])
// console.log(Patient[10])

const key=prompt("Enter which key you want? name or age ?")
console.log(key);
const person={
    name:"Sai Ram Paidipati",
    age: 25,
}
console.log(person[key])

//Shorthand properties
const name="Sai"
const age=22;
const role="Employee"

const player={name,age,role};
console.log(player)

//Adding method using shortthand properties
const person1={
    name:"Sai Ram Paidipati",
    age: 25,
    greet(){
        console.log(`Hello ${this.name}`)
    }
}
person1.greet()

