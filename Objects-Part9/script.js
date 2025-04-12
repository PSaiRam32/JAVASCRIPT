"use Strict";

let student={
    name:"Sai",
    age:20,
    address:"Eluru"
};

console.log(student)

const animal={
    eats:true,
    walk(){
        console.log("Animal walks")
    }
}; 

const dog={
    barks:true,
};

console.log(dog);
dog.__proto__=animal; //Setting the animal as parent(prototype) object to dog Object
//Setting the animal as parent(prototype) object to dog Object
// Object.setPrototypeOf(dog,animal);

//getting the parent prototype of dog Object

// console.log(Object.getPrototypeOf(dog));
// console.log(dog.__proto__)
// console.log(dog.eats);

//Creating a new object with animal as prototype
const animalDetails=Object.create(animal); 
console.log(animalDetails)

//Creating an object without having any prototypes/Parent Objects
const emptyObject=Object.create(null);


