//variable Declarations

console.log(x);
var x=10;
console.log(x)

//It will go to Temporal dead zone and 
//we will get an Reference error
// console.log(y)
// let y=10;

//Function Declarations
 
greetings()

function greetings(){
    console.log("Hey Good Morning Buddy")
}

//Function Expression:

// add()

// var add=function(){
//     console.log("Addition!")
// }
test()
function test(){
    console.log(a)
    var a=20
    console.log(a)
}


