// let username = "Sai";
// let password = "1234";

// { 
//   var a = 10;
//   var b = 20; 
//   let res = a + b;
//   console.log(a + b);
//   console.log(password)
// }
// console.log(a+b)
// validuser()
// function validuser() {
//   if (username === "Sai" && password === "1234") {
//     console.log("Valid User");
//   } else {
//     console.log("Invalid Credentials");
//   }
// }

let outerVar="I am in the global scope";

function outerFun(){
    let outerVar="I am in the outer scope";
    
    function innerFun(){
        let innerVar="I am in the inner scope";

        console.log(innerVar);
        console.log(outerVar)
        console.log(outerVar)
    }

    innerFun()
}

outerFun()