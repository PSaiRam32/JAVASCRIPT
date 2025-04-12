let student={
    name:"SaiRam",
    ph:6302314431,
    address:"Madepalli, Eluru"
}
console.log(student);

let student1=student;
console.log(student1);
student1.name="Hari";
console.log(student1.name);
console.log(student1);
console.log(student.name);

let a=10;
let b=10;
console.log(a==b); 

let obj1={
    name:"SaiRam",
    ph:6302314431,
    address:"Madepalli, Eluru"
}
let obj2={
    name:"SaiRam",
    ph:6302314431,
    address:"Madepalli, Eluru"
}
console.log(obj1==obj2); 

let obj3=obj1;
console.log(obj3==obj1);