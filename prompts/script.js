// let username=prompt('What is your name..?','Sai')
// console.log(username)
// console.log(`Welcome, ${username} All the best`)

let username = prompt("What is your name..?");
console.log(username);
let height = prompt("What is your height(cm)..?");
console.log(height);
let weight = prompt("What is your weight(kg)..?");
console.log(weight);
console.log(`Welcome, ${username} please sit here`);

console.log(`Your height is ${height} cm`);
console.log(typeof height);
console.log(`Your weight is ${weight} kg`);
// console.log(typeof weight)
// let h=Number(height)
// let w=Number(weight)

// console.log(typeof h)
// console.log(typeof w)

height = height / 100;
console.log(`Your height is ${height} m`);

let bmi = (weight / height ** 2).toFixed(2);
console.log(`BMI: ${bmi}`);

// function res(){
//     if(bmi>18.5 && bmi<24.9){
//         console.log("Normal Weight")
//     }
//     else if(bmi<18.5){
//         console.log("Under Weight")
//     }
//     else{
//         console.log("Over Weight")
//     }
// }
// res()

bmi < 18.5
  ? console.log("Under Weight")
  : bmi > 25
  ? console.log("Over Weight")
  : console.log("Normal Weight");
