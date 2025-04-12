const incbtn=document.getElementById("incrementBtn")
const decbtn=document.getElementById("decrementBtn")
const incby5btn=document.getElementById("5incrementBtn")
const decby5btn=document.getElementById("5decrementBtn")
const reset=document.getElementById("reset")


const resele=document.getElementById("res")
let counter=0;

incbtn.addEventListener('click',function(){
    counter=counter+1;
    resele.textContent=counter;
});

decbtn.addEventListener('click',function(){
    if(counter>0){
        counter=counter-1;
        resele.textContent=counter;
    }

})

incby5btn.addEventListener('click',function(){
    counter=counter+5;
    resele.textContent=counter;
})

decby5btn.addEventListener('click',function(){
    if(counter>4){
    counter=counter-5;
    resele.textContent=counter;
    }
})

reset.addEventListener('click',function(){
    counter=0;
    resele.textContent=counter;
})

console.log("Migita Panulu chedham")
