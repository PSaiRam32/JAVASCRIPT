// let saiage
// console.log("After Declaration",saiage)
// saiage=22
// console.log("After Intialization",saiage)

let saiage, suryaage, sujiage;
let currenttotalage=0;
let eligibleDL=18;
saiage = +prompt("Sai What is you age?");
suryaage = +prompt("Surya What is you age?");
sujiage = +prompt("Suji What is you age?");


//function Expressions
let thankyoumsg=function(name,age){
    console.log(`${name} age is: ${age || "Not Entered"}`)
    eligibleDL=18-age;
    if(age>18){
        console.log(`${name},You will get Driving License`)
    }
    else{
        console.log(`${name}, You need to wait for ${eligibleDL} more years to get driving license`, )
    }
    currenttotalage=currenttotalage+age;
    console.log("Total Age is ",currenttotalage)
    console.log("Thak you for answering..");
    console.log("Have a good Day,Thank you");
    function final(){
        console.log("Bye Frnds")
    } 
    final()
}




// console.log(`Sai Age is: ${saiage}`);
// console.log("Thak you for answering..");
// console.log("Have a good Day");

//console.log(`Surya Age is: ${suryaage}`);
// console.log("Thak you for answering..");
// console.log("Have a good Day");

// console.log(`Suji Age is: ${sujiage}`);
// console.log("Thak you for answering..");
// console.log("Have a good Day");
 
// console.log(`Sai Age is: ${saiage}`);
thankyoumsg("Sai",saiage);
// console.log(`Surya Age is: ${suryaage}`);
thankyoumsg("Surya",suryaage); 
// console.log(`Suji Age is: ${sujiage}`);
thankyoumsg("Suji",sujiage);
console.log("Total Age is:",currenttotalage)

//function Declaration
// function thankyoumsg() {
//   console.log("Thak you for answering..");
//   console.log("Have a good Day,Thank you");
//   console.log("Bye");
// }




