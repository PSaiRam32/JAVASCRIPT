//Task -1
let dhoni={
    name:"Mahendra Singh Dhoni",
    Age:42,
    iscaptaincool:true,
    teams:["India","Chennai Super Kings"],
    statistics:{
        matches:538,
        runs:17266,
        centuries:16
    },
    retire: function(){
        console.log(`${this.name} retired from international cricket in 2020`)
    }
}

console.log(dhoni.name);
console.log(dhoni.statistics.runs);
console.log(dhoni.teams[0])
dhoni.retire()

//Task -2
let calculator={
    addition:function(a,b){
        return a+b
    },
    subtraction:function(a,b){
        return a-b
    },
    multiplication:function(a,b){
        return a*b
    },
}
console.log(calculator.addition(5,3))
console.log(calculator.subtraction(10,4))
console.log(calculator.multiplication(3,7))

//Task -3
const library={
    name:"Sai Libraray",
    books:[],
    totalBooks:0,
    addBook: function(title){
        this.books.push(title)
        this.totalBooks++
    },
}

library.addBook("Wings of fire")
library.addBook("Harry Potter")
library.addBook("Safe Agilist")

console.log(library.books)
console.log(library.totalBooks)