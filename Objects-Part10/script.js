"use Strict";

const name1="Sai";
const name2="Sai";
console.log(name1==name2);

let s1=Symbol("Sai");
console.log(s1)
let s2=Symbol("Sai");
console.log(s2)

console.log(s1===s2);

const obj={
    fullname:name1,
    [s1]:"value1",
    [s2]:"value2",
};

console.log(obj);
console.log(Object.keys(obj));
console.log(Object.getOwnPropertyDescriptor(obj,s1));
console.log(Object.getOwnPropertySymbols(obj));


