const Marriage={
    date:"13-04-2025",
    address:{
        city:"Eluru",
        Distrrict:"West Godavari"
    },
    waitingforstatus(flowers,fn1){
        console.log(`Preparing gift using ${flowers}`)
        //return "Completed"
        fn1("Completed Ra")
        
    }
};

const res=Marriage.waitingforstatus("Red Roses",function(msg){
    console.log(msg);
    console.log("I will come to your home")
});
console.log(res);

