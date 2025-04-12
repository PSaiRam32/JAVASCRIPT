// //Number
// let age=22;
// let percent=96.9;
// console.log(typeof(age));
// console.log(typeof(percent));

// age=age/2;
// console.log(age);


// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)

// //64 bits
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)

// console.log(1/0)
// console.log(0/0)
// console.log(Number.POSITIVE_INFINITY)

//Tyepe conversion
// console.log("Sai"/10)
// console.log("30"/10)
// console.log(typeof NaN)

// console.log(typeof "number"/10)
// console.log(typeof ("number"/10))

//Built in Objects
//Uisng primitve data types
// let mathmarks=80;
// console.log(mathmarks)
// console.log(typeof mathmarks)

// //Using Built in Functions
// let engmarks=Number(90);
// console.log(engmarks)
// console.log(typeof engmarks)

// //Using Object Constructor
// let socialmarks=new Number(80);
// console.log(socialmarks)
// console.log(typeof socialmarks)

//By Default it will retun Zero
// let n21=Number()
// let n22;
// console.log(n22) -- Undefined 
// console.log(n21) -- 0
//Bigint 
// let noofstudents=9007199254740998n;
// console.log(noofstudents)
// console.log(typeof noofstudents)

//-BigInt(Build int Object)
// let noofstudents2=BigInt(9007199254740998n);
// noofstudents2=noofstudents2+BigInt(3);
// console.log(noofstudents2)
// let chnage =Number(noofstudents2)
// console.log(chnage)
// console.log(typeof chnage)

// let n1="10"
// console.log(typeof n1)
// console.log(typeof +n1)

//Boolean
// let isgood=true;
// console.log(isgood)
// console.log(typeof isgood)

// if(isgood){
//     console.log("Good Buy a Book")
// }
// else{
//     console.log("Bad Don't Buy a Book")
// }

//Boolean-Built IN Object
//By Default it will return false
// let isgood2=Boolean();
// console.log(isgood2)
// console.log(typeof isgood2)

//String
// let name=`Sai`
// console.log(typeof name)
// let name2=" "
// console.log(name2)

//Built In Oject
// let name3=String("Ram")
// console.log(name3)
// console.log(typeof name3)

//Using Objects
// let name4=new String("Sai Ram")
// console.log(name4.toLowerCase)
// console.log(name4.charAt(2))
// console.log(name4.charAt(4))
// console.log(typeof name4)

//Undefined
// let n1;
// console.log(n1)

// let n2=undefined;
// console.log(n2)
// console.log(typeof n2)

//Some cases for undefined outputs

// function test(){ }
// console.log(test())

// function test1(name){ 
//     console.log(name)
// }
// test1();

// const obj={a:1};
// console.log(obj.b); 

// const arr=[1, ,3];
// console.log(arr[1]);

//Null
// let marks;
// console.log(marks)
// console.log(typeof marks)
// marks=20;
// console.log(marks)
// console.log(typeof marks)
// marks=null;
// console.log(marks)
// console.log(typeof marks)

//Symbol
let test=Symbol("Sai")
console.log(typeof test)
console.log(test)
console.log(test.description)



 