"use Strict";

let cancelbutton=document.getElementById("cancel")
console.log("start");
console.log("end");

let timer=setTimeout(function(){
    console.log("In Interval Bro")
    clearInterval(interval)
},5000);

cancelbutton.addEventListener('click',function(){
    console.log("clicked")
    clearTimeout(timer)
})

let counter=1;
let interval=setInterval(function () {
    console.log("1 sec completed",counter)
    counter++;
}, 1000);

