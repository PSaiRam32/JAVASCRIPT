"use Strict";

//Array Literals

//let friends=["John", "Jane", "Jack", "Jill"];
// console.log(typeof friends);
// console.log(friends);

// console.log(friends.length);
// console.log(friends[friends.length-1]);
// console.log(friends.at(-1))

// friends[0]="Sai"
// console.log(friends);

const friends=["Suresh","Ramesh","Mahesh"]
//const friends2=friends
const friends2=[...friends] // Spread operater
console.log(friends2);
friends2[0]="Ravi"
console.log(friends);
console.log(friends2);

//Array Constructor
const dates=new Array(1990, 1991, 1992, 1993, 1994)
console.log(dates);

//Array of
const data1=Array.of(1,2,3,4,5) 
console.log(data1);

//Sparse Array
const sparseArray=new Array(5)
console.log(sparseArray);









