// let student={
//     name:"SaiRam",
//     ph:6302314431,
//     address:"Madepalli, Eluru"
// }
// console.log(student);

// let student1=Object.assign({}, student);
// console.log(student1);
// student1.name="Hari";
// console.log(student1.name);
// console.log(student1);
// console.log(student.name);

// const obj={
//     a:1,
//     b:2,
// }

//Cloning of one object to another object
// const copy=Object.assign({}, obj);
// console.log(copy);

//Merging two objects
// const obj1={
//     a:1,
//     b:2,
// }
// const obj2={
//     c:3,
//     d:4,
// }
// const merged=Object.assign({}, obj1, obj2);
// console.log(merged);

//Merging two objects with same keys
// const obj3={
//     a:1,
//     b:2,
// }
// const obj4={
//     a:3,
//     b:4,
// }
// const merged1=Object.assign({}, obj3, obj4);
// console.log(merged1);

//Modify the target Object
// const target={
//     a:1,
// }
// Object.assign(target, {b:2}, {c:3});
// console.log(target);

//Spread Operator
let student1={
    name:"SaiRam",
    ph:6302314431,
    address:"Madepalli, Eluru"
}
console.log(student1);

let student2={...student1};
console.log(student2);
student2.name="Hari";
console.log(student2.name);
console.log(student2);
console.log(student1.name);

const obj={
    a:1,
    b:2,
}

//Cloning of one object to another object
const copy={...obj};
console.log(copy);

//Merging two objects
const obj1={
    a:1,
    b:2,
}
const obj2={
    c:3,
    d:4,
}
const merged={...obj1, ...obj2};
console.log(merged);

//Merging two objects with same keys
const obj3={
    a:1,
    b:2,
}
const obj4={
    a:3,
    b:4,
}
const merged1={...obj3, ...obj4};
console.log(merged1);


