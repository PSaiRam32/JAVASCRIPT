//Task -1
function greet(name){
    console.log(`Hello, ${name}`)
}

greet("Sai")

//Task-2
// function add(a,b,c,...rest){
//     console.log(rest)
//     return a+b+c+rest[0];
// }

// console.log(add(1,2,3,4,5,6,))

// Functiosn are First Class Objects because they can be,
// 1)Assigned to varaibles
// 2)Passed as Arguments

//Task -3
let multiplication=function (n1,n2,greetfun){
    greetfun(`Sai is multiplying these number : ${n1},${n2}`)
    return n1*n2;
}

console.log(multiplication(10,20,function(msg){
    console.log("Hey Bro")
    console.log(msg)
}));

// 3)Returned from other functions.
function mydetails(){
    function subfun(){
        console.log("This is SubFunction")
        return 100;
    }
    return subfun();
}

let res=mydetails();
console.log(res);

//Functions are Objects
function safe(a,b){
    console.log("JavaScript is very simple");
}

safe.desc="Functions are Objects"
console.log(typeof safe)
console.log(safe instanceof Function)
console.log(safe.desc)
console.log(safe.name)
console.log(safe.length) // Number of parameters of the function.

